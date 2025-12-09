import { promises as fs } from 'fs';
import path from 'path';

export interface Settings {
  clientWebAppUrl: string;
  clientAppDownloadUrl: string;
  lawyerWebAppUrl: string;
  lawyerAppDownloadUrl: string;
}

const DATA_FILE = path.join(process.cwd(), 'data', 'settings.json');

const DEFAULT_SETTINGS: Settings = {
  clientWebAppUrl: 'https://app.vakaalat.in/client',
  clientAppDownloadUrl: 'https://play.google.com/store/apps/details?id=com.vakaalat.client',
  lawyerWebAppUrl: 'https://app.vakaalat.in/lawyer',
  lawyerAppDownloadUrl: 'https://play.google.com/store/apps/details?id=com.vakaalat.lawyer'
};

export async function getSettings(): Promise<Settings> {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return { ...DEFAULT_SETTINGS, ...JSON.parse(data) };
  } catch (error) {
    return DEFAULT_SETTINGS;
  }
}

export async function updateSettings(settings: Settings) {
  try {
    // Ensure directory exists
    const dir = path.dirname(DATA_FILE);
    try {
      await fs.access(dir);
    } catch {
      await fs.mkdir(dir, { recursive: true });
    }

    await fs.writeFile(DATA_FILE, JSON.stringify(settings, null, 2));
  } catch (error) {
    console.error("Failed to save settings", error);
    throw new Error("Failed to save settings");
  }
}
