function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-cyan-400">
              PrepPilot AI
            </h2>

            <p className="mt-4 text-slate-400 leading-7">
              AI-powered interview preparation platform helping students crack
              coding interviews with confidence.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">
              Product
            </h3>

            <ul className="space-y-2 text-slate-400">
              <li className="hover:text-cyan-400 cursor-pointer">Features</li>
              <li className="hover:text-cyan-400 cursor-pointer">Dashboard</li>
              <li className="hover:text-cyan-400 cursor-pointer">Roadmap</li>
              <li className="hover:text-cyan-400 cursor-pointer">AI Assistant</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-2 text-slate-400">
              <li className="hover:text-cyan-400 cursor-pointer">About</li>
              <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
              <li className="hover:text-cyan-400 cursor-pointer">Privacy</li>
              <li className="hover:text-cyan-400 cursor-pointer">Terms</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">
              Connect
            </h3>

            <div className="space-y-2 text-slate-400">
              <p className="hover:text-cyan-400 cursor-pointer">
                GitHub
              </p>

              <p className="hover:text-cyan-400 cursor-pointer">
                LinkedIn
              </p>

              <p className="hover:text-cyan-400 cursor-pointer">
                Email
              </p>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-slate-500">
          © 2026 PrepPilot AI. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;