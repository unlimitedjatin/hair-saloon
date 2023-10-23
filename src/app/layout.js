import './globals.css'
import { Inter, Orbitron, Audiowide, Limelight } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400'] });

export const metadata = {
  title: 'Ethnix Hair Saloon',
  description: 'Best Unisex Hair Saloon in Bengaluru',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
