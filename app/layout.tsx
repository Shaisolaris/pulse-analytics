import { Toaster } from "@/components/ui/sonner"
import type { Metadata } from 'next'
import { DM_Sans, JetBrains_Mono, Outfit } from 'next/font/google'
import './globals.css'

const _dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })
const _jetbrains = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })
const _outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })

export const metadata: Metadata = {
  title: 'Pulse — Financial Analytics Dashboard',
  description: 'Professional financial analytics dashboard with portfolio tracking, performance metrics, risk analysis, and market overview.',
  icons: {
    icon: [
      {
        url: '/pulse-analytics/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/pulse-analytics/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/pulse-analytics/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/pulse-analytics/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased grain">
        {children}
        
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
