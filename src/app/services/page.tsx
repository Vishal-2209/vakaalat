import { getSettings } from "@/lib/settings-data";
import { ServicesClient } from "./services-client";

export default async function ServicesPage() {
  const settings = await getSettings();
  return <ServicesClient settings={settings} />;
}
