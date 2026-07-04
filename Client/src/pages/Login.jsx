
import { Mail, Lock } from "lucide-react";

function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">

      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">

        <h1 className="text-center text-4xl font-bold text-white">
          Welcome Back 👋
        </h1>

        <p className="mt-3 text-center text-slate-400">
          Login to your PrepPilot AI account.
        </p>

        <form className="mt-8 space-y-6">

          <div>

            <label className="mb-2 block text-slate-300">
              Email
            </label>

            <div className="flex items-center rounded-xl border border-slate-700 px-4">

              <Mail className="text-slate-400" />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent p-4 text-white outline-none"
              />

            </div>

          </div>

          <div>

            <label className="mb-2 block text-slate-300">
              Password
            </label>

            <div className="flex items-center rounded-xl border border-slate-700 px-4">

              <Lock className="text-slate-400" />

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full bg-transparent p-4 text-white outline-none"
              />

            </div>

          </div>

          <button
            className="w-full rounded-xl bg-cyan-500 py-4 font-semibold text-white transition hover:bg-cyan-400"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;