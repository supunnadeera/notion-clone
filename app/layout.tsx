import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-providers'
import { ConvexClientProvider } from '@/components/providers/convex-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jotion',
  description: 'The better note-taking app. built with next.js',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: dark)',
        url: '/logo.svg',
        href: '/logo.svg',
      },
      {
        media: '(prefers-color-scheme: light)',
        url: '/logo-dark.svg',
        href: '/logo-dark.svg',
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
            storageKey='jotion-theme'
            >
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
        </body>
    </html>
  )
}
