'use client';

import { useEffect, useState } from 'react';

interface Props {
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

export default function Notification({ type, message, onClose }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    requestAnimationFrame(() => setVisible(true));
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300);
    }, 3700);
    return () => clearTimeout(timer);
  }, [onClose]);

  const isSuccess = type === 'success';

  return (
    <div
      className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-2xl text-sm font-medium transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
      } ${
        isSuccess
          ? 'bg-white border border-green-200 text-green-800 shadow-green-100/50'
          : 'bg-white border border-red-200 text-red-800 shadow-red-100/50'
      }`}
    >
      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${isSuccess ? 'bg-green-100' : 'bg-red-100'}`}>
        <svg className={`w-4 h-4 ${isSuccess ? 'text-green-600' : 'text-red-600'}`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          {isSuccess ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          )}
        </svg>
      </div>
      <span>{message}</span>
      <button
        onClick={() => { setVisible(false); setTimeout(onClose, 300); }}
        className="ml-2 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
