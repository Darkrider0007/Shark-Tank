import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navbar/>
      <h1>Next.js + TypeScript</h1>
      <Link href="/login">Login</Link>
    </>
  )
}
