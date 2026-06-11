// Tela de Estoque com design Notion
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Sidebar, Header, Card, Input, Button } from '@/components';

interface Product {
  id: number;
  name: string;
  lote: string;
  expiryDate: string;
  quantity: number;
  status: 'valid' | 'warning' | 'expired';
}

export default function StockPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: 'Leite Integral 1L',
      lote: 'LT-2024-001',
      expiryDate: '2024-12-25',
      quantity: 50,
      status: 'valid',
    },
    {
      id: 2,
      name: 'Vitamina C 500mg',
      lote: 'VIT-2024-002',
      expiryDate: '2024-12-10',
      quantity: 5,
      status: 'warning',
    },
    {
      id: 3,
      name: 'Suco Natural Laranja',
      lote: 'SJC-2024-045',
      expiryDate: '2024-06-01',
      quantity: 20,
      status: 'expired',
    },
    {
      id: 4,
      name: 'Café Premium 500g',
      lote: 'CAF-2024-003',
      expiryDate: '2025-06-15',
      quantity: 120,
      status: 'valid',
    },
    {
      id: 5,
      name: 'Açúcar Cristal 1kg',
      lote: 'AÇU-2024-004',
      expiryDate: '2024-12-20',
      quantity: 3,
      status: 'warning',
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

  // Filtrar produtos
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.lote.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      filterStatus === 'all' || product.status === filterStatus;

    return matchesSearch && matchesFilter;
  });

  const handleDelete = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'valid':
        return 'bg-green-50 border-l-4 border-l-green-500';
      case 'warning':
        return 'bg-yellow-50 border-l-4 border-l-yellow-500';
      case 'expired':
        return 'bg-red-50 border-l-4 border-l-red-500';
      default:
        return '';
    }
  };

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Conteúdo Principal */}
      <div className="flex-1 flex flex-col overflow-auto">
        {/* Header */}
        <Header title="Gestão de Estoque" subtitle="Visualize e gerencie todos os produtos" />

        {/* Conteúdo */}
        <div className="p-8 space-y-6">
          {/* Filtros e Ações */}
          <Card className="p-5">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-1">
                <Input
                  label="Buscar Produto"
                  placeholder="Nome ou lote..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="w-full md:w-48">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Filtrar Status
                </label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                >
                  <option value="all">Todos</option>
                  <option value="valid">Válidos</option>
                  <option value="warning">Próximo Vencimento</option>
                  <option value="expired">Vencidos</option>
                </select>
              </div>

              <Link href="/stock/add">
                <Button variant="primary">▦ Novo Produto</Button>
              </Link>
            </div>
          </Card>

          {/* Tabela de Produtos */}
          <Card>
            {filteredProducts.length > 0 ? (
              <div className="space-y-2 -m-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className={`p-4 border-l-2 flex items-center justify-between hover:bg-slate-50 transition-colors ${
                      product.status === 'valid'
                        ? 'bg-green-50 border-l-green-500'
                        : product.status === 'warning'
                          ? 'bg-amber-50 border-l-amber-500'
                          : 'bg-red-50 border-l-red-500'
                    }`}
                  >
                    <div className="flex-1">
                      <h4 className="font-medium text-slate-900 text-sm">
                        {product.name}
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2 text-xs text-slate-600">
                        <div>
                          <span className="font-medium">Lote:</span> {product.lote}
                        </div>
                        <div>
                          <span className="font-medium">Validade:</span> {product.expiryDate}
                        </div>
                        <div>
                          <span className="font-medium">Quantidade:</span> {product.quantity} un.
                        </div>
                        <div>
                          <span
                            className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                              product.status === 'valid'
                                ? 'bg-green-200 text-green-800'
                                : product.status === 'warning'
                                  ? 'bg-amber-200 text-amber-800'
                                  : 'bg-red-200 text-red-800'
                            }`}
                          >
                            {product.status === 'valid' ? '◯ Válido' : product.status === 'warning' ? '◇ Atenção' : '◈ Vencido'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 ml-4 flex-shrink-0">
                      <Link href={`/stock/edit/${product.id}`}>
                        <Button variant="secondary" size="sm">
                          Editar
                        </Button>
                      </Link>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(product.id)}
                      >
                        Excluir
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-slate-600 text-sm">Nenhum produto encontrado</p>
              </div>
            )}
          </Card>

          {/* Resumo */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Card className="border-2 border-slate-200 bg-slate-50 p-5">
              <div className="text-center">
                <p className="text-xs font-medium text-slate-600 uppercase tracking-wide">
                  Total de Produtos
                </p>
                <p className="text-3xl font-semibold text-slate-900 mt-2">
                  {products.length}
                </p>
              </div>
            </Card>
            <Card className="border-2 border-amber-200 bg-amber-50 p-5">
              <div className="text-center">
                <p className="text-xs font-medium text-slate-600 uppercase tracking-wide">
                  Próximo Vencimento
                </p>
                <p className="text-3xl font-semibold text-amber-700 mt-2">
                  {products.filter((p) => p.status === 'warning').length}
                </p>
              </div>
            </Card>
            <Card className="border-2 border-red-200 bg-red-50 p-5">
              <div className="text-center">
                <p className="text-xs font-medium text-slate-600 uppercase tracking-wide">
                  Produtos Vencidos
                </p>
                <p className="text-3xl font-semibold text-red-700 mt-2">
                  {products.filter((p) => p.status === 'expired').length}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
