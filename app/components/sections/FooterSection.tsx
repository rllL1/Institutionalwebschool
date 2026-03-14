import type { FooterContent } from '@/lib/types';

const defaultFooter: FooterContent = {
  about: 'St. Dominic Savio College is committed to providing quality education and holistic development of students since 1993.',
  quickLinks: [
    { label: 'Academics', href: '/academics' },
    { label: 'Admission', href: '/admission' },
    { label: 'Events', href: '/events' },
    { label: 'Contact', href: '/contact' },
  ],
  socialLinks: [
    { label: 'Facebook', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'Twitter', href: '#' },
    { label: 'LinkedIn', href: '#' },
  ],
  contact: { email: 'info@sdsc.edu', phone: '+1 (555) 123-4567', hours: 'Mon-Fri: 9AM-5PM' },
  copyright: '2026 St. Dominic Savio College. All rights reserved.',
};

interface Props {
  content: FooterContent | null;
}

export default function FooterSection({ content }: Props) {
  const data = content ?? defaultFooter;

  return (
    <footer className="bg-gray-900 text-white py-14 px-4 border-t-4 border-green-600">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-green-400">About Us</h3>
          <p className="text-gray-400">{data.about}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-green-400">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            {data.quickLinks.map((link) => (
              <li key={link.href}><a href={link.href} className="hover:text-white transition">{link.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-green-400">Follow Us</h3>
          <ul className="text-gray-400 space-y-2">
            {data.socialLinks.map((link) => (
              <li key={link.label}><a href={link.href} className="hover:text-white transition">{link.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-green-400">Contact Info</h3>
          <p className="text-gray-400 mb-2">{data.contact.email}</p>
          <p className="text-gray-400 mb-2">{data.contact.phone}</p>
          <p className="text-gray-400">{data.contact.hours}</p>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
        <p>&copy; {data.copyright}</p>
      </div>
    </footer>
  );
}
