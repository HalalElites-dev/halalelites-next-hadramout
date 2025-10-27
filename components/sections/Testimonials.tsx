'use client';
import { Card } from "../ui/card"
import Image from "next/image"
import { TESTIMONIALS } from "@/lib/constants"
import { useState, useEffect } from "react"

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(2)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
        setIsTransitioning(false)
      }, 300)
    }, 4000) // Change testimonial every 4 seconds

    return () => clearInterval(interval)
  }, [])

  const currentTestimonial = TESTIMONIALS[currentIndex]

  return (
    <section id="testimonials" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-8 md:mb-0 relative z-10">
          {/* Left - Heading */}
          <div className="md:flex-1 justify-center md:justify-start text-center md:text-left -mb-20 lg:mt-15">
            <div className="text-sm text-brand-primary font-semibold tracking-wide uppercase mb-4">Testimonials</div>

            <h2 className="text-5xl md:text-6xl uppercase text-foreground leading-tight tracking-tight font-semibold">
              What Our <span className="text-brand-primary">Customers Say</span>
            </h2>
          </div>

          {/* Right - Testimonial Card (will overlap image slightly) */}
          <Card className="w-[90%] md:w-[420px] lg:w-[580px] min-h-[260px] md:min-h-[280px] self-center p-5 md:p-6 bg-secondary shadow-xl translate-y-30 lg:translate-y-16 flex flex-col">
            <svg
              className="w-12 h-12 mb-3 opacity-80 hidden md:block text-brand-primary "
              fill="currentColor"
              viewBox="0 0 120 84"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <g clipPath="url(#a)">
                <path d="M27.528 99H0L21.966 0H66L27.528 99ZM81.528 99H54L75.966 0H120L81.528 99Z" />
              </g>
            </svg>

            <div 
              className="transition-opacity duration-300 flex-1 flex flex-col"
              style={{ opacity: isTransitioning ? 0 : 1 }}
            >
              <p className="text-sm md:text-base text-foreground leading-relaxed mb-5 flex-1">
                <q>{currentTestimonial.quote}</q>
              </p>

              <div className="flex items-center gap-3 mt-auto">
                <div>
                  <p className="font-bold text-base text-foreground">{currentTestimonial.author} </p>
                  <p className="text-sm text-muted-foreground">Happy Customer</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Image - Below the content */}
        <div className="relative w-full h-[425px]   lg:h-[640px] rounded-lg overflow-hidden">
          <Image
            src="/testimonial.jpg"
            alt="Hadramout Restaurant logo on the wall"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        </div>

     
      </div>
    </section>
  )
}

export default Testimonials