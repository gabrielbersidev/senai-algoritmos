// Página de Relatórios (Placeholder)
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sidebar, Header, Card } from '@/components';

export default function ReportsPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authenticated = localStorage.getItem('isAuthenticated');
    if (!authenticated) {
      router.push('/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-auto">
        <Header title="Relatórios" subtitle="Visualize relatórios detalhados sobre seu estoque" />
        <div className="p-8 space-y-6">
          <Card className="p-6">
            <h3 className="text-base font-semibold text-slate-900 mb-5">Relatórios Disponíveis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 border border-slate-200 rounded-md hover:bg-slate-50 transition-colors cursor-pointer">
                <h4 className="font-semibold text-sm text-slate-900 mb-2">◆ Relatório de Vendas</h4>
                <p className="text-sm text-slate-600">Análise detalhada das vendas por período</p>
              </div>
              <div className="p-5 border border-slate-200 rounded-md hover:bg-slate-50 transition-colors cursor-pointer">
                <h4 className="font-semibold text-sm text-slate-900 mb-2">◇ Relatório de Estoque</h4>
                <p className="text-sm text-slate-600">Informações sobre níveis de estoque e rotatividade</p>
              </div>
              <div className="p-5 border border-slate-200 rounded-md hover:bg-slate-50 transition-colors cursor-pointer">
                <h4 className="font-semibold text-sm text-slate-900 mb-2">⏰ Relatório de Vencimento</h4>
                <p className="text-sm text-slate-600">Produtos próximos ao vencimento e vencidos</p>
              </div>
              <div className="p-5 border border-slate-200 rounded-md hover:bg-slate-50 transition-colors cursor-pointer">
                <h4 className="font-semibold text-sm text-slate-900 mb-2">◈ Relatório Financeiro</h4>
                <p className="text-sm text-slate-600">Análise de custos e lucratividade</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
