// Componente de Card reutilizável com design Notion
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  variant?: 'default' | 'info' | 'warning' | 'danger' | 'success';
  interactive?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  className = '',
  variant = 'default',
  interactive = false,
}) => {
  const variantClasses = {
    default: 'bg-white border-slate-200',
    info: 'bg-blue-50 border-blue-200',
    warning: 'bg-amber-50 border-amber-200',
    danger: 'bg-red-50 border-red-200',
    success: 'bg-green-50 border-green-200',
  };

  return (
    <div
      className={`rounded-lg border p-6 transition-all duration-150 ${
        interactive ? 'hover:shadow-md cursor-pointer' : 'shadow-sm'
      } ${variantClasses[variant]} ${className}`}
    >
      {title && (
        <h3 className="text-base font-semibold text-slate-900 mb-4">{title}</h3>
      )}
      {children}
    </div>
  );
};
