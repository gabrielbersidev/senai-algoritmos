// Componente Sidebar com design Notion - navegação elegante e limpa
'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

interface SidebarLink {
  href: string;
  label: string;
  icon: string;
}

const navLinks: SidebarLink[] = [
  { href: '/dashboard', label: 'Visão Geral', icon: '▦' },
  { href: '/stock', label: 'Estoque', icon: '○' },
  { href: '/alerts', label: 'Alertas', icon: '◇' },
  { href: '/reports', label: 'Relatórios', icon: '◈' },
  { href: '/settings', label: 'Configurações', icon: '⚙' },
];

export const Sidebar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    router.push('/login');
  };

  return (
    <aside
      className={`${
        isOpen ? 'w-64' : 'w-20'
      } bg-white border-r border-slate-200 transition-all duration-300 min-h-screen flex flex-col shadow-sm`}
    >
      {/* Header da Sidebar */}
      <div className="p-4 border-b border-slate-200">
        <div className="flex items-center justify-between gap-2">
          {isOpen && (
            <h1 className="text-lg font-semibold text-slate-900 truncate">
              ValidAI
            </h1>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 hover:bg-slate-100 rounded-md transition-colors ml-auto"
            title={isOpen ? 'Fechar' : 'Abrir'}
          >
            {isOpen ? '←' : '→'}
          </button>
        </div>
      </div>

      {/* Links de navegação */}
      <nav className="flex-1 py-4 px-2 space-y-1">
        {navLinks.map((link) => {
          const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-150 text-sm font-medium ${
                isActive
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <span className="text-base flex-shrink-0">{link.icon}</span>
              {isOpen && <span className="truncate">{link.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Botão de logout */}
      <div className="p-2 border-t border-slate-200">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md bg-red-50 hover:bg-red-100 text-red-700 transition-colors text-sm font-medium"
        >
          <span className="text-base flex-shrink-0">↤</span>
          {isOpen && <span className="truncate">Sair</span>}
        </button>
      </div>
    </aside>
  );
};
