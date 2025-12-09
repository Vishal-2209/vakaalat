import { promises as fs } from 'fs';
import path from 'path';

export interface Settings {
  webAppUrl: string;
  androidAppUrl: string;
}

const DATA_FILE = path.join(process.cwd(), 'data', 'settings.json');

const DEFAULT_SETTINGS: Settings = {
  webAppUrl: 'https://app.vakaalat.in',
  androidAppUrl: 'https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/build_outputs/vakaalat-app-x6krpe/web/KGpGflQw4JmhfWXVUu0L/Vakaalat%20One-release.apk'
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
