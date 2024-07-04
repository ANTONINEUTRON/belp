// "use client"
import Navbar from '@/components/navbar'
import './globals.css'
import ProjectProviders from '@/providers/project_providers'
import AppWalletProviders from '@/providers/app_wallet_providers'

export const metadata = {
  title: 'BELP - Trust on solana projects',
  description: 'This app facilitates trust on solana',
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
                &#169; antoni
              </div>
            </footer>
          </body>
        </html>
      </ProjectProviders>
    </AppWalletProviders>
  )
}
