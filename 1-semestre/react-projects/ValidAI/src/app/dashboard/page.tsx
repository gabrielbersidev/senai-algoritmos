// Tela de Dashboard com design Notion - interface limpa e minimalista
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Sidebar, Header, Card, Button } from '@/components';

export default function DashboardPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authenticated = localStorage.getItem('isAuthenticated');
    if (!authenticated) {
      router.push('/login');
    } else {
      setIsAuthenticated(true);
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Carregando...</div>;
  }

  if (!isAuthenticated) {
    return null;
  }

  // Dados simulados
  const dashboardStats = [
    { label: 'Total de Produtos', value: 256, icon: '◯', color: 'border-blue-200 bg-blue-50' },
    {
      label: 'Próximos ao Vencimento',
      value: 12,
      icon: '◇',
      color: 'border-amber-200 bg-amber-50',
    },
    { label: 'Produtos Vencidos', value: 3, icon: '◈', color: 'border-red-200 bg-red-50' },
    { label: 'Estoque Baixo', value: 18, icon: '◆', color: 'border-slate-200 bg-slate-100' },
  ];

  const criticalAlerts = [
    { product: 'Leite Integral 1L', batch: 'LT-2024-001', days: 2, type: 'expiration', severity: 'high' },
    { product: 'Vitamina C 500mg', batch: 'VIT-2024-002', quantity: 5, type: 'stock', severity: 'medium' },
  ];

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Conteúdo Principal */}
      <div className="flex-1 flex flex-col overflow-auto">
        {/* Header */}
        <Header title="Visão Geral" subtitle="Bem-vindo de volta ao painel de controle" />

        {/* Conteúdo */}
        <div className="p-8 space-y-8">
          {/* Alerta Crítico - Banner Elegante */}
          {criticalAlerts.length > 0 && (
            <Card variant="warning" className="bg-amber-50 border-amber-200 p-4">
              <div className="flex items-start gap-4">
                <div className="text-2xl flex-shrink-0">⚠</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-amber-900 mb-1">Ação Requerida</h3>
                  <p className="text-sm text-amber-800">
                    Você tem <strong>{criticalAlerts.length}</strong> produto(s) que requerem atenção imediata.
                    <Link href="/alerts" className="ml-2 underline font-medium hover:text-amber-700">
                      Ver alertas
                    </Link>
                  </p>
                </div>
              </div>
            </Card>
          )}

          {/* Cards de Resumo */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {dashboardStats.map((stat, index) => (
              <Card key={index} className={`border-2 ${stat.color} p-5`} interactive>
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-medium text-slate-600 uppercase tracking-wide">
                        {stat.label}
                      </p>
                      <p className="text-3xl font-semibold text-slate-900 mt-1">{stat.value}</p>
                    </div>
                    <div className="text-3xl text-slate-400">{stat.icon}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Gráficos e Relatórios */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Distribuição por Categoria */}
            <Card title="Distribuição por Categoria" className="lg:col-span-1">
              <div className="space-y-4">
                {[
                  { name: 'Alimentos', percentage: 45 },
                  { name: 'Medicamentos', percentage: 30 },
                  { name: 'Bebidas', percentage: 15 },
                  { name: 'Outros', percentage: 10 },
                ].map((item, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="font-medium text-slate-700">{item.name}</span>
                      <span className="text-slate-600">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-1.5">
                      <div
                        className="bg-slate-800 h-1.5 rounded-full transition-all duration-500"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Status de Validade */}
            <Card title="Status de Validade">
              <div className="space-y-4">
                {[
                  { status: 'Válidos', count: 200, percentage: 78, color: 'bg-green-600' },
                  { status: 'Próximos', count: 35, percentage: 14, color: 'bg-amber-600' },
                  { status: 'Vencidos', count: 21, percentage: 8, color: 'bg-red-600' },
                ].map((item, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="font-medium text-slate-700">
                        {item.status} ({item.count})
                      </span>
                      <span className="text-slate-600">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-1.5">
                      <div
                        className={`${item.color} h-1.5 rounded-full transition-all duration-500`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Produtos Críticos */}
          <Card title="Produtos com Atenção Necessária">
            <div className="space-y-2">
              {[
                {
                  name: 'Leite Integral 1L',
                  batch: 'LT-2024-001',
                  days: 2,
                  type: 'expiration',
                },
                {
                  name: 'Vitamina C 500mg',
                  batch: 'VIT-2024-002',
                  quantity: 5,
                  type: 'stock',
                },
                {
                  name: 'Suco Natural Laranja',
                  batch: 'SJC-2024-045',
                  days: -1,
                  type: 'expired',
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-md flex justify-between items-start text-sm ${
                    product.type === 'expiration'
                      ? 'bg-amber-50 border border-amber-200'
                      : product.type === 'stock'
                        ? 'bg-slate-100 border border-slate-300'
                        : 'bg-red-50 border border-red-200'
                  }`}
                >
                  <div>
                    <p className="font-medium text-slate-900">{product.name}</p>
                    <p className="text-xs text-slate-600 mt-1">Lote: {product.batch}</p>
                  </div>
                  <div className="text-right text-xs font-medium">
                    {product.type === 'expiration' && (
                      <p className="text-amber-700">Vence em {product.days} dias</p>
                    )}
                    {product.type === 'stock' && (
                      <p className="text-slate-700">Apenas {product.quantity} un.</p>
                    )}
                    {product.type === 'expired' && (
                      <p className="text-red-700">Vencido há {Math.abs(product.days)} dia</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Ações Rápidas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/stock/add" className="block">
              <Button variant="primary" className="w-full">
                ▦ Adicionar Produto
              </Button>
            </Link>
            <Link href="/stock" className="block">
              <Button variant="secondary" className="w-full">
                ◯ Ver Estoque
              </Button>
            </Link>
            <Link href="/alerts" className="block">
              <Button variant="secondary" className="w-full">
                ◇ Ver Alertas
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
