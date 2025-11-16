import { useIntersectionAnimation } from '../hooks/useDecodeAnimation';

const EventCard = ({ date, title, description, location, borderColor }) => {
  return (
    <div className={`group relative flex flex-col md:flex-row items-start md:items-center bg-[#0f0f0f] p-8 border-l-4 border-gray-700 hover:border-${borderColor} transition-all rounded-sm`}>
      <div className={`md:w-1/4 text-${borderColor} font-bold text-base md:text-lg mb-3 md:mb-0 tracking-widest`}>{date}</div>
      <div className="md:w-1/2 mb-3 md:mb-0 md:px-4">
        <h3 className={`text-white font-bold text-lg md:text-xl group-hover:text-${borderColor} transition-colors mb-2`}>{title}</h3>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">{description}</p>
      </div>
      <div className="md:w-1/4 md:text-right text-gray-600 font-mono text-sm">
        [{location}]
      </div>
    </div>
  );
};

export const EventsSection = () => {
  useIntersectionAnimation();

  const events = [
    {
      date: "AI SUMMIT 2024",
      title: "Przyszłość Hiperautomatyzacji",
      description: "Prelekcja o łączeniu tradycyjnych systemów RPA z generatywną sztuczną inteligencją.",
      location: "WARSZAWA",
      borderColor: "cyan-500"
    },
    {
      date: "E-COMMERCE EXPO",
      title: "AI w Obsłudze Klienta",
      description: "Case study: Jak chatboty oparte na LLM zastępują 80% pracy BOK.",
      location: "BERLIN",
      borderColor: "green-500"
    },
    {
      date: "TECH TRENDS",
      title: "Panel Ekspercki: No-Code",
      description: "Debata o bezpieczeństwie danych w rozwiązaniach no-code.",
      location: "KRAKÓW",
      borderColor: "cyan-500"
    }
  ];

  return (
    <section id="events" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16 border-b border-gray-800 pb-4">
          <div className="flex-1 min-w-0 md:max-w-[400px] lg:max-w-none">
            <div className="text-green-500 text-xs tracking-widest mb-2">PUBLIC SPEAKING</div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white break-words min-h-[3rem] md:min-h-[5rem] lg:min-h-[4rem]">
              <span className="decode-text" data-value="TARGI & KONFERENCJE"></span>
            </h2>
          </div>
          <div className="hidden md:block text-right text-xs text-gray-500 font-mono">
            LAST_UPDATED: 2024.11.14<br />
            STATUS: ACTIVE SPEAKER
          </div>
        </div>

        <div className="space-y-6">
          {events.map((event, idx) => (
            <EventCard key={idx} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};
