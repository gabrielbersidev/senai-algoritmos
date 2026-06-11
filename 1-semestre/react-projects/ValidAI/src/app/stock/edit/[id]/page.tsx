// Tela de Editar Produto (reutiliza a mesma estrutura de adicionar)
'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { Sidebar, Header, Card, Input, Button } from '@/components';

interface Batch {
  id: string;
  batchNumber: string;
  manufacturingDate: string;
  expiryDate: string;
  quantity: string;
}

export default function EditProductPage() {
  const router = useRouter();
  const params = useParams();
  const productId = params.id as string;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [batches, setBatches] = useState<Batch[]>([
    {
      id: '1',
      batchNumber: 'LT-2024-001',
      manufacturingDate: '2024-01-15',
      expiryDate: '2024-12-25',
      quantity: '50',
    },
  ]);
  const [currentBatch, setCurrentBatch] = useState<Batch>({
    id: '',
    batchNumber: '',
    manufacturingDate: '',
    expiryDate: '',
    quantity: '',
  });
  const [formData, setFormData] = useState({
    productName: 'Leite Integral 1L',
    description: 'Leite integral de alta qualidade',
    barcode: '7891234567890',
    costPrice: '2.50',
    salePrice: '4.50',
    category: 'Alimentos',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

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

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleBatchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCurrentBatch((prev) => ({ ...prev, [name]: value }));
  };

  const addBatch = () => {
    const newErrors: Record<string, string> = {};

    if (!currentBatch.batchNumber) newErrors.batchNumber = 'Número do lote é obrigatório';
    if (!currentBatch.manufacturingDate) newErrors.manufacturingDate = 'Data de fabricação é obrigatória';
    if (!currentBatch.expiryDate) newErrors.expiryDate = 'Data de validade é obrigatória';
    if (!currentBatch.quantity) newErrors.quantity = 'Quantidade é obrigatória';

    if (Object.keys(newErrors).length === 0) {
      setBatches([
        ...batches,
        {
          ...currentBatch,
          id: Date.now().toString(),
        },
      ]);
      setCurrentBatch({
        id: '',
        batchNumber: '',
        manufacturingDate: '',
        expiryDate: '',
        quantity: '',
      });
    } else {
      setErrors(newErrors);
    }
  };

  const removeBatch = (id: string) => {
    setBatches(batches.filter((b) => b.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};

    if (!formData.productName) newErrors.productName = 'Nome do produto é obrigatório';
    if (!formData.category) newErrors.category = 'Categoria é obrigatória';
    if (batches.length === 0) newErrors.batches = 'Adicione pelo menos um lote';

    if (Object.keys(newErrors).length === 0) {
      alert('Produto atualizado com sucesso!');
      router.push('/stock');
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Conteúdo Principal */}
      <div className="flex-1 flex flex-col overflow-auto">
        {/* Header */}
        <Header
          title="Editar Produto"
          subtitle={`Atualize os detalhes do produto #${productId}`}
        />

        {/* Conteúdo */}
        <div className="p-8 max-w-4xl space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Informações do Produto */}
            <Card className="p-6">
              <h3 className="text-base font-semibold text-slate-900 mb-5">Informações do Produto</h3>
              <div className="space-y-4">
                <Input
                  label="Nome do Produto"
                  placeholder="Ex: Leite Integral 1L"
                  name="productName"
                  value={formData.productName}
                  onChange={handleFormChange}
                  error={errors.productName}
                  required
                />

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Descrição
                  </label>
                  <textarea
                    name="description"
                    placeholder="Descrição detalhada do produto..."
                    value={formData.description}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent h-24 resize-none text-sm"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Código de Barras"
                    placeholder="Ex: 7891234567890"
                    name="barcode"
                    value={formData.barcode}
                    onChange={handleFormChange}
                  />

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Categoria
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent text-sm"
                    >
                      <option value="Alimentos">Alimentos</option>
                      <option value="Medicamentos">Medicamentos</option>
                      <option value="Bebidas">Bebidas</option>
                      <option value="Cosméticos">Cosméticos</option>
                      <option value="Outros">Outros</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Preço de Custo"
                    placeholder="Ex: 2.50"
                    type="number"
                    name="costPrice"
                    value={formData.costPrice}
                    onChange={handleFormChange}
                  />

                  <Input
                    label="Preço de Venda"
                    placeholder="Ex: 4.50"
                    type="number"
                    name="salePrice"
                    value={formData.salePrice}
                    onChange={handleFormChange}
                  />
                </div>
              </div>
            </Card>

            {/* Gerenciar Lotes */}
            <Card className="p-6">
              <h3 className="text-base font-semibold text-slate-900 mb-5">Gerenciar Lotes</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Número do Lote"
                    placeholder="Ex: LT-2024-001"
                    name="batchNumber"
                    value={currentBatch.batchNumber}
                    onChange={handleBatchChange}
                  />

                  <Input
                    label="Data de Fabricação"
                    type="date"
                    name="manufacturingDate"
                    value={currentBatch.manufacturingDate}
                    onChange={handleBatchChange}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Data de Validade"
                    type="date"
                    name="expiryDate"
                    value={currentBatch.expiryDate}
                    onChange={handleBatchChange}
                  />

                  <Input
                    label="Quantidade"
                    type="number"
                    placeholder="Ex: 100"
                    name="quantity"
                    value={currentBatch.quantity}
                    onChange={handleBatchChange}
                  />
                </div>

                <Button type="button" variant="secondary" onClick={addBatch} className="w-full">
                  ◇ Adicionar Novo Lote
                </Button>
              </div>

              {/* Lista de Lotes */}
              {batches.length > 0 && (
                <div className="mt-6 space-y-2">
                  <h4 className="font-medium text-slate-900 text-sm mb-3 uppercase tracking-wide">
                    Lotes do Produto
                  </h4>
                  {batches.map((batch) => (
                    <div
                      key={batch.id}
                      className="bg-slate-50 border border-slate-200 rounded-md p-4 flex justify-between items-center hover:bg-slate-100 transition-colors"
                    >
                      <div>
                        <p className="font-medium text-slate-900 text-sm">
                          {batch.batchNumber}
                        </p>
                        <p className="text-xs text-slate-600 mt-1">
                          Fab: <span className="font-medium">{batch.manufacturingDate}</span> | Val: <span className="font-medium">{batch.expiryDate}</span> | Qtd: <span className="font-medium">{batch.quantity} un.</span>
                        </p>
                      </div>
                      <Button
                        type="button"
                        variant="danger"
                        size="sm"
                        onClick={() => removeBatch(batch.id)}
                      >
                        ◈ Remover
                      </Button>
                    </div>
                  ))}
                  {errors.batches && (
                    <p className="text-xs text-red-600 mt-2">{errors.batches}</p>
                  )}
                </div>
              )}
            </Card>

            {/* Botões de Ação */}
            <div className="flex gap-3">
              <Button type="submit" variant="primary">
                ◆ Atualizar Produto
              </Button>
              <Link href="/stock" className="flex-1">
                <Button type="button" variant="secondary" className="w-full">
                  ◌ Cancelar
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
