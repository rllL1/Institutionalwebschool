'use client';

import MediaPicker from '../MediaPicker';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface Props {
  content: Record<string, unknown>;
  onChange: (content: Record<string, unknown>) => void;
}

export default function FeatureListEditor({ content, onChange }: Props) {
  const features = (content.features as Feature[]) || [];

  function updateField(field: string, value: unknown) {
    onChange({ ...content, [field]: value });
  }

  function updateFeature(index: number, field: keyof Feature, value: string) {
    const updated = features.map((f, i) => (i === index ? { ...f, [field]: value } : f));
    updateField('features', updated);
  }

  function addFeature() {
    updateField('features', [...features, { title: '', description: '', icon: '' }]);
  }

  function removeFeature(index: number) {
    updateField('features', features.filter((_, i) => i !== index));
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Section Heading</label>
        <input type="text" value={(content.heading as string) || ''} onChange={(e) => updateField('heading', e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Side Image</label>
        <MediaPicker currentUrl={content.sideImage as string} onSelect={(url) => updateField('sideImage', url)} />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Features</label>
        {features.map((feat, i) => (
          <div key={i} className="border rounded-lg p-4 mb-3 bg-gray-50">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold text-gray-600">Feature {i + 1}</span>
              <button type="button" onClick={() => removeFeature(i)} className="text-red-400 hover:text-red-600 text-xs">Remove</button>
            </div>
            <div className="space-y-2">
              <input type="text" placeholder="Icon label (e.g. EDU)" value={feat.icon} onChange={(e) => updateFeature(i, 'icon', e.target.value)}
                className="w-full px-3 py-2 border rounded-lg text-sm" />
              <input type="text" placeholder="Title" value={feat.title} onChange={(e) => updateFeature(i, 'title', e.target.value)}
                className="w-full px-3 py-2 border rounded-lg text-sm" />
              <textarea placeholder="Description" value={feat.description} onChange={(e) => updateFeature(i, 'description', e.target.value)} rows={2}
                className="w-full px-3 py-2 border rounded-lg text-sm" />
            </div>
          </div>
        ))}
        <button type="button" onClick={addFeature} className="text-sm text-green-600 hover:text-green-700 font-medium">+ Add Feature</button>
      </div>
    </div>
  );
}
