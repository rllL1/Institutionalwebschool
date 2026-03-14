'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import type { MediaRow } from '@/lib/types';

interface Props {
  currentUrl?: string;
  onSelect: (url: string) => void;
}

export default function MediaPicker({ currentUrl, onSelect }: Props) {
  const [open, setOpen] = useState(false);
  const [media, setMedia] = useState<MediaRow[]>([]);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open) return;
    setLoading(true);
    fetch('/api/admin/media')
      .then((r) => r.json())
      .then((data) => setMedia(data))
      .finally(() => setLoading(false));
  }, [open]);

  async function handleUpload(file: File) {
    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/admin/media/upload', { method: 'POST', body: formData });
    if (res.ok) {
      const newMedia = await res.json();
      setMedia((prev) => [newMedia, ...prev]);
      onSelect(newMedia.public_url);
      setOpen(false);
    }
    setUploading(false);
  }

  return (
    <div>
      {currentUrl && (
        <div className="relative w-full h-40 rounded-lg overflow-hidden mb-2 bg-gray-100 border">
          <Image src={currentUrl} alt="Current" fill className="object-cover" sizes="400px" />
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="px-4 py-2 text-sm bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
      >
        {currentUrl ? 'Change Image' : 'Select Image'}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-3xl max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">Media Library</h3>
              <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center mb-6">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0])}
                className="text-sm"
              />
              {uploading && <p className="text-sm text-gray-500 mt-2">Uploading...</p>}
            </div>

            {loading ? (
              <p className="text-center text-gray-400 py-8">Loading media...</p>
            ) : media.length === 0 ? (
              <p className="text-center text-gray-400 py-8">No media uploaded yet</p>
            ) : (
              <div className="grid grid-cols-4 gap-3">
                {media.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => { onSelect(m.public_url); setOpen(false); }}
                    className="relative aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-green-500 transition-colors"
                  >
                    <Image src={m.public_url} alt={m.alt_text || m.file_name} fill className="object-cover" sizes="150px" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
