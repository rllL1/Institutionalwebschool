'use client';

import MediaPicker from '../MediaPicker';

interface Card {
  title: string;
  description: string;
  image?: string;
  badge?: string;
}

interface Props {
  content: Record<string, unknown>;
  onChange: (content: Record<string, unknown>) => void;
}

export default function CardsGridEditor({ content, onChange }: Props) {
  const cards = (content.cards as Card[]) || [];

  function updateField(field: string, value: unknown) {
    onChange({ ...content, [field]: value });
  }

  function updateCard(index: number, field: keyof Card, value: string) {
    const updated = cards.map((c, i) => (i === index ? { ...c, [field]: value } : c));
    updateField('cards', updated);
  }

  function addCard() {
    updateField('cards', [...cards, { title: '', description: '', image: '' }]);
  }

  function removeCard(index: number) {
    updateField('cards', cards.filter((_, i) => i !== index));
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Section Heading</label>
        <input type="text" value={(content.heading as string) || ''} onChange={(e) => updateField('heading', e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
        <input type="text" value={(content.subtitle as string) || ''} onChange={(e) => updateField('subtitle', e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Cards</label>
        {cards.map((card, i) => (
          <div key={i} className="border rounded-lg p-4 mb-3 bg-gray-50">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold text-gray-600">Card {i + 1}</span>
              <button type="button" onClick={() => removeCard(i)} className="text-red-400 hover:text-red-600 text-xs">Remove</button>
            </div>
            <div className="space-y-3">
              <input type="text" placeholder="Title" value={card.title} onChange={(e) => updateCard(i, 'title', e.target.value)}
                className="w-full px-3 py-2 border rounded-lg text-sm" />
              <textarea placeholder="Description" value={card.description} onChange={(e) => updateCard(i, 'description', e.target.value)} rows={2}
                className="w-full px-3 py-2 border rounded-lg text-sm" />
              <MediaPicker currentUrl={card.image} onSelect={(url) => updateCard(i, 'image', url)} />
            </div>
          </div>
        ))}
        <button type="button" onClick={addCard} className="text-sm text-green-600 hover:text-green-700 font-medium">+ Add Card</button>
      </div>
    </div>
  );
}
