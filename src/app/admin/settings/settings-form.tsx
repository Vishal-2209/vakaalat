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

      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-white/90 border-b border-white/10 pb-2">Client App Settings</h3>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/70 flex items-center gap-2">
            <Globe className="w-4 h-4 text-accent" />
            Client Web App URL
          </label>
          <div className="relative">
              <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input 
                name="clientWebAppUrl" 
                defaultValue={initialSettings.clientWebAppUrl}
                required
                className="w-full bg-black/20 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors"
                placeholder="https://app.vakaalat.in/client"
              />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-white/70 flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-accent" />
            Client App Download URL
          </label>
          <div className="relative">
              <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input 
                name="clientAppDownloadUrl" 
                defaultValue={initialSettings.clientAppDownloadUrl}
                required
                className="w-full bg-black/20 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors"
                placeholder="https://play.google.com/..."
              />
          </div>
        </div>
      </div>

      <div className="space-y-6 pt-4">
        <h3 className="text-lg font-semibold text-white/90 border-b border-white/10 pb-2">Lawyer App Settings</h3>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/70 flex items-center gap-2">
            <Globe className="w-4 h-4 text-accent" />
            Lawyer Web App URL
          </label>
          <div className="relative">
              <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input 
                name="lawyerWebAppUrl" 
                defaultValue={initialSettings.lawyerWebAppUrl}
                required
                className="w-full bg-black/20 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors"
                placeholder="https://app.vakaalat.in/lawyer"
              />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-white/70 flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-accent" />
            Lawyer App Download URL
          </label>
          <div className="relative">
              <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input 
                name="lawyerAppDownloadUrl" 
                defaultValue={initialSettings.lawyerAppDownloadUrl}
                required
                className="w-full bg-black/20 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors"
                placeholder="https://play.google.com/..."
              />
          </div>
        </div>
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
