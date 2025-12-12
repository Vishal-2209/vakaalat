import { Metadata } from "next";
import { getSettings } from "@/lib/settings-data";
import { ServicesClient } from "./services-client";

export const metadata: Metadata = {
  title: "Law Firm Management Software | Client Handling, Case Tracking, Legal Tools",
  description: "LawConnect by Vakaalat is the ultimate client communication and case collaboration tool. Securely manage your law practice and client intake.",
};

export default async function ServicesPage() {
  const settings = await getSettings();
  return <ServicesClient settings={settings} />;
}
