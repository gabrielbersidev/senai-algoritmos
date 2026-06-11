// Tela de Registro com design Notion
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Input, Button, Card } from '@/components';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpar erro ao digitar
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação
    let newErrors = { fullName: '', email: '', password: '', confirmPassword: '' };
    let hasError = false;

    if (!formData.fullName) {
      newErrors.fullName = 'Nome completo é obrigatório';
      hasError = true;
    }

    if (!formData.email) {
      newErrors.email = 'Email é obrigatório';
      hasError = true;
    }

    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória';
      hasError = true;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Senha deve ter pelo menos 6 caracteres';
      hasError = true;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'As senhas não conferem';
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      setIsLoading(true);
      // Simulando requisição
      setTimeout(() => {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userEmail', formData.email);
        router.push('/dashboard');
      }, 500);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 px-4 py-8">
      <div className="w-full max-w-md">
        {/* Logo/Title */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-slate-900 mb-1">
            Criar Conta
          </h1>
          <p className="text-sm text-slate-600">
            Junte-se ao ValidAI
          </p>
        </div>

        {/* Register Card */}
        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              label="Nome Completo"
              placeholder="Seu nome"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              error={errors.fullName}
              required
            />

            <Input
              label="Email"
              placeholder="seu@email.com"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
            />

            <Input
              label="Senha"
              placeholder="••••••••"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              required
            />

            <Input
              label="Confirmar Senha"
              placeholder="••••••••"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              required
            />

            <Button
              type="submit"
              variant="primary"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Registrando...' : 'Criar Conta'}
            </Button>
          </form>

          {/* Divider */}
          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-xs text-slate-600 text-center mb-3">
              Já tem uma conta?
            </p>
            <Link href="/login">
              <Button type="button" variant="outline" className="w-full">
                Fazer login
              </Button>
            </Link>
          </div>
        </Card>

        {/* Footer */}
        <p className="text-xs text-slate-500 text-center mt-6">
          © 2026 ValidAI. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}
