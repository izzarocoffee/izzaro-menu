export default function Home() {
  return (
    <main className="min-h-screen bg-[#062d24] text-[#f5f0df]">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="mb-8 h-px w-24 bg-[#d4af37]" />

        <p className="mb-3 text-sm tracking-[0.45em] text-[#d4af37]">
          COFFEE • BAR • SHISHA
        </p>

        <h1 className="text-6xl font-light tracking-[0.18em] text-[#d4af37] sm:text-8xl">
          İZZARO
        </h1>

        <p className="mt-6 max-w-md text-sm leading-7 text-[#e8e2d0]/80">
          Zarif anların, seçkin lezzetlerin ve özel atmosferin buluşma noktası.
        </p>

        <a
          href="/menu"
          className="mt-10 inline-block border border-[#d4af37] bg-[#d4af37] px-10 py-4 text-sm font-medium tracking-[0.2em] text-[#062d24] transition duration-300 hover:bg-transparent hover:text-[#d4af37]"
        >
          MENÜYÜ KEŞFET
        </a>

        <div className="mt-12 h-px w-24 bg-[#d4af37]" />
      </section>
    </main>
  );
}