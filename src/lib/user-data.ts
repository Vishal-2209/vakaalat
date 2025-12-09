import { supabaseAdmin } from './supabase';

export type UserRole = 'SUPER_ADMIN' | 'ADMIN';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string; // Plain text
  role: UserRole;
}

// Fallback credentials if connection fails or table empty (optional, but good for bootstrapping)
const DEFAULT_ADMIN: User = {
    id: '1',
    name: 'Admin',
    email: process.env.ADMIN_EMAIL || 'vishal.aidasani@vakaalat.in',
    password: process.env.ADMIN_PASSWORD || 'ChangeMe123!', 
    role: 'SUPER_ADMIN'
};

export async function getUsers(): Promise<User[]> {
  const { data, error } = await supabaseAdmin
    .from('users')
    .select('*');

  if (error) {
    console.error('Error fetching users:', error);
    // If table doesn't exist or connection error, failing back for safety during migration
    return [DEFAULT_ADMIN];
  }
  
  if (!data || data.length === 0) {
      return [DEFAULT_ADMIN];
  }

  return data as User[];
}

export async function getUserByEmail(email: string): Promise<User | undefined> {
  const { data, error } = await supabaseAdmin
    .from('users')
    .select('*')
    .eq('email', email)
    .single();

  if (error || !data) {
     // Check default admin fallback
     if (email === DEFAULT_ADMIN.email) return DEFAULT_ADMIN;
     return undefined;
  }

  return data as User;
}

// saveUsers is deprecated
