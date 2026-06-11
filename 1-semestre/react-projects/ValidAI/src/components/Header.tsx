// Componente Header com design Notion - limpo e minimalista
'use client';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-white border-b border-slate-200 px-8 py-6">
      <h1 className="text-2xl font-semibold text-slate-900 mb-1">{title}</h1>
      {subtitle && (
        <p className="text-sm text-slate-600">{subtitle}</p>
      )}
    </div>
  );
};
