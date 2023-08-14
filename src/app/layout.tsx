import { Navbar } from '@/components/Navbar'
import './globals.css'
import { Providers } from './providers'
import { SideBar } from '@/components/SideBar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>  
        <Providers>
        <div className='m-7'>
        <Navbar/>
        <div className='flex'>
        <SideBar/>
        <div className='py-6 w-full px-4'>{children} </div>
        </div>
        </div>
        </Providers>
        </body>
    </html>
  )
}
