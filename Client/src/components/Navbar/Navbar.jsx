
import NavButton from "./NavButton";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="cursor-pointer text-2xl font-bold text-cyan-400">
          PrepPilot AI
        </h1>

        {/* Nav Links */}
        <ul className="hidden items-center gap-8 text-slate-300 md:flex">
          <li className="cursor-pointer transition hover:text-cyan-400">
            Features
          </li>

          <li className="cursor-pointer transition hover:text-cyan-400">
            Roadmap
          </li>

          <li className="cursor-pointer transition hover:text-cyan-400">
            Resources
          </li>

          <li className="cursor-pointer transition hover:text-cyan-400">
            About
          </li>
        </ul>

        {/* Login & Get Started */}
        <NavButton />

      </div>
    </nav>
  );
}

export default Navbar;