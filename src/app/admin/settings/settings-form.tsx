'use client';

import { useState } from 'react';
import { Button } from '@/components/Button';
import { updateSettingsAction } from '@/app/actions/settings-actions';
import { Loader2, Save, Check, Link as LinkIcon, Smartphone, Globe } from 'lucide-react';
import type { Settings } from '@/lib/settings-data';

export function SettingsForm({ initialSettings }: { initialSettings: Settings }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ text: string, type: 'success' | 'error' } | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    const formData = new FormData(event.currentTarget);
    const result = await updateSettingsAction(formData);

    if (result.success) {
      setMessage({ text: result.message || 'Settings updated', type: 'success' });
    } else {
      setMessage({ text: result.message || 'Failed to update', type: 'error' });
    }
    
    setIsSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl bg-white/5 p-8 rounded-2xl border border-white/10">
      
      {message && (
        <div className={`p-4 rounded-lg text-sm flex items-center gap-2 ${message.type === 'success' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
          {message.type === 'success' ? <Check className="w-4 h-4" /> : null}
          {message.text}
        </div>
      )}

      <div className="space-y-2">
        <label className="text-sm font-medium text-white/70 flex items-center gap-2">
          <Globe className="w-4 h-4 text-accent" />
          Web App URL
        </label>
        <div className="relative">
            <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input 
              name="webAppUrl" 
              defaultValue={initialSettings.webAppUrl}
              required
              className="w-full bg-black/20 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors"
              placeholder="https://app.vakaalat.in"
            />
        </div>
        <p className="text-xs text-white/40">Link for the &quot;Web App&quot; button on the services page.</p>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-white/70 flex items-center gap-2">
          <Smartphone className="w-4 h-4 text-accent" />
          Android App URL
        </label>
        <div className="relative">
            <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input 
              name="androidAppUrl" 
              defaultValue={initialSettings.androidAppUrl}
              required
              className="w-full bg-black/20 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors"
              placeholder="https://storage.googleapis.com/..."
            />
        </div>
        <p className="text-xs text-white/40">Direct download link for the &quot;Download Android App&quot; button.</p>
      </div>

      <div className="pt-4">
        <Button variant="accent" className="w-full sm:w-auto min-w-[150px]" disabled={isSubmitting}>
          {isSubmitting ? (
            <><Loader2 className="w-4 h-4 animate-spin mr-2" /> Saving...</>
          ) : (
            <><Save className="w-4 h-4 mr-2" /> Save Changes</>
          )}
        </Button>
      </div>
    </form>
  );
}
