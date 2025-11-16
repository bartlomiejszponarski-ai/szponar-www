import { useIntersectionAnimation } from '../hooks/useDecodeAnimation';

const AutomationCard = ({ icon, title, description, tags, borderColor, accentColor }) => {
  return (
    <div className={`card-hover relative bg-black border border-gray-800 p-8 hover:border-${borderColor}/50 transition-colors group rounded-sm`}>
      <div className={`corner-decor corner-tl ${accentColor}`}></div>
      <div className={`corner-decor corner-br ${accentColor}`}></div>

      <div className={`text-${borderColor} text-5xl mb-6 opacity-70 group-hover:opacity-100 transition-opacity`}>
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed">
        {description}
      </p>
      <div className="text-xs font-mono text-gray-600 flex gap-2 flex-wrap">
        {tags.map((tag, idx) => (
          <span key={idx} className="border border-gray-700 px-3 py-1 hover:border-gray-500 transition-colors">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export const AutomationsSection = () => {
  useIntersectionAnimation();

  const automations = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
          <path d="M8.5 8.5v.01" />
          <path d="M16 15.5v.01" />
          <path d="M12 12v.01" />
          <path d="M11 17v.01" />
          <path d="M7 14v.01" />
        </svg>
      ),
      title: "AI Content Engine",
      description: "W pełni zautomatyzowany proces generowania treści B2B przy użyciu GPT-4, Claude 3 i n8n. Od researchu po publikację.",
      tags: ["n8n", "OpenAI"],
      borderColor: "cyan-500",
      accentColor: ""
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: "Lead Scoring v2.0",
      description: "System analizujący przychodzące zapytania w czasie rzeczywistym, wzbogacający dane o firmie i oceniający potencjał sprzedażowy.",
      tags: ["Airtable", "Clearbit"],
      borderColor: "green-500",
      accentColor: "!border-green-500"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 7 4 4 20 4 20 7" />
          <line x1="9" y1="20" x2="15" y2="20" />
          <line x1="12" y1="4" x2="12" y2="20" />
        </svg>
      ),
      title: "CRM Auto-Sync",
      description: "Dwukierunkowa synchronizacja między systemami marketingowymi a CRM bez udziału człowieka. Zero duplikatów.",
      tags: ["HubSpot", "Webhooki"],
      borderColor: "cyan-500",
      accentColor: ""
    }
  ];

  return (
    <section id="automations" className="py-24 bg-neutral-900/20 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-16">
          <div className="w-2 h-8 bg-green-500 mr-4"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            <span className="decode-text" data-value="AUTOMATYZACJE"></span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {automations.map((auto, idx) => (
            <AutomationCard key={idx} {...auto} />
          ))}
        </div>
      </div>
    </section>
  );
};
