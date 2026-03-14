'use client';

import MediaPicker from '../MediaPicker';

interface Props {
  content: Record<string, unknown>;
  onChange: (content: Record<string, unknown>) => void;
}

export default function TextWithImageEditor({ content, onChange }: Props) {
  const paragraphs = (content.paragraphs as string[]) || [''];

  function updateField(field: string, value: unknown) {
    onChange({ ...content, [field]: value });
  }

  function updateParagraph(index: number, value: string) {
    const updated = [...paragraphs];
    updated[index] = value;
    updateField('paragraphs', updated);
  }

  function addParagraph() {
    updateField('paragraphs', [...paragraphs, '']);
  }

  function removeParagraph(index: number) {
    updateField('paragraphs', paragraphs.filter((_, i) => i !== index));
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Heading</label>
        <input type="text" value={(content.heading as string) || ''} onChange={(e) => updateField('heading', e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
        <MediaPicker currentUrl={content.image as string} onSelect={(url) => updateField('image', url)} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Image Position</label>
        <select value={(content.imagePosition as string) || 'right'} onChange={(e) => updateField('imagePosition', e.target.value)}
          className="w-full px-3 py-2 border rounded-lg">
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Paragraphs</label>
        {paragraphs.map((p, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <textarea value={p} onChange={(e) => updateParagraph(i, e.target.value)} rows={2}
              className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm" />
            {paragraphs.length > 1 && (
              <button type="button" onClick={() => removeParagraph(i)} className="text-red-400 hover:text-red-600 text-sm px-2">Remove</button>
            )}
          </div>
        ))}
        <button type="button" onClick={addParagraph} className="text-sm text-green-600 hover:text-green-700 font-medium">+ Add Paragraph</button>
      </div>
    </div>
  );
}
