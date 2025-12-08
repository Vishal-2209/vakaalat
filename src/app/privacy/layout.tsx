import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Data Protection",
  description: "Read our Privacy Policy to understand how Vakaalat collects, uses, and protects your personal and client data.",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
