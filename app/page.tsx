export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-fuchsia-900 via-purple-950 to-black text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-goldSoft">Fabdive Affinity</h1>
        <p className="text-xl md:text-2xl mb-8 text-yellowGlow">
          L'app qui révèle vos affinités invisibles.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/auth" className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-6 py-3 rounded-2xl font-semibold">
            Commencer
          </a>
          <a href="#explore" className="border border-yellowGlow text-yellowGlow px-6 py-3 rounded-2xl font-semibold">
            Explorer
          </a>
        </div>
      </div>
    </main>
  );
}
