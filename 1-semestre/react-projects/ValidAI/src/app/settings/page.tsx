// Página de Configurações (Placeholder)
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sidebar, Header, Card, Button } from '@/components';

export default function SettingsPage() {
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
        <Header title="Configurações" subtitle="Gerencie as preferências da aplicação" />
        <div className="p-8 max-w-2xl space-y-6">
          <Card className="p-6">
            <h3 className="text-base font-semibold text-slate-900 mb-5">Perfil do Usuário</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input
                  type="email"
                  value={localStorage.getItem('userEmail') || ''}
                  disabled
                  className="w-full px-4 py-2 border border-slate-200 rounded-md bg-slate-100 text-slate-600 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Nome</label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full px-4 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-sm"
                />
              </div>
              <Button variant="primary" className="w-full">
                ◆ Salvar Alterações
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-base font-semibold text-slate-900 mb-5">Preferências</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-md">
                <label className="text-sm font-medium text-slate-700">Notificações por Email</label>
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-slate-900" />
              </div>
              <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-md">
                <label className="text-sm font-medium text-slate-700">Tema Escuro</label>
                <input type="checkbox" className="w-4 h-4 accent-slate-900" />
              </div>
              <div className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-md">
                <label className="text-sm font-medium text-slate-700">Alertas de Vencimento</label>
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-slate-900" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-base font-semibold text-slate-900 mb-5">Segurança</h3>
            <div className="space-y-3">
              <Button variant="secondary" className="w-full">
                ⚙ Alterar Senha
              </Button>
              <Button variant="danger" className="w-full">
                ↤ Sair de Todas as Sessões
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
