import type { Metadata } from "next";
import { FirstContactPage } from "@/components/landing/first-contact-page";

export const metadata: Metadata = {
  title: "agentic4biz · Agendá tu llamada",
  description: "Descubrí en 30 segundos qué hacemos y agendá tu llamada con agentic4biz.",
  alternates: {
    canonical: "/first_contact"
  }
};

export default function Page() {
  return <FirstContactPage />;
}
