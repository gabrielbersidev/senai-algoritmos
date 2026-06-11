// Tela de Login com design Notion
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Input, Button, Card } from '@/components';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação básica
    let hasError = false;
    if (!email) {
      setEmailError('Email é obrigatório');
      hasError = true;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Senha é obrigatória');
      hasError = true;
    } else {
      setPasswordError('');
    }

    if (!hasError) {
      setIsLoading(true);
      // Simulando requisição
      setTimeout(() => {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userEmail', email);
        router.push('/dashboard');
      }, 500);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 px-4">
      <div className="w-full max-w-md">
        {/* Logo/Title */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-slate-900 mb-1">
            ValidAI
          </h1>
          <p className="text-sm text-slate-600">
            Sistema de Controle de Estoque
          </p>
        </div>

        {/* Login Card */}
        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              label="Email"
              placeholder="seu@email.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
              required
            />

            <div>
              <Input
                label="Senha"
                placeholder="••••••••"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={passwordError}
                required
              />
              <div className="mt-2 text-right">
                <Link
                  href="#"
                  className="text-xs text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Esqueceu a senha?
                </Link>
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Entrando...' : 'Entrar'}
            </Button>
          </form>

          {/* Divider */}
          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-xs text-slate-600 text-center mb-3">
              Novo por aqui?
            </p>
            <Link href="/register">
              <Button type="button" variant="outline" className="w-full">
                Criar conta
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
