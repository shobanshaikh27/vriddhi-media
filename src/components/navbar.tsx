"use client"

import Link from "next/link"
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import logo from "./../../public/images/logo.png"
import Image from "next/image"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl">
            <Image alt="logo" src={logo} width={250} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="newsletter" className="text-md text-[#1308fe] hover:text-blue-600">
              Newsletter
            </Link>
            <Link href="#services" className="text-md text-[#1308fe] hover:text-blue-600">
              Services
            </Link>
            <Link href="#contact" className="text-md text-[#1308fe] hover:text-blue-600">
              Contact
            </Link>
            <Button variant="outline" className=" border border-[#1308fe] text-[#1308fe] hover:text-blue-600">Book a Meeting</Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href="#" className="text-lg text-[#1308fe] hover:text-blue-600">
                  Newsletter
                </Link>
                <Link href="#" className="text-lg text-[#1308fe] hover:text-blue-600">
                  Services
                </Link>
                <Link href="#" className="text-lg text-[#1308fe] hover:text-blue-600">
                  Contact
                </Link>
                <Button>Book a Meeting</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

