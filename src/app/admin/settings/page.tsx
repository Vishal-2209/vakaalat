import { isLoggedIn } from "@/app/actions/auth";
import { getSettings } from "@/lib/settings-data";
import { redirect } from "next/navigation";
import { SettingsForm } from "./settings-form";
import Link from "next/link";
import { Button } from "@/components/Button";
import { ArrowLeft } from "lucide-react";

export default async function SettingsPage() {
  const authorized = await isLoggedIn();
  if (!authorized) {
    redirect('/admin/login');
  }

  const settings = await getSettings();

  return (
    <div className="container mx-auto max-w-5xl py-8">
      <div className="mb-8">
        <Link href="/admin">
            <Button variant="ghost" className="pl-0 hover:pl-2 transition-all text-white/60 mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard
            </Button>
        </Link>
        <h1 className="text-3xl font-bold">Platform Settings</h1>
        <p className="text-white/60 mt-2">Manage global application links and configurations.</p>
      </div>

      <SettingsForm initialSettings={settings} />
    </div>
  );
}
