// "use client"
import Navbar from '@/components/navbar'
import './globals.css'
import ProjectProviders from '@/providers/project_providers'
import AppWalletProviders from '@/providers/app_wallet_providers'

export const metadata = {
  title: 'BELP -  Your Gateway to Solana Project Insights and Reviews',
  description: 'Discover, review, and gain insights on Solana-based projects. Our web-based dApp, built with Next.js, leverages AI to provide comprehensive project insights and allows users to leave and share reviews.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AppWalletProviders>
      <ProjectProviders>
        <html lang="en">
          <body className="m-auto mt-4">
            <Navbar/>
            <div className='container m-auto'>
              {children}
            </div>

            <footer className='flex justify-center mt-10'>
              <div>
                &#169; Antoni. All rights reservec
              </div>
            </footer>
          </body>
        </html>
      </ProjectProviders>
    </AppWalletProviders>
  )
}
