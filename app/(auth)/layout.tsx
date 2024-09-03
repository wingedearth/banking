import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        {children}
    </main>
  );
}
