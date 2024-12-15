import { Sparkle, CircleDot, Star, Ribbon } from 'lucide-react'

const services = [
  {
    icon: Sparkle,
    iconColor: "text-pink-500",
    title: "Shifting The Narratives",
    description: "We help you in shifting all your negative PR into positive ones using our strategic UGC push."
  },
  {
    icon: CircleDot,
    iconColor: "text-blue-600",
    title: "Building An Online Presence",
    description: "We give your brand a much-needed push in all the relevant communities and forums to make sure that you don't go unnoticed."
  },
  {
    icon: Star,
    iconColor: "text-orange-500",
    title: "Building A Personal Brand",
    description: "People relate with founders much better than they relate with Brands. We help you become more relatable and connect with your audience on a deeper level."
  },
  {
    icon: Ribbon,
    iconColor: "text-pink-400",
    title: "Building Your Content Funnel",
    description: "Boost website traffic by 20% and brand awareness by 35%! Our all-in-one solution, encompassing research, writing, SEO-optimized blogs, and captivating videos, helps you build an impeccable content machine that gets results."
  }
]

export function Services() {
  return (
    <section id='services' className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-12">
          What we do
        </h2>
        <div className="max-w-6xl mx-auto space-y-8">
          {services.map((service, index) => (
            <div key={index} className="relative">
              <div className="flex items-start justify-between gap-8 py-8">
                <div className="flex items-center gap-4">
                  <div className={`${service.iconColor}`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium text-blue-600">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-right max-w-lg">
                  {service.description}
                </p>
              </div>
              {index < services.length - 1 && (
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[#1308fe]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

