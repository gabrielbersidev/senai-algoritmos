// Componentes reutilizáveis para botões com design Notion
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  className = '',
  type = 'button',
  size = 'md',
}) => {
  const baseClasses = 'rounded-md font-medium transition-all duration-150 flex items-center justify-center gap-2 active:scale-95';

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const variantClasses = {
    primary: 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm hover:shadow-md disabled:bg-slate-400 disabled:cursor-not-allowed',
    secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-200 disabled:bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed',
    danger: 'bg-red-500 text-white hover:bg-red-600 shadow-sm hover:shadow-md disabled:bg-red-300 disabled:cursor-not-allowed',
    outline: 'border border-slate-300 text-slate-900 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
