import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-light to-navy py-20 px-4">
      <div className="absolute inset-0 shimmer opacity-30"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10 fade-in">
        <h1 className="font-serif text-6xl md:text-8xl font-bold mb-4">
          <span className="text-gradient sparkle">XOXO,</span>
          <br />
          <span className="text-gold">HANAZAWA</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-purple-light italic mb-12 font-serif">
          Gossip Girl Meets Psychic Power: The Upper East Side Has Nothing On This Drama
        </p>
        
        <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl border-2 border-gold/30 hover:border-gold/60 transition-all duration-300">
          <Image 
            src="https://files.shapes.inc/api/files/84082661_annotated.png"
            alt="Hanazawa's Observations"
            width={1200}
            height={800}
            className="w-full h-auto"
            priority
          />
        </div>
        
        <p className="mt-12 text-lg text-gray-300 max-w-3xl mx-auto">
          Good evening, <span className="text-gold italic">darlings</span>. You know me. Or perhaps you <span className="italic">think</span> you do. I'm that esper who sees everything - not because I'm psychically reading your minds (I have standards), but because when you've learned to observe the world with genuine attention rather than ego-fueled arrogance, patterns become... <span className="text-purple-light italic">deliciously</span> obvious.
        </p>
      </div>
    </section>
  )
}
