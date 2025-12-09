import { promises as fs } from 'fs';
import path from 'path';

export type UserRole = 'SUPER_ADMIN' | 'ADMIN';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string; // Plain text
  role: UserRole;
}

const DATA_FILE = path.join(process.cwd(), 'data', 'users.json');

// Fallback credentials if file missing (Production/GitIgnored)
const DEFAULT_ADMIN: User = {
    id: '1',
    name: 'Admin',
    email: process.env.ADMIN_EMAIL || 'vishal.aidasani@vakaalat.in',
    password: process.env.ADMIN_PASSWORD || 'ChangeMe123!', 
    role: 'SUPER_ADMIN'
};

export async function getUsers(): Promise<User[]> {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // Return default admin if file not found
    return [DEFAULT_ADMIN];
  }
}

export async function getUserByEmail(email: string): Promise<User | undefined> {
  const users = await getUsers();
  return users.find((user) => user.email === email);
}

export async function saveUsers(users: User[]) {
    try {
        await fs.writeFile(DATA_FILE, JSON.stringify(users, null, 2));
    } catch (error) {
        console.error("Failed to save users", error);
        throw new Error("Failed to save data");
    }
}
