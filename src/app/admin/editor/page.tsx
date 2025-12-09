import { EditorForm } from "./editor-form";
import { isLoggedIn } from "@/app/actions/auth";
import { getBlogs } from "@/lib/blog-data";
import { redirect } from "next/navigation";

export default async function EditorPage({
    searchParams,
}: {
    searchParams: Promise<{ id?: string }>;
}) {
  const authorized = await isLoggedIn();
  if (!authorized) {
    redirect('/admin/login');
  }

  const { id } = await searchParams;
  const blogs = await getBlogs();
  const blog = id ? blogs.find(b => b.id === id) : undefined;
  const isEditing = !!blog;

  return (
    <div className="container mx-auto max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">{isEditing ? 'Edit Post' : 'New Post'}</h1>
      <EditorForm blog={blog} isEditing={isEditing} />
    </div>
  );
}
