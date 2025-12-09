import { promises as fs } from 'fs';
import path from 'path';

export type UserRole = 'SUPER_ADMIN' | 'ADMIN';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string; // Stored in plain text for this demo as requested
  role: UserRole;
}

const USERS_FILE_PATH = path.join(process.cwd(), 'data', 'users.json');

// Fallback credentials if no users.json exists
const DEFAULT_ADMIN: User = {
    id: '1',
    name: 'Admin',
    email: process.env.ADMIN_EMAIL || 'vishal.aidasani@vakaalat.in',
    password: process.env.ADMIN_PASSWORD || 'ChangeMe123!', // Safe default if env not set
    role: 'SUPER_ADMIN'
};

export async function getUsers(): Promise<User[]> {
  try {
    const data = await fs.readFile(USERS_FILE_PATH, 'utf-8');
    return JSON.parse(data) as User[];
  } catch (error) {
    // If file doesn't exist, return default admin
    // In a real app, we might want to CREATE the file here if it doesn't exist
    // to persist the default user.
    return [DEFAULT_ADMIN];
  }
}

export async function getUserByEmail(email: string): Promise<User | undefined> {
  const users = await getUsers();
  return users.find((user) => user.email === email);
}

export async function saveUsers(users: User[]): Promise<void> {
  try {
    await fs.writeFile(USERS_FILE_PATH, JSON.stringify(users, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing users:', error);
    throw new Error('Failed to save user data');
  }
}
