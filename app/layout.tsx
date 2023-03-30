'use client'
import './globals.css'
import Sidebar from '@/components/sidebar'
import Navbar from '@/components/navbar'
import { ThemeProvider } from 'next-themes'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='bg-gradient-to-r from-green to-blue-400' >
        <ThemeProvider>
        <div className='grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 '>
          <div className='col-span-12 p-4 bg-white dark:bg-black  lg:col-span-3 rounded-2xl text-center'>
            <Sidebar />
          </div>
          <div className='col-span-12 bg-white lg:col-span-9 rounded-2xl flex flex-col overflow-hidden '>
            <Navbar/>
            {children}
          </div>
        </div>
        </ThemeProvider>
        </body>
    </html>
  )
}
