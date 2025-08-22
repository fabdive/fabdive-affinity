// app/page.tsx
import './globals.css';
export default function SignupStep1() {
  return (
   <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/1-inscription.png')" }}
    >
      <div className="bg-[#14018d]/90 p-8 rounded-2xl shadow-lg max-w-md w-full font-now">
        <h1 className="text-3xl font-bold text-[#fff0b8] mb-6 text-center">
          Crée ton profil
        </h1>

        <form>
          <div className="mb-4">
            <label className="block text-[#fff0b8] mb-1">Pseudo</label>
            <input
              type="text"
              placeholder="Entre ton pseudo"
              className="w-full p-3 rounded-xl bg-white/10 text-[#fff0b8] placeholder-[#fff0b8]/50 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#fff0b8] mb-1">Email</label>
            <input
              type="email"
              placeholder="ton@email.com"
              className="w-full p-3 rounded-xl bg-white/10 text-[#fff0b8] placeholder-[#fff0b8]/50 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 py-3 rounded-xl bg-[#e7b95d] text-[#14018d] font-semibold hover:bg-[#d9a84f]"
          >
            Continuer
          </button>
        </form>
      </div>
    </div>
  );
}
