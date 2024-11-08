import Navbar from '@/components/navbar/Navbar'
import { Poppins } from 'next/font/google' 
import type { Metadata } from 'next'
import './globals.css'
import Providers from './providers'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Siesta Tours',
  description: 'Made with Next JS, TypeScript, Tailwind, Shadcn, Clerk, Zod, Prisma and Supabase',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={poppins.className}>
        <Providers>
          <Navbar />
          <main className='container py-10'>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
