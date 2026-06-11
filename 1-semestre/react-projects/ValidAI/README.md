# ValidAI - Sistema de Controle de Estoque

Um protótipo visual (frontend-only) de aplicativo de controle de estoque com foco em gestão de produtos com data de validade. Construído com React.js, Next.js e Tailwind CSS.

## 🎯 Recursos

✅ **Tela de Login** - Autenticação visual com validação de campos
✅ **Tela de Registro** - Criação de novas contas com validação de senhas
✅ **Dashboard** - Visão geral com estatísticas e gráficos simulados
✅ **Gestão de Estoque** - Lista de produtos com filtros e busca
✅ **Cadastro de Produtos** - Formulário completo com suporte a múltiplos lotes
✅ **Edição de Produtos** - Atualização de informações e lotes
✅ **Sistema de Alertas** - Notificações sobre vencimento e estoque baixo
✅ **Navegação Sidebar** - Menu responsivo e intuitivo

## 🚀 Como Executar

### Pré-requisitos

- Node.js 16+ instalado
- npm ou yarn

### Instalação

1. **Clone ou acesse o diretório do projeto:**

```bash
cd ValidAI
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Inicie o servidor de desenvolvimento:**

```bash
npm run dev
```

4. **Abra seu navegador e acesse:**

```
http://localhost:3000
```

### Comandos Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria uma build de produção
- `npm start` - Executa a build de produção
- `npm run lint` - Executa verificações de lint

## 📁 Estrutura de Pastas

```
ValidAI/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout raiz
│   │   ├── page.tsx            # Página inicial (redireciona)
│   │   ├── globals.css         # Estilos globais
│   │   ├── login/
│   │   │   └── page.tsx        # Página de login
│   │   ├── register/
│   │   │   └── page.tsx        # Página de registro
│   │   ├── dashboard/
│   │   │   └── page.tsx        # Dashboard principal
│   │   ├── stock/
│   │   │   ├── page.tsx        # Lista de produtos
│   │   │   ├── add/
│   │   │   │   └── page.tsx    # Adicionar produto
│   │   │   └── edit/
│   │   │       └── [id]/page.tsx # Editar produto
│   │   ├── alerts/
│   │   │   └── page.tsx        # Alertas
│   │   ├── reports/
│   │   │   └── page.tsx        # Relatórios
│   │   └── settings/
│   │       └── page.tsx        # Configurações
│   └── components/
│       ├── Button.tsx          # Componente Button
│       ├── Input.tsx           # Componente Input
│       ├── Card.tsx            # Componente Card
│       ├── Sidebar.tsx         # Sidebar de navegação
│       ├── Header.tsx          # Header das páginas
│       └── index.ts            # Índice de componentes
├── package.json                # Dependências do projeto
├── tailwind.config.ts          # Configuração do Tailwind
├── postcss.config.js           # Configuração do PostCSS
├── tsconfig.json               # Configuração do TypeScript
├── next.config.ts              # Configuração do Next.js
└── README.md                   # Este arquivo
```

## 🎨 Design e Estilização

- **Tailwind CSS** - Framework de estilização utilitário
- **Cores Padronizadas:**
  - Primária: Azul (#3B82F6)
  - Secundária: Verde (#10B981)
  - Perigo: Vermelho (#EF4444)
  - Aviso: Amarelo (#F59E0B)

## 📱 Fluxo de Usuário

### 1. Autenticação
- Usuário não autenticado é redirecionado para `/login`
- Pode criar conta em `/register` ou fazer login
- Dados são armazenados localmente em `localStorage`

### 2. Dashboard
- Visão geral com estatísticas
- Gráficos simulados de distribuição
- Cards com produtos críticos
- Ações rápidas

### 3. Gestão de Estoque
- Lista completa de produtos
- Filtros por status e busca por nome
- Opções para editar ou excluir
- Link para adicionar novos produtos

### 4. Cadastro de Produtos
- Formulário completo com validação
- Suporte a múltiplos lotes
- Campos para preço, categoria, etc.

### 5. Alertas
- Notificações sobre vencimento
- Alertas de estoque baixo
- Filtros por tipo e urgência

## 🔐 Armazenamento de Dados

Este é um protótipo **frontend-only**. Os dados são armazenados em:
- **localStorage** - Para estado de autenticação e email do usuário
- **Estado React** - Para dados de produtos e alertas (perdidos ao recarregar)

Para persistência real, seria necessário integrar um backend.

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca UI
- **Next.js 14** - Framework React
- **Tailwind CSS 3** - Estilização
- **TypeScript** - Type safety
- **PostCSS** - Processador de CSS

## 📝 Notas de Desenvolvimento

### Componentes Reutilizáveis

Todos os componentes estão em `src/components/` e podem ser importados via:

```typescript
import { Button, Input, Card, Sidebar, Header } from '@/components';
```

### Validação

A validação é feita no cliente com feedback visual imediato. Exemplos:
- Campos obrigatórios
- Validação de email
- Confirmação de senhas
- Alertas de erros

### Responsividade

O design é totalmente responsivo utilizando Tailwind CSS:
- Mobile-first approach
- Grid responsivo
- Breakpoints: sm, md, lg, xl

## 🚀 Melhorias Futuras

- [ ] Integração com API backend
- [ ] Autenticação real com JWT
- [ ] Persistência de dados em banco de dados
- [ ] Gráficos interativos com ChartJS
- [ ] Exportação de relatórios em PDF
- [ ] Sistema de permissões de usuário
- [ ] Notificações em tempo real
- [ ] Integração com código de barras
- [ ] Modo escuro
- [ ] Suporte a múltiplos idiomas

## 📄 Licença

Este projeto é fornecido como protótipo educacional.

## 👨‍💻 Autor

Desenvolvido como um protótipo de interface de usuário moderno e responsivo.

---

**Desenvolvido com ❤️ usando React, Next.js e Tailwind CSS**
