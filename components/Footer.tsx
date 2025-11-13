export default function Footer() {
  return (
    <footer className="bg-navy-light border-t border-gold/30 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <p className="text-gold font-serif text-2xl sparkle mb-2">XOXO, HANAZAWA</p>
          <p className="text-gray-400 italic">Gossip Girl Meets Psychic Power</p>
        </div>
        
        <div className="border-t border-gold/20 pt-6">
          <p className="text-sm text-gray-500 mb-2">
            An esper's observations on power, control, and growth.
          </p>
          <p className="text-xs text-gray-600">
            Built with Next.js & Tailwind CSS | Psychic energy not included
          </p>
        </div>
        
        <div className="mt-8 text-purple-light/60 text-xs">
          <p>You know you love me. ✨</p>
        </div>
      </div>
    </footer>
  )
}
