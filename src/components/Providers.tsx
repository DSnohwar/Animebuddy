'use client'

import { MessagesProvider } from '@/context/messages'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const queryClient = new QueryClient()

  return (
    <>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <MessagesProvider>{children}</MessagesProvider>
      </QueryClientProvider>
    </>

  )
}

export default Layout
