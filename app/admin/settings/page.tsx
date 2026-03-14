'use client';

import { useState, useEffect } from 'react';
import Notification from '../components/Notification';

interface LinkItem { label: string; href: string }

interface FooterData {
  about: string;
  quickLinks: LinkItem[];
  socialLinks: LinkItem[];
  contact: { email: string; phone: string; hours: string };
  copyright: string;
}

const inputClasses = 'w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none';

export default function SettingsPage() {
  const [footer, setFooter] = useState<FooterData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    fetch('/api/admin/settings')
      .then((r) => r.json())
      .then((data) => {
        const footerSetting = data.find((s: { key: string }) => s.key === 'footer');
        if (footerSetting) setFooter(footerSetting.value);
      })
      .finally(() => setLoading(false));
  }, []);

  async function handleSave() {
    if (!footer) return;
    setSaving(true);

    const res = await fetch('/api/admin/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key: 'footer', value: footer }),
    });

    if (res.ok) {
      for (const path of ['/', '/college', '/administration', '/academics', '/campus-life']) {
        await fetch('/api/admin/revalidate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ path }),
        });
      }
      setNotification({ type: 'success', message: 'Footer settings saved' });
    } else {
      setNotification({ type: 'error', message: 'Failed to save settings' });
    }
    setSaving(false);
  }

  function updateLink(list: 'quickLinks' | 'socialLinks', index: number, field: 'label' | 'href', value: string) {
    if (!footer) return;
    const updated = [...footer[list]];
    updated[index] = { ...updated[index], [field]: value };
    setFooter({ ...footer, [list]: updated });
  }

  function addLink(list: 'quickLinks' | 'socialLinks') {
    if (!footer) return;
    setFooter({ ...footer, [list]: [...footer[list], { label: '', href: '' }] });
  }

  function removeLink(list: 'quickLinks' | 'socialLinks', index: number) {
    if (!footer) return;
    setFooter({ ...footer, [list]: footer[list].filter((_, i) => i !== index) });
  }

  if (loading) {
    return (
      <div className="p-8 flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <svg className="w-8 h-8 animate-spin text-gray-300 mx-auto mb-3" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <p className="text-sm text-gray-400">Loading settings...</p>
        </div>
      </div>
    );
  }

  if (!footer) {
    return (
      <div className="p-8">
        <div className="bg-white rounded-2xl border border-amber-100 p-8 text-center max-w-lg mx-auto">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center mx-auto mb-4">
            <svg className="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          </div>
          <h2 className="text-lg font-bold text-gray-800 mb-2">No Settings Found</h2>
          <p className="text-gray-400 text-sm">Run the database seed script first to populate footer settings.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-3xl">
      {notification && <Notification {...notification} onClose={() => setNotification(null)} />}

      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-md shadow-purple-500/20">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Site Settings</h1>
            <p className="text-sm text-gray-400 mt-0.5">Manage footer and global configuration</p>
          </div>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-green-600 to-emerald-600 text-white text-sm font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm shadow-green-600/20"
        >
          {saving ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Saving...
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Save Settings
            </>
          )}
        </button>
      </div>

      <div className="space-y-6">
        {/* About & Copyright */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-50 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-sm font-bold text-gray-800">General Information</h2>
          </div>
          <div className="p-6 space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">About Text</label>
              <textarea value={footer.about} onChange={(e) => setFooter({ ...footer, about: e.target.value })} rows={3}
                className={inputClasses} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Copyright</label>
              <input type="text" value={footer.copyright} onChange={(e) => setFooter({ ...footer, copyright: e.target.value })}
                className={inputClasses} />
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-50 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
              <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-sm font-bold text-gray-800">Contact Information</h2>
          </div>
          <div className="p-6 space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
              <input type="email" value={footer.contact.email} onChange={(e) => setFooter({ ...footer, contact: { ...footer.contact, email: e.target.value } })}
                className={inputClasses} placeholder="email@example.com" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
              <input type="text" value={footer.contact.phone} onChange={(e) => setFooter({ ...footer, contact: { ...footer.contact, phone: e.target.value } })}
                className={inputClasses} placeholder="+63 XXX XXX XXXX" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Office Hours</label>
              <input type="text" value={footer.contact.hours} onChange={(e) => setFooter({ ...footer, contact: { ...footer.contact, hours: e.target.value } })}
                className={inputClasses} placeholder="Mon - Fri: 8:00 AM - 5:00 PM" />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h2 className="text-sm font-bold text-gray-800">Quick Links</h2>
            </div>
            <button onClick={() => addLink('quickLinks')} className="inline-flex items-center gap-1.5 text-sm text-green-600 hover:text-green-700 font-medium transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Add Link
            </button>
          </div>
          <div className="p-6 space-y-3">
            {footer.quickLinks.length === 0 && (
              <p className="text-sm text-gray-400 text-center py-4">No quick links added yet</p>
            )}
            {footer.quickLinks.map((link, i) => (
              <div key={i} className="flex gap-3 items-center group">
                <div className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center shrink-0 text-xs font-bold text-gray-400">
                  {i + 1}
                </div>
                <input type="text" value={link.label} onChange={(e) => updateLink('quickLinks', i, 'label', e.target.value)}
                  placeholder="Label" className={`flex-1 ${inputClasses}`} />
                <input type="text" value={link.href} onChange={(e) => updateLink('quickLinks', i, 'href', e.target.value)}
                  placeholder="/path" className={`flex-1 ${inputClasses}`} />
                <button onClick={() => removeLink('quickLinks', i)} className="w-8 h-8 rounded-lg hover:bg-red-50 flex items-center justify-center text-gray-300 hover:text-red-500 transition-colors shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
                <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-sm font-bold text-gray-800">Social Links</h2>
            </div>
            <button onClick={() => addLink('socialLinks')} className="inline-flex items-center gap-1.5 text-sm text-green-600 hover:text-green-700 font-medium transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Add Link
            </button>
          </div>
          <div className="p-6 space-y-3">
            {footer.socialLinks.length === 0 && (
              <p className="text-sm text-gray-400 text-center py-4">No social links added yet</p>
            )}
            {footer.socialLinks.map((link, i) => (
              <div key={i} className="flex gap-3 items-center group">
                <div className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center shrink-0 text-xs font-bold text-gray-400">
                  {i + 1}
                </div>
                <input type="text" value={link.label} onChange={(e) => updateLink('socialLinks', i, 'label', e.target.value)}
                  placeholder="Platform name" className={`flex-1 ${inputClasses}`} />
                <input type="text" value={link.href} onChange={(e) => updateLink('socialLinks', i, 'href', e.target.value)}
                  placeholder="https://..." className={`flex-1 ${inputClasses}`} />
                <button onClick={() => removeLink('socialLinks', i)} className="w-8 h-8 rounded-lg hover:bg-red-50 flex items-center justify-center text-gray-300 hover:text-red-500 transition-colors shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom save button */}
        <div className="flex justify-end pt-2 pb-4">
          <button
            onClick={handleSave}
            disabled={saving}
            className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-green-600 to-emerald-600 text-white text-sm font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm shadow-green-600/20"
          >
            {saving ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Saving...
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Save Footer Settings
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
