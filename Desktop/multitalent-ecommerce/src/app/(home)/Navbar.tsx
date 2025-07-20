"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import NavbarSidebar from './Navbar-sidebar';
import { useState } from 'react';
import { MenuIcon } from 'lucide-react';
interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}
function NavbarItem({ href, children, isActive }: NavbarItemProps) {
  return (
    <Button
      asChild
      variant="outline"
      className={cn("bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3 text-lg", isActive && "bg-black text-white hover:bg-black hover:text-white")}><Link href={href}>{children}</Link></Button>
  )
}
const navbarItems = [{ href: "/", children: "home" },
{ href: "/about", children: "About" },
{ href: "/contact", children: "contact" }
]

export default function Navbar() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const RenderNavbar = navbarItems.map((items) => {

    return <NavbarItem key= {items.href}
      href={items.href}
      isActive={pathname === items.href}>
      {items.children}</NavbarItem>
  })
  return (
    <nav className='h-40 flex items-center border-b justify-between '>
      <Link href="/" className='item center pl-9'><span><Image
        src="/atimus_logo.PNG"
        alt="logo"
        width={150}
        height={200} />
        </span></Link>
      <NavbarSidebar
        items={navbarItems}
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen} />
      <div className='flex gap-120'>
        <div className='items-center gap-20 hidden lg:flex'>
          {

            RenderNavbar

          }
        </div>
        <div className='hidden lg:flex items-center gap-4'>
          <Button asChild variant="secondary" className="border-l-0 border-t-0 border-b-0 border-r-0 px-12 h-16 rounded-none bg-white hover:bg-blue-900 hover:text-white transition-colors text-lg">
            <Link href="/sign-in">Log In</Link>
          </Button>
          <Button asChild variant="secondary" className="border-l-0 border-t-0 border-b-0 border-r-0 px-12 h-16 rounded-none bg-black text-white hover:bg-blue-900 hover:text-black transition-colors text-lg">
            <Link href="/sign-up">Start Selling</Link>
          </Button>
        </div>
      </div>
      ,<div className='lg:hidden items-center mr-6'>
        <Button variant="ghost" className='size-12 border-trasnparent bg-white'
          onClick={() => setIsSidebarOpen(true)}>
          <MenuIcon>

          </MenuIcon>
        </Button>

      </div>
    </nav>
  )
}


