import type { Metadata } from "next";
import { ThankYouPage } from "@/components/landing/thank-you-page";

export const metadata: Metadata = {
  title: "agentic4biz · ¡Gracias! Tu reunión quedó agendada",
  description:
    "Tu reunión de consultoría gratuita con Agentic4Biz quedó agendada. Te contactaremos por WhatsApp para confirmar tu asistencia.",
  alternates: {
    canonical: "/gracias"
  },
  robots: {
    index: false,
    follow: true
  }
};

export default function Page() {
  return <ThankYouPage />;
}
