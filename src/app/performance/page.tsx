import type { Metadata } from "next";
import { PerformancePage } from "@/components/landing/performance-page";

export const metadata: Metadata = {
  title: "agentic4biz · Performance",
  description: "Calculadora de ahorro potencial para procesos repetitivos automatizables.",
  alternates: {
    canonical: "/performance"
  }
};

export default function Page() {
  return <PerformancePage />;
}
