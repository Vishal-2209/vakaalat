import { isLoggedIn, logout, getCurrentUserRole } from "@/app/actions/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/Button";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuth = await isLoggedIn();
  const role = await getCurrentUserRole();

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Simple Admin Header */}
      {isAuth && (
        <header className="border-b border-white/10 p-4 flex justify-between items-center bg-neutral-900">
          <div className="flex items-center gap-6">
            <Link href="/admin" className="text-xl font-bold">Vakaalat Admin</Link>
            <nav className="flex gap-4 text-sm">
                <Link href="/admin" className="text-white/70 hover:text-white">Blogs</Link>
                <Link href="/admin/careers" className="text-white/70 hover:text-white">Careers</Link>
                <Link href="/admin/settings" className="text-white/70 hover:text-white">Settings</Link>
                {role === 'SUPER_ADMIN' && (
                    <Link href="/admin/users" className="text-white/70 hover:text-white">Users</Link>
                )}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" target="_blank" className="text-sm hover:text-accent">View Site</Link>
            <form action={logout}>
                <Button variant="ghost" size="sm" type="submit">Logout</Button>
            </form>
          </div>
        </header>
      )}
      <main className="p-6">
        {children}
      </main>
    </div>
  );
}
