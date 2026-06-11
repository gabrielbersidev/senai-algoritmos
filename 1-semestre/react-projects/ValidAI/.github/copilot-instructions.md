# ValidAI - Project Instructions

## Project Overview

ValidAI é um protótipo visual (frontend-only) de um sistema de controle de estoque com foco em gestão de produtos com data de validade. O projeto demonstra fluxos de usuário completos e uma interface moderna usando React.js, Next.js e Tailwind CSS.

## Technology Stack

- **Frontend Framework:** React.js 18
- **Meta-Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS 3
- **Language:** TypeScript
- **Build Tool:** Next.js built-in

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # Reusable React components
├── app/globals.css   # Global Tailwind styles
```

## Key Features Implemented

1. **Authentication Flow**
   - Login page with validation
   - Register page with password confirmation
   - localStorage-based session management

2. **Dashboard**
   - Overview with statistics cards
   - Simulated charts for product distribution
   - Critical products display

3. **Stock Management**
   - Product list with search and filters
   - Status indicators (valid, warning, expired)
   - Add/Edit product pages with batch management

4. **Alert System**
   - Expiration and low-stock notifications
   - Alert filtering and marking as read
   - Urgency-based color coding

5. **Navigation**
   - Responsive sidebar
   - Link-based navigation using Next.js Link
   - Active route indication

## Running the Project

```bash
npm install
npm run dev
```

Access at: http://localhost:3000

## Development Guidelines

### Component Creation

All reusable components should be placed in `src/components/` and exported via the index file:

```typescript
// src/components/index.ts
export { Button } from './Button';
```

### Page Structure

Each page should:
- Be a client component (`'use client'`)
- Include authentication check
- Use Sidebar for navigation
- Use Header component for page title
- Import shared components from index

### Styling

Use Tailwind CSS utility classes exclusively:
- Color scheme: `bg-blue-600`, `text-blue-600`, etc.
- Responsive: `md:grid-cols-2`, `lg:grid-cols-4`
- Components: Apply via `@layer components` in globals.css

### Form Validation

- Validate on client-side before submission
- Show error messages under fields
- Use visual feedback (red borders, error text)
- Disable submit button during processing

## Data Handling

**Note:** This is a frontend-only prototype. Data handling:
- Auth state: localStorage
- Product data: React component state
- Alerts: Hardcoded and state-managed
- **Important:** All data is lost on page refresh

For production, integrate:
- Backend API (Node.js, Python, etc.)
- Database (PostgreSQL, MongoDB, etc.)
- Real JWT authentication
- Persistent data storage

## Routing Map

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | Home | Redirects based on auth |
| `/login` | Login | User authentication |
| `/register` | Register | New account creation |
| `/dashboard` | Dashboard | Main overview |
| `/stock` | Stock List | Product management |
| `/stock/add` | Add Product | Create new product |
| `/stock/edit/[id]` | Edit Product | Update product info |
| `/alerts` | Alerts | Notifications |
| `/reports` | Reports | Placeholder page |
| `/settings` | Settings | Placeholder page |

## Customization Tips

### Change Theme Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#3B82F6',    // Change primary color
  secondary: '#10B981',  // Change secondary color
}
```

### Add New Pages

1. Create folder in `src/app/new-page/`
2. Create `page.tsx` with `'use client'`
3. Add route to Sidebar in `src/components/Sidebar.tsx`

### Modify Sidebar Links

Edit the `navLinks` array in `src/components/Sidebar.tsx`

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Stuck on loading | Check localStorage for 'isAuthenticated' |
| Styles not applying | Ensure Tailwind classes are spelled correctly |
| 404 on route | Verify page.tsx exists in route folder |
| Sidebar not showing | Check authentication state in localStorage |

## Future Enhancements

- [ ] Backend API integration
- [ ] Database persistence
- [ ] Real authentication system
- [ ] Interactive charts (ChartJS)
- [ ] PDF export functionality
- [ ] Barcode scanning
- [ ] Dark mode support
- [ ] Internationalization
- [ ] User permissions system
- [ ] Real-time notifications

## Project Metadata

- **Created:** June 2026
- **Status:** Frontend Prototype (MVP)
- **Target Users:** Inventory managers and store operators
- **Browser Support:** Modern browsers (Chrome, Firefox, Safari, Edge)

## Related Documentation

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS Docs: https://tailwindcss.com/docs
- React Documentation: https://react.dev
