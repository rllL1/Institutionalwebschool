'use client';

import MediaPicker from '../MediaPicker';

interface Props {
  content: Record<string, unknown>;
  onChange: (content: Record<string, unknown>) => void;
}

export default function HeroVideoEditor({ content, onChange }: Props) {
  function update(field: string, value: string) {
    onChange({ ...content, [field]: value });
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
        <input type="text" value={(content.title as string) || ''} onChange={(e) => update('title', e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
        <input type="text" value={(content.subtitle as string) || ''} onChange={(e) => update('subtitle', e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea value={(content.description as string) || ''} onChange={(e) => update('description', e.target.value)} rows={3}
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Video Source URL</label>
        <input type="text" value={(content.videoSrc as string) || ''} onChange={(e) => update('videoSrc', e.target.value)}
          placeholder="/videos/example.mp4"
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Poster Image (video fallback)</label>
        <MediaPicker currentUrl={content.posterImage as string} onSelect={(url) => update('posterImage', url)} />
      </div>
    </div>
  );
}
