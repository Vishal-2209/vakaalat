import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Transforming Indian Law",
  description: "Meet the team behind Vakaalat. Our mission is to build the digital backbone for the Indian legal system, making justice more accessible and efficient.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
