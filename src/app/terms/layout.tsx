import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | User Agreement",
  description: "Review the Terms of Service for using Vakaalat's legal technology suite and website.",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
