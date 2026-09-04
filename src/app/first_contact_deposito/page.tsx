import type { Metadata } from "next";
import { FirstContactDepositoPage } from "@/components/landing/first-contact-deposito-page";

export const metadata: Metadata = {
  title: "agentic4biz · Agendá tu llamada · Depósitos y Distribuidoras",
  description:
    "Descubrí en 30 segundos cómo integramos tu depósito o distribuidora con tus clientes y proveedores, y agendá tu llamada con agentic4biz.",
  alternates: {
    canonical: "/first_contact_deposito"
  }
};

export default function Page() {
  return <FirstContactDepositoPage />;
}
