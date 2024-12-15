"use client"

import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Stats } from "@/components/stats"
import { ScheduleMeeting } from "@/components/schedule-meeting"
import { Testimonials } from "@/components/testimonial"
import { ChatbotAvatar } from "@/components/chatbot";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Stats />
      <ScheduleMeeting />
      <Testimonials />
      <ChatbotAvatar />
    </main>
  )
}

