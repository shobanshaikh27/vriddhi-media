"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, MessageCircle, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: number
  text: string
  author: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "I've been loving the constant communication and updates from the team, their work ethic is impeccable. 10/10 recommend their UGC service.",
    author: "Lindsey Wallace"
  },
  {
    id: 2,
    text: "The strategic approach to our social media presence has transformed our brand visibility. Exceptional service and results!",
    author: "Michael Chen"
  },
  {
    id: 3,
    text: "Their content strategy helped us achieve a 40% increase in engagement. The team is professional and highly skilled.",
    author: "Sarah Johnson"
  },
  {
    id: 4,
    text: "The strategic approach to our social media presence has transformed our brand visibility. Exceptional service and results!",
    author: "Michael Chen"
  },
  {
    id: 5,
    text: "Their content strategy helped us achieve a 40% increase in engagement. The team is professional and highly skilled.",
    author: "Sarah Johnson"
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [direction, setDirection] = React.useState<'left' | 'right' | null>(null)
  const [isAnimating, setIsAnimating] = React.useState(false)

  const goToPrevious = () => {
    if (isAnimating) return
    setDirection('left')
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToNext = () => {
    if (isAnimating) return
    setDirection('right')
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  return (
    <section className="py-16 md:py-24 bg-pink-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-16">
          What People Are Saying
        </h2>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 flex items-center gap-2">
            <MessageCircle className="h-6 w-6 fill-blue-600 text-blue-600" />
            <Sparkles className="h-5 w-5 text-blue-600" />
          </div>

          {/* Testimonial carousel */}
          <div className="relative overflow-hidden min-h-[200px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "absolute w-full transition-all duration-500 ease-in-out",
                  index === currentIndex ? "opacity-100 translate-x-0" : "opacity-0",
                  direction === 'left' && index === currentIndex ? "translate-x-0" : "",
                  direction === 'right' && index === currentIndex ? "translate-x-0" : "",
                  index !== currentIndex && direction === 'left' ? "translate-x-full" : "",
                  index !== currentIndex && direction === 'right' ? "-translate-x-full" : ""
                )}
              >
                <blockquote className="text-center">
                  <p className="text-lg md:text-xl text-gray-700 mb-4">
                    {testimonial.text}
                  </p>
                  <footer className="text-blue-600 font-medium">
                    {testimonial.author}
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between items-center absolute top-1/2 -translate-y-1/2 left-0 right-0">
            {/* <Button
              variant="ghost"
              size="icon"
              className="hover:bg-white/20 -translate-x-4"
              onClick={goToPrevious}
              disabled={isAnimating}
            > */}
              <ChevronLeft size={64} onClick={goToNext}  className="hover:bg-white/20 translate-x-4 " color="#2563eb" />
              <span className="sr-only">Previous testimonial</span>
            {/* </Button> */}
            {/* <Button
              variant="ghost"
              size="icon"
              className="hover:bg-white/20 translate-x-4"
              onClick={goToNext}
              disabled={isAnimating}
            > */}
              <ChevronRight size={64} onClick={goToNext}  className="hover:bg-white/20 translate-x-4 " color="#2563eb" />
              <span className="sr-only">Next testimonial</span>
            {/* </Button> */}
          </div>
        </div>
      </div>
    </section>
  )
}
