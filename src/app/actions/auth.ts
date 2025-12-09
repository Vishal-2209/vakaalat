'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { supabaseAdmin } from '@/lib/supabase';
import { getUserByEmail,  UserRole } from '@/lib/user-data';
import { revalidatePath } from 'next/cache';

const COOKIE_NAME = 'admin_session';

interface Session {
    userId: string;
    role: UserRole;
    name: string;
}

export async function login(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const user = await getUserByEmail(email);

  // Simple plain text check
  if (user && user.password === password) {
    const cookieStore = await cookies();
    
    const session: Session = {
        userId: user.id,
        role: user.role,
        name: user.name
    };

    cookieStore.set(COOKIE_NAME, JSON.stringify(session), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
    });
    return { success: true };
  } else {
    return { success: false, message: 'Invalid credentials' };
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
  redirect('/admin/login');
}

export async function getSession(): Promise<Session | null> {
    const cookieStore = await cookies();
    const cookie = cookieStore.get(COOKIE_NAME);
    if (!cookie) return null;
    try {
        return JSON.parse(cookie.value);
    } catch {
        return null;
    }
}

export async function isLoggedIn() {
  const session = await getSession();
  return !!session;
}

export async function getCurrentUserRole(): Promise<UserRole | null> {
    const session = await getSession();
    return session?.role || null;
}

// User Management Actions

export async function createUser(formData: FormData) {
    const session = await getSession();
    if (!session || session.role !== 'SUPER_ADMIN') {
        throw new Error('Unauthorized');
    }

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    
    // Check if exists
    const existing = await getUserByEmail(email);
    if (existing) {
        return { success: false, message: 'User with this email already exists' };
    }

    const newUser = {
        name,
        email,
        password,
        role: 'ADMIN' // Default role
    };

    const { error } = await supabaseAdmin.from('users').insert([newUser]);

    if (error) {
        console.error('Error creating user:', error);
        return { success: false, message: 'Failed to create user' };
    }
    
    revalidatePath('/admin/users');
    return { success: true };
}

export async function deleteUser(id: string) {
    const session = await getSession();
    if (!session || session.role !== 'SUPER_ADMIN') {
        throw new Error('Unauthorized');
    }

    if (id === session.userId) {
         throw new Error('Cannot delete yourself');
    }

    const { error } = await supabaseAdmin.from('users').delete().eq('id', id);
    if (error) {
         console.error('Error deleting user:', error);
         throw new Error('Failed to delete user');
    }
    
    revalidatePath('/admin/users');
}
