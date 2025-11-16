export const ContactSection = () => {
  return (
    <section id="contact" className="py-32 border-t border-gray-900 bg-black/50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          GOTOWY NA <span className="text-green-500">UPGRADE</span>?
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
          Automatyzacja to nie przyszłość. To teraźniejszość, która właśnie Cię mija. Złapmy ją razem.
        </p>
        <a
          href="mailto:kontakt@szponar.ai"
          className="inline-block bg-green-500 text-black px-12 py-4 font-bold hover:bg-white hover:shadow-[0_0_20px_rgba(10,255,0,0.5)] transition-all duration-300 text-lg tracking-widest"
        >
          NAPISZ DO MNIE
        </a>

        <div className="mt-20 text-gray-600 text-xs font-mono">
          SYSTEM SZPONAR © 2025. ALL RIGHTS RESERVED.<br />
          RENDERED IN: 14ms
        </div>
      </div>
    </section>
  );
};
