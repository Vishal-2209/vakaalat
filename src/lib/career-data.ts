import { promises as fs } from 'fs';
import path from 'path';

export interface Career {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
  requirements: string;
}

const DATA_FILE = path.join(process.cwd(), 'data', 'careers.json');

export async function getCareers(): Promise<Career[]> {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

export async function getCareerById(id: string): Promise<Career | undefined> {
    const careers = await getCareers();
    return careers.find(c => c.id === id);
}

export async function saveCareers(careers: Career[]) {
    try {
        await fs.writeFile(DATA_FILE, JSON.stringify(careers, null, 2));
    } catch (error) {
        console.error("Failed to save careers", error);
        throw new Error("Failed to save data");
    }
}
