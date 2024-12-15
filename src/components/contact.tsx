import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <footer className="bg-blue-600 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Let's Work Together</h3>
            <div className="space-y-2">
              <p>Phone:</p>
              <p className="text-blue-100">+1234567890</p>
              <p>Email:</p>
              <p className="text-blue-100">info@vriddhi.media</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Get in the Know</h3>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Stay in Touch</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  placeholder="First Name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Input 
                  placeholder="Last Name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              <Input 
                type="email" 
                placeholder="Email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Input 
                placeholder="Subject"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Textarea 
                placeholder="Leave us a message..."
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="secondary" className="w-full">Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

