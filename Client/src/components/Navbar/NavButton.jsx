
import { Link } from "react-router-dom";

function NavButton() {
  return (
    <div className="flex items-center gap-4">

      <Link to="/login">
        <button className="hidden md:block text-slate-300 hover:text-white transition">
          Login
        </button>
      </Link>

      <Link to="/signup">
        <button className="rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-white hover:bg-cyan-400 transition">
          Get Started
        </button>
      </Link>

    </div>
  );
}

export default NavButton;