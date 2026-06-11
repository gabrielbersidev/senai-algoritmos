// Tela de Alertas com design Notion
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sidebar, Header, Card, Button } from '@/components';

interface Alert {
  id: number;
  message: string;
  type: 'expiration' | 'low_stock';
  product: string;
  batch: string;
  urgency: 'high' | 'medium' | 'low';
  read: boolean;
}

export default function AlertsPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [filterType, setFilterType] = useState('all');
  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: 1,
      message: 'Leite Integral 1L (Lote LT-2024-001) vence em 2 dias.',
      type: 'expiration',
      product: 'Leite Integral 1L',
      batch: 'LT-2024-001',
      urgency: 'high',
      read: false,
    },
    {
      id: 2,
      message: 'Vitamina C 500mg (Lote VIT-2024-002) está com estoque baixo (5 unidades).',
      type: 'low_stock',
      product: 'Vitamina C 500mg',
      batch: 'VIT-2024-002',
      urgency: 'medium',
      read: false,
    },
    {
      id: 3,
      message: 'Suco Natural Laranja (Lote SJC-2024-045) venceu há 1 dia.',
      type: 'expiration',
      product: 'Suco Natural Laranja',
      batch: 'SJC-2024-045',
      urgency: 'high',
      read: true,
    },
    {
      id: 4,
      message: 'Açúcar Cristal 1kg (Lote AÇU-2024-004) está com estoque baixo (3 unidades).',
      type: 'low_stock',
      product: 'Açúcar Cristal 1kg',
      batch: 'AÇU-2024-004',
      urgency: 'low',
      read: true,
    },
    {
      id: 5,
      message: 'Café Premium 500g (Lote CAF-2024-003) vence em 15 dias.',
      type: 'expiration',
      product: 'Café Premium 500g',
      batch: 'CAF-2024-003',
      urgency: 'low',
      read: false,
    },
  ]);

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

  // Filtrar alertas
  const filteredAlerts = alerts.filter((alert) => {
    if (filterType === 'all') return true;
    if (filterType === 'unread') return !alert.read;
    if (filterType === 'expiration') return alert.type === 'expiration';
    if (filterType === 'low_stock') return alert.type === 'low_stock';
    return true;
  });

  const handleMarkAsRead = (id: number) => {
    setAlerts(
      alerts.map((alert) =>
        alert.id === id ? { ...alert, read: true } : alert
      )
    );
  };

  const handleDismiss = (id: number) => {
    setAlerts(alerts.filter((alert) => alert.id !== id));
  };

  const getAlertColor = (type: string, urgency: string) => {
    if (type === 'expiration') {
      return urgency === 'high'
        ? 'bg-red-50 border-l-4 border-l-red-500'
        : 'bg-yellow-50 border-l-4 border-l-yellow-500';
    } else if (type === 'low_stock') {
      return urgency === 'high'
        ? 'bg-orange-50 border-l-4 border-l-orange-500'
        : 'bg-blue-50 border-l-4 border-l-blue-500';
    }
    return 'bg-gray-50 border-l-4 border-l-gray-500';
  };

  const getIcon = (type: string) => {
    return type === 'expiration' ? '⏰' : '📉';
  };

  const getUrgencyBadge = (urgency: string) => {
    const colors = {
      high: 'bg-red-200 text-red-800',
      medium: 'bg-yellow-200 text-yellow-800',
      low: 'bg-blue-200 text-blue-800',
    };
    const labels = {
      high: 'Crítico',
      medium: 'Aviso',
      low: 'Info',
    };
    return { color: colors[urgency as keyof typeof colors], label: labels[urgency as keyof typeof labels] };
  };

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Conteúdo Principal */}
      <div className="flex-1 flex flex-col overflow-auto">
        {/* Header */}
        <Header
          title="Alertas e Notificações"
          subtitle={`Você tem ${alerts.filter((a) => !a.read).length} alerta(s) não lido(s)`}
        />

        {/* Conteúdo */}
        <div className="p-8 space-y-6">
          {/* Filtros */}
          <Card className="p-5">
            <div className="flex flex-col md:flex-row gap-4 items-center md:items-end">
              <label className="text-sm font-medium text-slate-700">Filtrar por:</label>
              <div className="flex flex-wrap gap-2">
                {[
                  { value: 'all', label: 'Todos' },
                  { value: 'unread', label: 'Não Lidos' },
                  { value: 'expiration', label: 'Vencimento' },
                  { value: 'low_stock', label: 'Estoque Baixo' },
                ].map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setFilterType(filter.value)}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                      filterType === filter.value
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </Card>

          {/* Lista de Alertas */}
          <div className="space-y-3">
            {filteredAlerts.length > 0 ? (
              filteredAlerts.map((alert) => {
                const urgency = getUrgencyBadge(alert.urgency);
                return (
                  <Card
                    key={alert.id}
                    className={`p-4 border-l-4 ${getAlertColor(
                      alert.type,
                      alert.urgency
                    )}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex gap-4 flex-1">
                        <div className="text-xl flex-shrink-0 mt-0.5">
                          {getIcon(alert.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <h4 className="font-semibold text-slate-900">
                              {alert.product}
                            </h4>
                            <span
                              className={`px-2 py-0.5 rounded text-xs font-medium ${urgency.color}`}
                            >
                              {urgency.label}
                            </span>
                            {!alert.read && (
                              <span className="px-2 py-0.5 rounded text-xs font-medium bg-blue-200 text-blue-800">
                                Novo
                              </span>
                            )}
                          </div>
                          <p className="text-slate-700 text-sm mb-2">
                            {alert.message}
                          </p>
                          <p className="text-xs text-slate-600">
                            Lote: <span className="font-medium">{alert.batch}</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 flex-shrink-0">
                        {!alert.read && (
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => handleMarkAsRead(alert.id)}
                          >
                            ◯ Lido
                          </Button>
                        )}
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleDismiss(alert.id)}
                        >
                          ◈ Ignorar
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })
            ) : (
              <Card className="text-center py-12">
                <p className="text-3xl mb-2">✓</p>
                <p className="text-slate-600 text-base font-medium">
                  Nenhum alerta no momento!
                </p>
                <p className="text-slate-500 text-sm mt-1">
                  Todos os seus produtos estão em bom estado.
                </p>
              </Card>
            )}
          </div>

          {/* Resumo de Alertas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Card className="border-2 border-slate-200 bg-slate-50 p-5">
              <div className="text-center">
                <p className="text-xs font-medium text-slate-600 uppercase tracking-wide">
                  Total de Alertas
                </p>
                <p className="text-3xl font-semibold text-slate-900 mt-2">
                  {alerts.length}
                </p>
              </div>
            </Card>
            <Card className="border-2 border-red-200 bg-red-50 p-5">
              <div className="text-center">
                <p className="text-xs font-medium text-slate-600 uppercase tracking-wide">
                  Críticos
                </p>
                <p className="text-3xl font-semibold text-red-700 mt-2">
                  {alerts.filter((a) => a.urgency === 'high').length}
                </p>
              </div>
            </Card>
            <Card className="border-2 border-blue-200 bg-blue-50 p-5">
              <div className="text-center">
                <p className="text-xs font-medium text-slate-600 uppercase tracking-wide">
                  Não Lidos
                </p>
                <p className="text-3xl font-semibold text-blue-700 mt-2">
                  {alerts.filter((a) => !a.read).length}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
