import { useIntersectionAnimation } from '../hooks/useDecodeAnimation';

export const HeroSection = () => {
  useIntersectionAnimation();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="about">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Tekst Hero - Left */}
          <div className="z-10">
            <div className="mb-4 text-cyan-400 text-sm tracking-widest border-l-2 border-cyan-400 pl-4">
              SYSTEM STATUS: ONLINE
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              <span className="decode-text" data-value="SZPONAR"></span>
            </h1>
            <h2 className="text-sm md:text-lg lg:text-2xl text-gray-400 mb-8 min-h-[4rem] md:min-h-[5rem]">
              <span className="typewriter" data-text="AI MANAGER // AUTOMATION EXPERT // N8N WIZARD"></span>
              <span className="cursor-blink"></span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg leading-relaxed text-sm border-l border-gray-800 pl-4">
              Specjalizuję się w budowaniu mostów między chaosem danych a precyzją sztucznej inteligencji. Moje środowisko naturalne to węzły n8n i modele językowe.
            </p>
            <a href="#contact" className="inline-block bg-cyan-900/20 border border-cyan-500 text-cyan-400 px-8 py-3 hover:bg-cyan-500 hover:text-black transition-all duration-300 tracking-wider font-bold">
              INITIATE_CONTACT();
            </a>
          </div>

          {/* Zdjęcie Szponara - Right */}
          <div className="flex justify-center relative z-10">
            <div className="w-full max-w-md relative">
              {/* Element dekoracyjny pod zdjęciem */}
              <div className="absolute -right-4 -bottom-4 w-32 h-32 border-r-2 border-b-2 border-green-500 opacity-50"></div>

              <div className="cyber-frame group">
                <img
                  src={`${process.env.PUBLIC_URL}/images/szponar-portrait.png`}
                  alt="Szponar Portrait"
                  className="w-full h-auto object-cover aspect-[4/5]"
                />

                {/* Nakładka z danymi */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                  <div className="text-xs text-green-400 font-mono">ID: SZP_01</div>
                  <div className="text-xs text-gray-500 font-mono">LOC: WARSAW_HUB</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dekoracyjne tło */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>
    </section>
  );
};
