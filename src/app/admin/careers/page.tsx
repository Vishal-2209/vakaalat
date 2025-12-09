import { isLoggedIn } from "@/app/actions/auth";
import { getCareers } from "@/lib/career-data";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Plus, Edit, Trash2 } from "lucide-react";
import { deleteCareer } from "@/app/actions/career-actions";

export default async function CareersDashboard() {
  const authorized = await isLoggedIn();
  if (!authorized) {
    redirect('/admin/login');
  }

  const careers = await getCareers();

  return (
    <div className="container mx-auto max-w-5xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Openings</h1>
        <Link href="/admin/careers/editor">
            <Button variant="accent">
                <Plus className="w-4 h-4 mr-2" /> New Opening
            </Button>
        </Link>
      </div>

      <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="border-b border-white/10 bg-white/5">
                    <th className="p-4 font-semibold text-white/70">Title</th>
                    <th className="p-4 font-semibold text-white/70">Location</th>
                    <th className="p-4 font-semibold text-white/70">Type</th>
                    <th className="p-4 font-semibold text-white/70 text-right">Actions</th>
                </tr>
            </thead>
            <tbody>
                {careers.map((career) => (
                    <tr key={career.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="p-4 font-medium">{career.title}</td>
                        <td className="p-4 text-white/60">{career.location}</td>
                        <td className="p-4 text-white/60">{career.type}</td>
                        <td className="p-4 flex items-center justify-end gap-2">
                             <Link href={`/admin/careers/editor?id=${career.id}`}>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <Edit className="w-4 h-4" />
                                </Button>
                            </Link>
                            <form action={async () => {
                                'use server';
                                await deleteCareer(career.id);
                            }}>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:text-red-500 hover:bg-red-500/10">
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </form>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        
        {careers.length === 0 && (
            <div className="p-12 text-center text-white/40">
                No active openings. Create one to get started.
            </div>
        )}
      </div>
    </div>
  );
}
