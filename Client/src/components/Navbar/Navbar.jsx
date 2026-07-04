
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400 cursor-pointer">
          PrepPilot AI
        </h1>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-slate-300">
          <li className="hover:text-cyan-400 cursor-pointer transition">Features</li>
          <li className="hover:text-cyan-400 cursor-pointer transition">Roadmap</li>
          <li className="hover:text-cyan-400 cursor-pointer transition">Resources</li>
          <li className="hover:text-cyan-400 cursor-pointer transition">About</li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block text-slate-300 hover:text-white transition">
            Login
          </button>

          <button className="rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-white hover:bg-cyan-400 transition">
            Get Started
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;