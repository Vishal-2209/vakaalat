import { promises as fs } from 'fs';
import path from 'path';

export interface Career {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
  requirements: string; // HTML supported
}

const CAREERS_FILE_PATH = path.join(process.cwd(), 'data', 'careers.json');

export async function getCareers(): Promise<Career[]> {
  try {
    const data = await fs.readFile(CAREERS_FILE_PATH, 'utf-8');
    return JSON.parse(data) as Career[];
  } catch (error) {
    console.error('Error reading careers:', error);
    return [];
  }
}

export async function getCareerById(id: string): Promise<Career | undefined> {
  const careers = await getCareers();
  return careers.find((c) => c.id === id);
}

export async function saveCareers(careers: Career[]): Promise<void> {
  try {
    await fs.writeFile(CAREERS_FILE_PATH, JSON.stringify(careers, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing careers:', error);
    throw new Error('Failed to save career data');
  }
}
