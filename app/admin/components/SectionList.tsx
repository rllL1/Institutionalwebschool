'use client';

import { useState, useCallback, useRef } from 'react';
import type { SectionRow, SectionType } from '@/lib/types';
import { SECTION_TYPE_LABELS } from '@/lib/types';
import SectionEditor from './SectionEditor';
import Notification from './Notification';

interface Props {
  pageId: string;
  pageSlug: string;
  initialSections: SectionRow[];
}

const sectionTypeIcons: Record<string, string> = {
  hero: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
  hero_video: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
  text_with_image: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
  cards_grid: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
  feature_list: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  events_carousel: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  image_cards: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
  leadership_hierarchy: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  text_block: 'M4 6h16M4 12h16M4 18h7',
  two_column_cards: 'M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7',
};

const defaultSectionIcon = 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z';

export default function SectionList({ pageId, pageSlug, initialSections }: Props) {
  const [sections, setSections] = useState<SectionRow[]>(initialSections);
  const [editingSection, setEditingSection] = useState<SectionRow | null>(null);
  const [editedContent, setEditedContent] = useState<Record<string, unknown>>({});
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [saving, setSaving] = useState(false);
  const [dragIdx, setDragIdx] = useState<number | null>(null);
  const [dragOverIdx, setDragOverIdx] = useState<number | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const titleDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const notify = useCallback((type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
  }, []);

  async function toggleEnabled(section: SectionRow) {
    const res = await fetch('/api/admin/sections', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: section.id, enabled: !section.enabled }),
    });
    if (res.ok) {
      setSections((prev) => prev.map((s) => (s.id === section.id ? { ...s, enabled: !s.enabled } : s)));
      await revalidate();
      notify('success', `Section ${section.enabled ? 'hidden' : 'visible'} on live site`);
    } else {
      notify('error', 'Failed to toggle section');
    }
  }

  async function deleteSection(id: string) {
    if (!confirm('Delete this section? This cannot be undone.')) return;
    const res = await fetch(`/api/admin/sections?id=${id}`, { method: 'DELETE' });
    if (res.ok) {
      setSections((prev) => prev.filter((s) => s.id !== id));
      await revalidate();
      notify('success', 'Section deleted');
    } else {
      notify('error', 'Failed to delete section');
    }
  }

  async function saveSection() {
    if (!editingSection) return;
    setSaving(true);

    const res = await fetch('/api/admin/sections', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: editingSection.id, content: editedContent }),
    });

    if (res.ok) {
      setSections((prev) => prev.map((s) => (s.id === editingSection.id ? { ...s, content: editedContent } : s)));
      setEditingSection(null);
      await revalidate();
      notify('success', 'Section saved and published');
    } else {
      notify('error', 'Failed to save section');
    }
    setSaving(false);
  }

  async function addSection(type: SectionType) {
    const res = await fetch('/api/admin/sections', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        page_id: pageId,
        type,
        title: SECTION_TYPE_LABELS[type],
        content: {},
        sort_order: sections.length,
      }),
    });
    if (res.ok) {
      const newSection = await res.json();
      setSections((prev) => [...prev, newSection]);
      setShowAddModal(false);
      notify('success', 'Section added');
    } else {
      notify('error', 'Failed to add section');
    }
  }

  async function revalidate() {
    const path = pageSlug === 'home' ? '/' : `/${pageSlug}`;
    await fetch('/api/admin/revalidate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path }),
    });
  }

  function handleDragStart(index: number) {
    setDragIdx(index);
  }

  async function handleDrop(targetIdx: number) {
    if (dragIdx === null || dragIdx === targetIdx) {
      setDragIdx(null);
      setDragOverIdx(null);
      return;
    }
    const reordered = [...sections];
    const [moved] = reordered.splice(dragIdx, 1);
    reordered.splice(targetIdx, 0, moved);
    setSections(reordered);
    setDragIdx(null);
    setDragOverIdx(null);

    const payload = reordered.map((s, i) => ({ id: s.id, sort_order: i }));
    await fetch('/api/admin/sections/reorder', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sections: payload }),
    });
    await revalidate();
  }

  return (
    <div>
      {notification && <Notification {...notification} onClose={() => setNotification(null)} />}

      {/* Section cards */}
      {sections.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
          <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <p className="text-lg font-semibold text-gray-400 mb-1">No sections yet</p>
          <p className="text-sm text-gray-300">Add your first section to start building this page</p>
        </div>
      ) : (
        <div className="space-y-3">
          {sections.map((section, index) => {
            const iconPath = sectionTypeIcons[section.type] || defaultSectionIcon;
            return (
              <div
                key={section.id}
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={(e) => { e.preventDefault(); setDragOverIdx(index); }}
                onDragLeave={() => setDragOverIdx(null)}
                onDrop={() => handleDrop(index)}
                onDragEnd={() => { setDragIdx(null); setDragOverIdx(null); }}
                className={`group bg-white rounded-2xl border p-4 flex items-center gap-4 transition-all duration-200 ${
                  !section.enabled ? 'opacity-50 border-gray-100' : 'border-gray-100 hover:border-gray-200 hover:shadow-md'
                } ${dragIdx === index ? 'shadow-xl scale-[1.02] border-green-300 ring-1 ring-green-200' : ''} ${
                  dragOverIdx === index && dragIdx !== index ? 'border-green-400 bg-green-50/30' : ''
                }`}
              >
                {/* Drag handle */}
                <div className="cursor-grab active:cursor-grabbing text-gray-300 hover:text-gray-500 transition-colors px-1 py-3" title="Drag to reorder">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="9" cy="6" r="1.5" /><circle cx="15" cy="6" r="1.5" />
                    <circle cx="9" cy="12" r="1.5" /><circle cx="15" cy="12" r="1.5" />
                    <circle cx="9" cy="18" r="1.5" /><circle cx="15" cy="18" r="1.5" />
                  </svg>
                </div>

                {/* Section icon */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  section.enabled ? 'bg-green-50 border border-green-100' : 'bg-gray-50 border border-gray-100'
                }`}>
                  <svg className={`w-5 h-5 ${section.enabled ? 'text-green-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
                  </svg>
                </div>

                {/* Section info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="font-semibold text-gray-800 truncate text-sm">{section.title || section.type}</p>
                    {!section.enabled && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-50 text-amber-600 border border-amber-100">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878l4.242 4.242M15 12a3 3 0 01-3.12 2.995M21 21l-6.878-6.878" />
                        </svg>
                        Hidden
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 font-medium">{SECTION_TYPE_LABELS[section.type] || section.type}</p>
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button
                    onClick={() => toggleEnabled(section)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg font-medium transition-colors ${
                      section.enabled
                        ? 'bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-100'
                        : 'bg-green-50 text-green-700 hover:bg-green-100 border border-green-100'
                    }`}
                    title={section.enabled ? 'Hide on live site' : 'Show on live site'}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      {section.enabled ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878l4.242 4.242M15 12a3 3 0 01-3.12 2.995M21 21l-6.878-6.878" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      )}
                    </svg>
                    {section.enabled ? 'Hide' : 'Show'}
                  </button>
                  <button
                    onClick={() => { setEditingSection(section); setEditedContent(section.content); }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-100 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Edit
                  </button>
                  <button
                    onClick={() => deleteSection(section.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg font-medium bg-red-50 text-red-700 hover:bg-red-100 border border-red-100 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Add Section button */}
      <button
        onClick={() => setShowAddModal(true)}
        className="mt-5 w-full py-4 border-2 border-dashed border-gray-200 rounded-2xl text-gray-400 hover:border-green-400 hover:text-green-600 hover:bg-green-50/30 transition-all duration-200 font-medium flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        Add Section
      </button>

      {/* Add Section Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowAddModal(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="px-6 py-5 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-800">Add New Section</h3>
              <p className="text-sm text-gray-400 mt-0.5">Choose a section type to add to this page</p>
            </div>
            <div className="p-6 grid grid-cols-2 gap-3 max-h-80 overflow-y-auto">
              {Object.entries(SECTION_TYPE_LABELS).map(([type, label]) => {
                const icon = sectionTypeIcons[type] || defaultSectionIcon;
                return (
                  <button
                    key={type}
                    onClick={() => addSection(type as SectionType)}
                    className="flex items-center gap-3 p-3.5 border border-gray-100 rounded-xl text-left hover:bg-green-50 hover:border-green-300 transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gray-50 group-hover:bg-green-100 flex items-center justify-center shrink-0 transition-colors">
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-green-700 transition-colors">{label}</span>
                  </button>
                );
              })}
            </div>
            <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50">
              <button onClick={() => setShowAddModal(false)} className="w-full py-2.5 text-sm text-gray-500 hover:text-gray-700 font-medium transition-colors">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Section Modal */}
      {editingSection && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setEditingSection(null)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between shrink-0">
              <div>
                <h2 className="text-lg font-bold text-gray-800">
                  Edit Section
                </h2>
                <p className="text-sm text-gray-400 mt-0.5">{SECTION_TYPE_LABELS[editingSection.type] || editingSection.type}</p>
              </div>
              <button onClick={() => setEditingSection(null)} className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="mb-5">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Section Title</label>
                <input
                  type="text"
                  value={editingSection.title || ''}
                  onChange={(e) => {
                    const newTitle = e.target.value;
                    setEditingSection({ ...editingSection, title: newTitle });
                    if (titleDebounceRef.current) clearTimeout(titleDebounceRef.current);
                    titleDebounceRef.current = setTimeout(() => {
                      fetch('/api/admin/sections', {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ id: editingSection.id, title: newTitle }),
                      });
                    }, 500);
                  }}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                  placeholder="e.g. Hero Banner"
                />
              </div>

              <SectionEditor section={{ ...editingSection, content: editedContent }} onChange={setEditedContent} />
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50 flex justify-end gap-3 shrink-0">
              <button onClick={() => setEditingSection(null)} className="px-5 py-2.5 text-sm text-gray-500 hover:text-gray-700 font-medium transition-colors rounded-xl hover:bg-gray-100">
                Cancel
              </button>
              <button
                onClick={saveSection}
                disabled={saving}
                className="px-6 py-2.5 bg-linear-to-r from-green-600 to-emerald-600 text-white text-sm font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm shadow-green-600/20"
              >
                {saving ? (
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Saving...
                  </span>
                ) : 'Save & Publish'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
