import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md bg-white border border-emerald-200 rounded-2xl shadow-2xl p-4 flex items-start gap-3 animate-slideUp">
      <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
        <CheckCircle2 className="w-5 h-5" />
      </div>

      <div className="flex-1 pr-2">
        <h4 className="text-sm font-bold text-forest-900">{toast.title}</h4>
        <p className="text-xs text-forest-800/80 mt-0.5 leading-relaxed">{toast.message}</p>
      </div>

      <button
        onClick={onClose}
        className="text-forest-700 hover:text-forest-900 p-1 rounded-lg hover:bg-forest-50 transition-colors"
        aria-label="Dismiss toast"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
