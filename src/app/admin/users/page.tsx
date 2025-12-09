import { getCurrentUserRole, getSession } from "@/app/actions/auth";
import { getUsers } from "@/lib/user-data";
import { redirect } from "next/navigation";
import { CreateUserForm } from "./create-user-form";
import { deleteUser } from "@/app/actions/auth";
import { Button } from "@/components/Button";
import { Trash2, ShieldCheck, Shield } from "lucide-react";

export default async function UsersPage() {
    const role = await getCurrentUserRole();
    const session = await getSession();

    if (role !== 'SUPER_ADMIN') {
        redirect('/admin');
    }

    const users = await getUsers();

    return (
        <div className="container mx-auto max-w-4xl">
            <h1 className="text-3xl font-bold mb-8">Manage Users</h1>
            
            <CreateUserForm />

            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-white/5 border-b border-white/10">
                        <tr>
                            <th className="p-4 font-semibold text-white/70">Name</th>
                            <th className="p-4 font-semibold text-white/70">Email</th>
                            <th className="p-4 font-semibold text-white/70">Role</th>
                            <th className="p-4 font-semibold text-white/70 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                <td className="p-4 font-medium">{user.name}</td>
                                <td className="p-4 text-white/60 text-sm">{user.email}</td>
                                <td className="p-4">
                                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${user.role === 'SUPER_ADMIN' ? 'bg-accent/10 text-accent' : 'bg-white/10 text-white/60'}`}>
                                        {user.role === 'SUPER_ADMIN' ? <ShieldCheck className="w-3 h-3" /> : <Shield className="w-3 h-3" />}
                                        {user.role}
                                    </span>
                                </td>
                                <td className="p-4 text-right">
                                    {/* Prevent deleting self */}
                                    {user.id !== session?.userId && (
                                        <form action={async () => {
                                            'use server';
                                            await deleteUser(user.id);
                                        }}>
                                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-white/40 hover:text-red-500 hover:bg-red-500/10">
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </form>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
