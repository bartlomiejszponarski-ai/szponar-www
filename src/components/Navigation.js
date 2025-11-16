import { useState } from 'react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-40 top-0 bg-black/90 backdrop-blur-md border-b border-gray-800/50">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <div className="text-2xl md:text-3xl font-bold text-white tracking-widest hover:text-cyan-400 transition-colors cursor-pointer">
          SZPONAR<span className="text-cyan-400">.AI</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-sm text-gray-400 font-mono">
          <a href="#about" className="hover:text-cyan-400 hover:translate-y-[-2px] transition-all duration-200">[ O MNIE ]</a>
          <a href="#automations" className="hover:text-cyan-400 hover:translate-y-[-2px] transition-all duration-200">[ AUTOMATYZACJE ]</a>
          <a href="#events" className="hover:text-cyan-400 hover:translate-y-[-2px] transition-all duration-200">[ TARGI ]</a>
          <a href="#contact" className="text-green-400 hover:text-green-300 hover:translate-y-[-2px] transition-all duration-200">[ KONTAKT ]</a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-cyan-400 focus:outline-none z-50"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-gray-800">
          <div className="container mx-auto px-6 py-6 flex flex-col space-y-4 text-sm text-gray-400 font-mono">
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="hover:text-cyan-400 transition-colors py-2 border-b border-gray-800"
            >
              [ O MNIE ]
            </a>
            <a
              href="#automations"
              onClick={() => setIsOpen(false)}
              className="hover:text-cyan-400 transition-colors py-2 border-b border-gray-800"
            >
              [ AUTOMATYZACJE ]
            </a>
            <a
              href="#events"
              onClick={() => setIsOpen(false)}
              className="hover:text-cyan-400 transition-colors py-2 border-b border-gray-800"
            >
              [ TARGI ]
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-green-400 hover:text-green-300 transition-colors py-2"
            >
              [ KONTAKT ]
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
