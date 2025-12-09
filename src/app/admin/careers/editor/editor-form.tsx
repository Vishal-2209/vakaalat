'use client';

import { Button } from "@/components/Button";
import { createCareer, updateCareer } from "@/app/actions/career-actions";
import { Career } from "@/lib/career-data";

interface CareerEditorFormProps {
    career?: Career;
    isEditing: boolean;
}

export function CareerEditorForm({ career, isEditing }: CareerEditorFormProps) {
  return (
    <form action={isEditing ? updateCareer : createCareer} className="space-y-6">
        {isEditing && career && <input type="hidden" name="id" value={career.id} />}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Job Title</label>
                <input 
                    name="title" 
                    defaultValue={career?.title} 
                    required 
                    className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-accent outline-none"
                />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Location</label>
                <input 
                    name="location" 
                    defaultValue={career?.location} 
                    required 
                    className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-accent outline-none"
                    placeholder="e.g. Remote / Mumbai"
                />
            </div>
        </div>

        <div className="space-y-2">
             <label className="text-sm font-medium text-white/70">Job Type</label>
             <select 
                name="type" 
                defaultValue={career?.type || 'Full-time'}
                className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-accent outline-none [&>option]:bg-neutral-900"
            >
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
            </select>
        </div>

        <div className="space-y-2">
            <label className="text-sm font-medium text-white/70">Description</label>
            <textarea 
                name="description" 
                defaultValue={career?.description} 
                required 
                rows={5}
                className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-accent outline-none text-sm leading-relaxed"
            />
        </div>

        <div className="space-y-2">
            <label className="text-sm font-medium text-white/70">Requirements (HTML Supported)</label>
            <textarea 
                name="requirements" 
                defaultValue={career?.requirements} 
                required 
                rows={10}
                className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-accent outline-none font-mono text-sm leading-relaxed"
                placeholder="<ul><li>Requirement 1</li><li>Requirement 2</li></ul>"
            />
             <p className="text-xs text-white/40">You can use basic HTML tags like &lt;ul&gt; and &lt;li&gt; for lists.</p>
        </div>

        <div className="flex justify-end gap-4 pt-4 border-t border-white/10">
            <Button variant="outline" type="button" onClick={() => window.history.back()}>Cancel</Button>
            <Button variant="accent" type="submit">{isEditing ? 'Update Role' : 'Publish Role'}</Button>
        </div>
      </form>
  );
}
