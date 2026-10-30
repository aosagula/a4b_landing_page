import type { Metadata } from "next";
import { FcImpPage } from "@/components/landing/fc-imp-page";

export const metadata: Metadata = {
  title: "agentic4biz · Agendá tu llamada · Software de gestión a medida",
  description:
    "Mirá el software de gestión que construimos para una empresa de limpieza y agendá tu llamada: tu sistema a medida en menos de 30 días o no pagás.",
  alternates: {
    canonical: "/fc_imp"
  }
};

export default function Page() {
  return <FcImpPage />;
}
