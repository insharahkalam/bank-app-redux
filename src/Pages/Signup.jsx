import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Shield, UserPlus } from "lucide-react";
import bankHero from "../assets/image.png";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex min-h-screen bg-[#0f172a]">

      {/* Left Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img
          src={bankHero}
          alt="bank"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/60 to-transparent"></div>

        <div className="relative z-10 flex flex-col justify-end p-12 pb-16 text-white">
          <Shield className="w-10 h-10 text-yellow-400 mb-4" />

          <h2 className="text-3xl font-serif font-bold mb-2">
            Vault Banking
          </h2>

          <p className="text-yellow-300 font-serif text-lg max-w-md">
            Start your journey to financial freedom today.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-8">

        <div className="w-full max-w-md space-y-8">

          <div>
            <h1 className="text-3xl font-serif font-bold text-white">
          Create an account
            </h1>

            <p className="text-gray-400 font-serif mt-2">
              Join thousands of satisfied customers
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-white font-serif font-medium">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full h-12  mt-1 px-3 bg-[#1e293b] border border-gray-700 rounded-md text-white outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-white font-serif font-medium pb-2">
                Email address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full  mt-1  h-12 px-3 bg-[#1e293b] border border-gray-700 rounded-md text-white outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-white font-serif font-medium pb-2">
                Password
                </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full  mt-1  h-12 px-3 pr-10 bg-[#1e293b] border border-gray-700 rounded-md text-white outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full h-12 font-serif bg-yellow-500 text-black font-semibold rounded-md flex items-center justify-center gap-2 hover:bg-yellow-400 transition"
            >
              <UserPlus size={18} />
              Create Account
            </button>

          </form>

          <p className="text-center text-gray-400 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-yellow-400 font-medium hover:underline"
            >
              Sign in
            </Link>
          </p>

          <div className="flex justify-center items-center gap-2 text-xs text-gray-500 pt-4">
            <Shield size={14} />
            <span>256-bit SSL encrypted • FDIC insured</span>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Signup;
