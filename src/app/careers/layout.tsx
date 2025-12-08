import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Join the Vakaalat Team",
  description: "Shape the future of law in India. Vakaalat is hiring engineers, product managers, and legal experts to revolutionize legal tech.",
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
