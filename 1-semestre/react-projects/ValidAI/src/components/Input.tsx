// Componente de Input reutilizável com design Notion
import React from 'react';

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  className?: string;
  disabled?: boolean;
  name?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
  required = false,
  className = '',
  disabled = false,
  name,
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-slate-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        name={name}
        className={`w-full px-4 py-2.5 bg-white border rounded-md text-slate-900 placeholder-slate-400 transition-all duration-150 ${
          error
            ? 'border-red-400 focus:ring-red-500 focus:ring-2 focus:border-transparent'
            : 'border-slate-200 focus:ring-slate-900 focus:ring-2 focus:border-transparent'
        } ${disabled ? 'bg-slate-50 text-slate-500 cursor-not-allowed' : 'focus:outline-none'} ${className}`}
      />
      {error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
    </div>
  );
};
