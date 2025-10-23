import { Card } from "../ui/card"
import Image from "next/image"
import { TESTIMONIALS } from "@/lib/constants"

const Testimonials = () => {
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
          <Card className="w-auto max-w-[90%] md:max-w-[420px] lg:max-w-[580px] self-center p-5 md:p-6 bg-secondary shadow-xl translate-y-30 lg:translate-y-16">
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

            <p className="text-sm md:text-base text-foreground leading-relaxed mb-5">
              <q>{TESTIMONIALS[2].quote}</q>
            </p>

            <div className="flex items-center gap-3">

              <div>
                <p className="font-bold text-base text-foreground">{TESTIMONIALS[2].author} </p>
                <p className="text-sm text-muted-foreground">Happy Customer</p>
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

        {/* <div className='grid md:grid-cols-3 gap-10'>
                    {TESTIMONIALS.map((testimonial, index) => (
                        <Card key={index} className='bg-secondary p-10 shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between'>
                            <div className='flex mb-6'>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className='w-6 h-6 fill-brand-primary text-brand-primary' />
                                ))}
                            </div>
                            <p className='text-foreground mb-8 text-lg leading-relaxed italic'>
                                &quot;{testimonial.quote}&quot;
                            </p>
                            <div>
                                <div className='font-bold text-foreground text-xl mb-1'>{testimonial.author}</div>
                            </div>
                        </Card>
                    ))}
                </div> */}
      </div>
    </section>
  )
}

export default Testimonials
