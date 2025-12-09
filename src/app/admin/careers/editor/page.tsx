import { isLoggedIn } from "@/app/actions/auth";
import { getCareers } from "@/lib/career-data";
import { redirect } from "next/navigation";
import { CareerEditorForm } from "./editor-form";

export default async function CareerEditorPage({
    searchParams,
}: {
    searchParams: Promise<{ id?: string }>;
}) {
  const authorized = await isLoggedIn();
  if (!authorized) {
    redirect('/admin/login');
  }

  const { id } = await searchParams;
  const careers = await getCareers();
  const career = id ? careers.find(c => c.id === id) : undefined;
  const isEditing = !!career;

  return (
    <div className="container mx-auto max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">{isEditing ? 'Edit Opening' : 'New Opening'}</h1>
      <CareerEditorForm career={career} isEditing={isEditing} />
    </div>
  );
}
