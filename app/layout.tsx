'use client'
// import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Gnosis } from "@thirdweb-dev/chains";


const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThirdwebProvider activeChain={Gnosis} clientId="02dbda3e09a8316ddb94d9098c384ec2">
      <body className={inter.className}>{children}</body>
    </ThirdwebProvider>
    </html>
  )
}
