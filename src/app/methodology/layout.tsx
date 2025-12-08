import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Methodology | Lawyer-Centric Design",
  description: "Our methodology centers on Lawyer-Centric Design, Practical Efficiency, and Data Sovereignty. Built specifically for the Indian legal ecosystem.",
};

export default function MethodologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
