import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Mail, Lock } from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      // Save Token
      localStorage.setItem("token", response.data.token);

      // Save User
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      


      navigate("/dashboard");

    } catch (error) {
      alert(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">

        <h1 className="text-center text-4xl font-bold text-white">
          Welcome Back 👋
        </h1>

        <p className="mt-3 text-center text-slate-400">
          Login to your PrepPilot AI account.
        </p>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>

          <div>
            <label className="mb-2 block text-slate-300">
              Email
            </label>

            <div className="flex items-center rounded-xl border border-slate-700 px-4">
              <Mail className="text-slate-400" />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent p-4 text-white outline-none"
                required
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
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-transparent p-4 text-white outline-none"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-cyan-500 py-4 font-semibold text-white transition hover:bg-cyan-400 disabled:opacity-50"
          >
            {loading ? "Logging In..." : "Login"}
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;