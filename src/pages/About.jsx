const About = () => {
    return (
      <div className="bg-bn-white">
        
        {/* Hero */}
        <section className="relative h-[60vh] bg-bn-black flex items-center justify-center overflow-hidden">
          <img
            src="cover2.jpg"
            alt="About BiancoNero"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="relative z-10 text-center text-bn-white px-6">
            <p className="font-montserrat text-xs uppercase tracking-widest2 text-bn-taupe mb-4">
              Our Story
            </p>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold">
              A Story in Contrast
            </h1>
          </div>
        </section>
  
        {/* Story */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-montserrat text-base text-bn-charcoal leading-loose mb-6">
              BiancoNero was born from a simple belief that the essentials can make a deeper impact.
            </p>
            <p className="font-montserrat text-base text-bn-charcoal leading-loose mb-6">
              We create timeless pieces that balance simplicity and sophistication, designed to be part of your everyday life.
            </p>
            <p className="font-montserrat text-base text-bn-charcoal leading-loose">
              More than clothing, BiancoNero is a mindset — a choice for a simpler, more intentional and brighter tomorrow.
            </p>
  
            <div className="flex justify-center gap-8 mt-12 font-montserrat text-xs uppercase tracking-widest2 text-bn-taupe">
              <span>Simple Choices</span>
              <span>•</span>
              <span>Bolder Days</span>
              <span>•</span>
              <span>A Better You</span>
            </div>
          </div>
        </section>
  
        {/* Values */}
        <section className="py-20 px-6 bg-bn-light-gray">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="font-montserrat text-xs uppercase tracking-widest2 text-bn-taupe mb-3">
                What We Stand For
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-bn-black">
                The Values We Wear
              </h2>
              <div className="w-16 h-[1px] bg-bn-taupe mx-auto mt-6"></div>
            </div>
  
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                'Quality in Everything',
                'Simplicity Always',
                'Sustainable Choices',
                'People First',
                'Timeless Design',
                'A Brighter Tomorrow',
              ].map((value) => (
                <div key={value} className="text-center p-6 border border-bn-taupe/40">
                  <p className="font-montserrat text-xs uppercase tracking-widest2 text-bn-black">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Closing */}
        <section className="py-20 px-6 bg-bn-black text-center">
          <p className="font-playfair text-2xl md:text-3xl text-bn-white mb-4">
            From Essentials to a Brighter You.
          </p>
          <div className="w-16 h-[1px] bg-bn-taupe mx-auto"></div>
        </section>
      </div>
    );
  };
  
  export default About;