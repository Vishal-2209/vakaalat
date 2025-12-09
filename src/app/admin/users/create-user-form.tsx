'use client';

import { Button } from "@/components/Button";
import { createUser } from "@/app/actions/auth";
import { useState } from "react";

export function CreateUserForm() {
    const [message, setMessage] = useState('');
    
    async function handleSubmit(formData: FormData) {
        const res = await createUser(formData);
        if (res.success) {
            setMessage('User created successfully');
            (document.getElementById('create-user-form') as HTMLFormElement).reset();
            setTimeout(() => setMessage(''), 3000);
        } else {
            setMessage(res.message || 'Error creating user');
        }
    }

    return (
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Create New Admin</h2>
            {message && <div className={`p-3 rounded mb-4 text-sm ${message.includes('success') ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>{message}</div>}
            
            <form id="create-user-form" action={handleSubmit} className="flex flex-col md:flex-row gap-4 items-end">
                <div className="flex-1 w-full">
                    <label className="block text-xs font-medium text-white/60 mb-1">Name</label>
                    <input name="name" required className="w-full bg-black/20 border border-white/10 rounded-lg p-2 text-sm text-white focus:border-accent outline-none" placeholder="John Doe" />
                </div>
                <div className="flex-1 w-full">
                    <label className="block text-xs font-medium text-white/60 mb-1">Email</label>
                    <input name="email" type="email" required className="w-full bg-black/20 border border-white/10 rounded-lg p-2 text-sm text-white focus:border-accent outline-none" placeholder="john@example.com" />
                </div>
                <div className="flex-1 w-full">
                    <label className="block text-xs font-medium text-white/60 mb-1">Password</label>
                    <input name="password" type="password" required className="w-full bg-black/20 border border-white/10 rounded-lg p-2 text-sm text-white focus:border-accent outline-none" placeholder="******" />
                </div>
                <Button variant="accent" type="submit">Create</Button>
            </form>
        </div>
    );
}
