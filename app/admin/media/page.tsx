'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import type { MediaRow } from '@/lib/types';
import Notification from '../components/Notification';

export default function MediaLibrary() {
  const [media, setMedia] = useState<MediaRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch('/api/admin/media')
      .then((r) => r.json())
      .then((data) => setMedia(data))
      .finally(() => setLoading(false));
  }, []);

  async function handleUpload(files: FileList) {
    setUploading(true);
    for (const file of Array.from(files)) {
      const formData = new FormData();
      formData.append('file', file);
      const res = await fetch('/api/admin/media/upload', { method: 'POST', body: formData });
      if (res.ok) {
        const newMedia = await res.json();
        setMedia((prev) => [newMedia, ...prev]);
      }
    }
    setUploading(false);
    setNotification({ type: 'success', message: `${files.length} file${files.length > 1 ? 's' : ''} uploaded` });
  }

  async function handleDelete(item: MediaRow) {
    if (!confirm(`Delete "${item.file_name}"? This cannot be undone.`)) return;
    const res = await fetch('/api/admin/media', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: item.id, storage_path: item.storage_path }),
    });
    if (res.ok) {
      setMedia((prev) => prev.filter((m) => m.id !== item.id));
      setNotification({ type: 'success', message: 'Image deleted' });
    } else {
      setNotification({ type: 'error', message: 'Failed to delete image' });
    }
  }

  function handleDrag(e: React.DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') setDragActive(true);
    else if (e.type === 'dragleave') setDragActive(false);
  }

  function handleFileDrop(e: React.DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleUpload(e.dataTransfer.files);
    }
  }

  return (
    <div className="p-8 max-w-7xl">
      {notification && <Notification {...notification} onClose={() => setNotification(null)} />}

      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md shadow-blue-500/20">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Media Library</h1>
            <p className="text-sm text-gray-400 mt-0.5">{media.length} file{media.length !== 1 ? 's' : ''} uploaded</p>
          </div>
        </div>
      </div>

      {/* Upload area */}
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleFileDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`relative cursor-pointer border-2 border-dashed rounded-2xl p-10 text-center mb-8 bg-white transition-all duration-200 ${
          dragActive
            ? 'border-green-400 bg-green-50/50 shadow-lg shadow-green-100/50'
            : 'border-gray-200 hover:border-green-300 hover:bg-green-50/20'
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => e.target.files && handleUpload(e.target.files)}
          className="hidden"
        />
        <div className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-colors ${
          dragActive ? 'bg-green-100' : 'bg-gray-50'
        }`}>
          <svg className={`w-7 h-7 transition-colors ${dragActive ? 'text-green-500' : 'text-gray-300'}`} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
          </svg>
        </div>
        {uploading ? (
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 animate-spin text-green-500" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <p className="text-sm font-medium text-green-600">Uploading...</p>
          </div>
        ) : (
          <>
            <p className="text-sm font-medium text-gray-600 mb-1">
              {dragActive ? 'Drop files here' : 'Drag & drop files here, or click to browse'}
            </p>
            <p className="text-xs text-gray-400">Supports PNG, JPG, GIF, SVG, WebP</p>
          </>
        )}
      </div>

      {/* Gallery */}
      {loading ? (
        <div className="text-center py-20">
          <svg className="w-8 h-8 animate-spin text-gray-300 mx-auto mb-3" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <p className="text-sm text-gray-400">Loading media...</p>
        </div>
      ) : media.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
          <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
            </svg>
          </div>
          <p className="text-lg font-semibold text-gray-400 mb-1">No images yet</p>
          <p className="text-sm text-gray-300">Upload your first image to get started</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {media.map((m) => (
            <div key={m.id} className="group relative aspect-square rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1">
              <Image src={m.public_url} alt={m.alt_text || m.file_name} fill className="object-cover" sizes="200px" />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3">
                <div className="flex justify-end">
                  <button
                    onClick={(e) => { e.stopPropagation(); handleDelete(m); }}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-200 bg-white/90 hover:bg-red-500 hover:text-white text-red-500 rounded-lg w-8 h-8 flex items-center justify-center shadow-sm backdrop-blur-sm"
                    title="Delete"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
                <p className="text-white text-xs font-medium truncate opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {m.file_name}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
