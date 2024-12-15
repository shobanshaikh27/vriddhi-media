"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export default  function Page() {
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const email = formData.get("email")
    const firstName = formData.get("firstName")
    const lastName = formData.get("lastName")

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast.success("Thanks for subscribing!")
    setIsLoading(false)
    event.currentTarget.reset()
  }

  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Newsletter Signup Form */}
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-blue-600">
              Sign up for Newsletter
            </h2>
            <form onSubmit={onSubmit} className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                name="firstName"
                placeholder="First Name"
                className="bg-white"
                required
              />
              <Input
                name="lastName"
                placeholder="Last Name"
                className="bg-white"
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="Email *"
                className="bg-white"
                required
              />
              <div className="md:col-start-3">
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send"}
                </Button>
              </div>
            </form>
          </div>

          {/* Newsletter Content */}
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="text-4xl md:text-5xl font-bold text-blue-600 leading-tight">
              Content That Converts Newsletter
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Want to turn your audience into loyal customers? Discover how to leverage user-generated content (UGC) and other proven content marketing strategies to boost conversions, increase sales, and build a thriving community around your brand. Sign up for our free newsletter, create content that converts, and get expert tips delivered straight to your inbox.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

