import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Traditional Yemeni Mandi"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
     

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white text-balance mb-6">
          Experience The Authentic Flavors Of
          <br />
          <span className="text-brand-primary">Hadramout</span>
        </h1>

        {/* Subtitle */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <div className="w-12 h-px bg-primary"></div>
          <p className="text-lg md:text-xl text-white/90 font-medium">TRADITIONAL YEMENI CUISINE</p>
          <div className="w-12 h-px bg-primary"></div>
        </div>

        {/* Call to action */}
        <div className="space-y-4">
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Journey through the rich culinary heritage of Yemen with our authentic dishes, prepared with traditional
            spices and ancient recipes.
          </p>
        </div>
      </div>

      {/* Scroll indicator
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div> */}
    </section>
  )
}
export default Hero