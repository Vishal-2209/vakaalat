import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Law Connect, Profile & Draft",
  description: "Explore Vakaalat's suite: Law Connect for client management, Law Profile for digital identity, and Law Draft for automated legal documentation.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
