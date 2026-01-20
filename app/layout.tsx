import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ready Get - Apps that help you connect and preserve what matters most',
  description: 'Ready Get builds apps that help you connect and preserve what matters most. Home of Postie and Fable.',
  openGraph: {
    title: 'Ready Get',
    description: 'Apps that help you connect and preserve what matters most',
    url: 'https://readyget.app',
    siteName: 'Ready Get',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
