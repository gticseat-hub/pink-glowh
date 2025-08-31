export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      {/* Header con imagen */}
      <header
        className="relative text-white text-center flex flex-col items-center justify-center h-[90vh] w-full"
        style={{
          backgroundImage: "url('/pinkglow-header.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-pink-600/50"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-5xl font-bold font-[Playfair_Display] drop-shadow-lg">
            Pink Glow
          </h1>
          <p className="mt-4 text-lg font-[Nunito] max-w-2xl mx-auto">
            Suero facial revitalizante que ilumina, rejuvenece y revela la luz que llevas dentro.
          </p>
          <a
            href="#beneficios"
            className="mt-6 inline-block bg-white text-pink-600 font-bold px-6 py-3 rounded-2xl shadow-lg hover:bg-pink-100 transition"
          >
            Descúbrelo Ahora
          </a>
        </div>
      </header>

      {/* Sección de Beneficios */}
      <section id="beneficios" className="py-16 px-6 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-pink-600">Beneficios</h2>
        <ul className="mt-6 space-y-4 text-gray-700 text-lg">
          <li>✨ Rejuvenecimiento Profundo</li>
          <li>🌟 Luminosidad Inmediata</li>
          <li>💧 Hidratación Duradera</li>
          <li>💪 Mejora de la Firmeza</li>
          <li>🛡️ Reparación y Protección</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="bg-pink-600 text-white text-center py-6 w-full mt-12">
        <p className="font-semibold">Pink Glow © 2025 - Todos los derechos reservados</p>
      </footer>
    </main>
  )
}
