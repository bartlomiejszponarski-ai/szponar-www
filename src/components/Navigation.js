export const Navigation = () => {
  return (
    <nav className="fixed w-full z-40 top-0 bg-black/90 backdrop-blur-md border-b border-gray-800/50">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <div className="text-2xl md:text-3xl font-bold text-white tracking-widest hover:text-cyan-400 transition-colors cursor-pointer">
          SZPONAR<span className="text-cyan-400">.AI</span>
        </div>
        <div className="hidden md:flex space-x-10 text-sm text-gray-400 font-mono">
          <a href="#about" className="hover:text-cyan-400 hover:translate-y-[-2px] transition-all duration-200">[ O MNIE ]</a>
          <a href="#automations" className="hover:text-cyan-400 hover:translate-y-[-2px] transition-all duration-200">[ AUTOMATYZACJE ]</a>
          <a href="#events" className="hover:text-cyan-400 hover:translate-y-[-2px] transition-all duration-200">[ TARGI ]</a>
          <a href="#contact" className="text-green-400 hover:text-green-300 hover:translate-y-[-2px] transition-all duration-200">[ KONTAKT ]</a>
        </div>
      </div>
    </nav>
  );
};
