import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <section id='about' className="py-30 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className='grid lg:grid-cols-2 gap-16 items-start '>
           {/* Left side - Image placeholder */}
          <div className='relative'>
            <div className="w-full h-[300px] lg:h-[600px]  rounded-lg flex items-center justify-center">
              <Image
              src={'/outside.webp'}
              alt='hadramout restaurant'
              fill
              className=''
              />
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className='space-y-8'>
            <div className="text-sm text-brand-primary font-semibold tracking-wide uppercase">
              Since 2024
            </div>
            
            <div>
              <h2 className='text-5xl  text-brand-secondary mb-8 leading-tight upper font-semibold'>
                Serving Traditional <span className='text-brand-primary'>Yemini Cuisine to Toledo</span> 
              </h2>
              
              <div className="space-y-6 text-lg text-foreground leading-relaxed">
                <p>
                  Established in 2024, our restaurant is dedicated to sharing the vibrant flavors and hospitality of Yemen’s Hadramout region. We invite you to experience authentic Yemeni cuisine in a welcoming and modern setting.
                </p>
                <p>
                 From our signature Mandi and Zurbian to traditional Fahsah and fresh Yemeni bread, we use only the finest ingredients and time-honored cooking methods to ensure an authentic dining experience.
                </p>
              </div>
            </div>
           
        </div>
        </div>
       
      </div>
    </section>
  )
}

export default About


