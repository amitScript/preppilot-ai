
import { Link, useNavigate } from "react-router-dom";

function NavButton() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <div className="flex items-center gap-4">

      {token ? (
        <>
          <span className="hidden text-white md:block">
            👋 {user?.name}
          </span>

          <button
            onClick={handleLogout}
            className="rounded-lg bg-red-500 px-5 py-2 font-semibold text-white transition hover:bg-red-400"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login">
            <button className="hidden text-slate-300 transition hover:text-white md:block">
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button className="rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-white transition hover:bg-cyan-400">
              Get Started
            </button>
          </Link>
        </>
      )}

    </div>
  );
}

export default NavButton;