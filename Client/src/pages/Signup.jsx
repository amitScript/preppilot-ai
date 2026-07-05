import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  User,
  AtSign,
  Mail,
  Lock,
} from "lucide-react";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      );

      alert(response.data.message);

      navigate("/login");

    }
     catch (error) {
  console.log(error);
  console.log(error.response);
  console.log(error.response?.data);

  alert(error.response?.data?.message || error.message);
    
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-12">

      <div className="w-full max-w-lg rounded-3xl border border-slate-800 bg-slate-900 p-10 shadow-2xl">

        <div className="text-center">

          <h1 className="text-4xl font-bold text-white">
            Create Account 🚀
          </h1>

          <p className="mt-3 text-slate-400">
            Join PrepPilot AI and start your placement journey.
          </p>

        </div>

        <form
          className="mt-10 space-y-6"
          onSubmit={handleSubmit}
        >

          {/* Full Name */}

          <div>

            <label className="mb-2 block text-sm text-slate-300">
              Full Name
            </label>

            <div className="flex items-center rounded-xl border border-slate-700 px-4">

              <User className="text-slate-400" size={20} />

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full bg-transparent p-4 text-white outline-none"
                required
              />

            </div>

          </div>

          {/* Username */}

          <div>

            <label className="mb-2 block text-sm text-slate-300">
              Username
            </label>

            <div className="flex items-center rounded-xl border border-slate-700 px-4">

              <AtSign className="text-slate-400" size={20} />

              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Choose a username"
                className="w-full bg-transparent p-4 text-white outline-none"
              />

            </div>

          </div>

          {/* Email */}

          <div>

            <label className="mb-2 block text-sm text-slate-300">
              Email
            </label>

            <div className="flex items-center rounded-xl border border-slate-700 px-4">

              <Mail className="text-slate-400" size={20} />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full bg-transparent p-4 text-white outline-none"
                required
              />

            </div>

          </div>

          {/* Password */}

          <div>

            <label className="mb-2 block text-sm text-slate-300">
              Password
            </label>

            <div className="flex items-center rounded-xl border border-slate-700 px-4">

              <Lock className="text-slate-400" size={20} />

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create password"
                className="w-full bg-transparent p-4 text-white outline-none"
                required
              />

            </div>

          </div>

          {/* Confirm Password */}

          <div>

            <label className="mb-2 block text-sm text-slate-300">
              Confirm Password
            </label>

            <div className="flex items-center rounded-xl border border-slate-700 px-4">

              <Lock className="text-slate-400" size={20} />

              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="w-full bg-transparent p-4 text-white outline-none"
                required
              />

            </div>

          </div>

          {/* Button */}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-cyan-500 py-4 text-lg font-semibold text-white transition hover:bg-cyan-400 disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

        </form>

        <div className="mt-8 text-center text-slate-400">

          Already have an account?{" "}

          <Link
            to="/login"
            className="font-semibold text-cyan-400 hover:underline"
          >
            Login
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Signup;