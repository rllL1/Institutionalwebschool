'use client';

interface Event {
  src: string;
  title: string;
  date: string;
}

interface Props {
  content: Record<string, unknown>;
  onChange: (content: Record<string, unknown>) => void;
}

export default function EventsCarouselEditor({ content, onChange }: Props) {
  const events = (content.events as Event[]) || [];

  function updateField(field: string, value: unknown) {
    onChange({ ...content, [field]: value });
  }

  function updateEvent(index: number, field: keyof Event, value: string) {
    const updated = events.map((e, i) => (i === index ? { ...e, [field]: value } : e));
    updateField('events', updated);
  }

  function addEvent() {
    updateField('events', [...events, { src: '', title: '', date: '' }]);
  }

  function removeEvent(index: number) {
    updateField('events', events.filter((_, i) => i !== index));
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Section Heading</label>
        <input type="text" value={(content.heading as string) || ''} onChange={(e) => updateField('heading', e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Events</label>
        {events.map((event, i) => (
          <div key={i} className="border rounded-lg p-4 mb-3 bg-gray-50">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold text-gray-600">Event {i + 1}</span>
              <button type="button" onClick={() => removeEvent(i)} className="text-red-400 hover:text-red-600 text-xs">Remove</button>
            </div>
            <div className="space-y-2">
              <input type="text" placeholder="Title" value={event.title} onChange={(e) => updateEvent(i, 'title', e.target.value)}
                className="w-full px-3 py-2 border rounded-lg text-sm" />
              <input type="text" placeholder="Date" value={event.date} onChange={(e) => updateEvent(i, 'date', e.target.value)}
                className="w-full px-3 py-2 border rounded-lg text-sm" />
              <input type="text" placeholder="Image URL (e.g. /images/photo.jpg)" value={event.src} onChange={(e) => updateEvent(i, 'src', e.target.value)}
                className="w-full px-3 py-2 border rounded-lg text-sm" />
            </div>
          </div>
        ))}
        <button type="button" onClick={addEvent} className="text-sm text-green-600 hover:text-green-700 font-medium">+ Add Event</button>
      </div>
    </div>
  );
}
