// src/app/layout.js
import Header from '@/components/Header/Header';
import './global.css'; // Pode criar um arquivo global em branco se o Next reclamar

export const metadata = {
  title: 'CopaMarket 2026',
  description: 'Catálogo de produtos oficiais das marcas mundiais',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}