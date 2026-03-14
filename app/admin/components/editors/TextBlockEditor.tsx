'use client';

interface Props {
  content: Record<string, unknown>;
  onChange: (content: Record<string, unknown>) => void;
}

export default function TextBlockEditor({ content, onChange }: Props) {
  function update(field: string, value: string) {
    onChange({ ...content, [field]: value });
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Heading</label>
        <input type="text" value={(content.heading as string) || ''} onChange={(e) => update('heading', e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Body</label>
        <textarea value={(content.body as string) || ''} onChange={(e) => update('body', e.target.value)} rows={8}
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
      </div>
    </div>
  );
}
