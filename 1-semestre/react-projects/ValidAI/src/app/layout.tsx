import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ValidAI - Controle de Estoque",
  description: "Sistema de gestão de estoque com foco em validade de produtos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-light">
        {children}
      </body>
    </html>
  );
}
