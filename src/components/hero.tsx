import { Button } from "@/components/ui/button"
import heroImage from "./../../public/images/heroImage.png"
import Image from "next/image"

export function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3  max-sm:grid-cols-2 gap-10 items-center">
          <div className="col-span-1 max-sm:col-span-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 leading-tight mb-6">
              Get 30% More Traffic in Just 30 Days.
            </h1>
            <p className="text-gray-600 mb-8 max-w-lg">
              AI powers the research, people craft the content. Together, we present SEO strategies that can't be replicated. SEO strategies that convert readers into buyers.
            </p>
            <Button size="lg" className="w-full bg-transparent text-blue-600 border border-[#1308fe] hover:text-white hover:bg-[#1308fe] md:w-auto">
              BOOK A MEETING
            </Button>
          </div>
          <div className="relative w-full col-span-2">
            <Image alt="hero image" src={heroImage} />
          </div>
        </div>
      </div>
    </section>
  )
}

