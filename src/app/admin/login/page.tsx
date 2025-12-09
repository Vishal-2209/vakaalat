'use client';

import { login } from "@/app/actions/auth";
import { Button } from "@/components/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    const result = await login(formData);
    if (result.success) {
      router.push('/admin');
    } else {
      setError(result.message || 'Login failed');
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="w-full max-w-md p-8 bg-white/5 rounded-xl border border-white/10">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
        
        {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded mb-4 text-sm text-center">
                {error}
            </div>
        )}

        <form action={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-white/70">Email</label>
            <input 
              name="email" 
              type="email" 
              required 
              className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-accent outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-white/70">Password</label>
            <input 
              name="password" 
              type="password" 
              required 
              className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-accent outline-none transition-colors"
            />
          </div>
          <Button variant="accent" className="w-full" type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
