'use client';

import MediaPicker from '../MediaPicker';

interface Member {
  name: string;
  role: string;
  description: string;
  photo: string;
}

interface Tier {
  tier: number;
  members: Member[];
}

interface Props {
  content: Record<string, unknown>;
  onChange: (content: Record<string, unknown>) => void;
}

export default function LeadershipEditor({ content, onChange }: Props) {
  const tiers = (content.tiers as Tier[]) || [];

  function updateField(field: string, value: unknown) {
    onChange({ ...content, [field]: value });
  }

  function updateMember(tierIdx: number, memberIdx: number, field: keyof Member, value: string) {
    const updated = tiers.map((t, ti) =>
      ti === tierIdx
        ? { ...t, members: t.members.map((m, mi) => (mi === memberIdx ? { ...m, [field]: value } : m)) }
        : t
    );
    updateField('tiers', updated);
  }

  function addMember(tierIdx: number) {
    const updated = tiers.map((t, ti) =>
      ti === tierIdx ? { ...t, members: [...t.members, { name: '', role: '', description: '', photo: '' }] } : t
    );
    updateField('tiers', updated);
  }

  function removeMember(tierIdx: number, memberIdx: number) {
    const updated = tiers.map((t, ti) =>
      ti === tierIdx ? { ...t, members: t.members.filter((_, mi) => mi !== memberIdx) } : t
    );
    updateField('tiers', updated);
  }

  function addTier() {
    updateField('tiers', [...tiers, { tier: tiers.length + 1, members: [{ name: '', role: '', description: '', photo: '' }] }]);
  }

  function removeTier(tierIdx: number) {
    updateField('tiers', tiers.filter((_, i) => i !== tierIdx));
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
        <label className="block text-sm font-medium text-gray-700 mb-2">Leadership Tiers</label>
        {tiers.map((tier, ti) => (
          <div key={ti} className="border rounded-lg p-4 mb-4 bg-gray-50">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-bold text-gray-700">Tier {tier.tier}</span>
              {tiers.length > 1 && (
                <button type="button" onClick={() => removeTier(ti)} className="text-red-400 hover:text-red-600 text-xs">Remove Tier</button>
              )}
            </div>

            {tier.members.map((member, mi) => (
              <div key={mi} className="border rounded-lg p-3 mb-3 bg-white">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-gray-500">Member {mi + 1}</span>
                  {tier.members.length > 1 && (
                    <button type="button" onClick={() => removeMember(ti, mi)} className="text-red-400 hover:text-red-600 text-xs">Remove</button>
                  )}
                </div>
                <div className="space-y-2">
                  <input type="text" placeholder="Name" value={member.name} onChange={(e) => updateMember(ti, mi, 'name', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg text-sm" />
                  <input type="text" placeholder="Role" value={member.role} onChange={(e) => updateMember(ti, mi, 'role', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg text-sm" />
                  <textarea placeholder="Description" value={member.description} onChange={(e) => updateMember(ti, mi, 'description', e.target.value)} rows={2}
                    className="w-full px-3 py-2 border rounded-lg text-sm" />
                  <MediaPicker currentUrl={member.photo} onSelect={(url) => updateMember(ti, mi, 'photo', url)} />
                </div>
              </div>
            ))}
            <button type="button" onClick={() => addMember(ti)} className="text-sm text-green-600 hover:text-green-700 font-medium">+ Add Member</button>
          </div>
        ))}
        <button type="button" onClick={addTier} className="text-sm text-green-600 hover:text-green-700 font-medium">+ Add Tier</button>
      </div>
    </div>
  );
}
