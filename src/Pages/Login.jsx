import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Shield, Lock } from "lucide-react";
import bankHero from "../assets/image.png";
import { client } from "../config/supabase";
import Swal from "sweetalert2";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { data, error } = await client.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (error) {

            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: error.message,
                background: "#0f172a",
                color: "#fff",
                confirmButtonColor: "#eab308"
            });

        } else {

            Swal.fire({
                icon: "success",
                title: "Login Successful",
                text: "Welcome back to BankState",
                background: "#0f172a",
                color: "#fff",
                confirmButtonColor: "#eab308",
                  customClass: {
                    popup: "rounded-popup"
                }
            });

            navigate("/dashboard");
        }
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
                        Secure, reliable, and trusted by millions worldwide.
                    </p>
                </div>
            </div>

            {/* Right Side Form */}
            <div className="flex w-full lg:w-1/2 items-center justify-center p-8">

                <div className="w-full max-w-md space-y-8">



                    <div>
                        <h1 className="text-4xl font-serif font-bold text-white">
                            Welcome back
                        </h1>

                        <p className="text-gray-400 font-serif mt-2">
                            Sign in to access your accounts
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-white  font-serif font-medium">
                                Email address
                            </label>

                            <input
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full mt-1 h-12 px-3 bg-[#1e293b] border border-gray-700 rounded-md text-white outline-none focus:ring-2 focus:ring-yellow-400"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="space-y-2">

                            <div className="flex justify-between">
                                <label className="text-white font-medium font-serif ">
                                    Password
                                </label>

                                <button
                                    type="button"
                                    className="text-sm text-yellow-400 hover:underline"
                                >
                                    Forgot password?
                                </button>
                            </div>

                            <div className="relative">

                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full h-12 px-3 pr-10 bg-[#1e293b] border border-gray-700 rounded-md text-white outline-none focus:ring-2 focus:ring-yellow-400"
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
                            <Lock size={18} />
                            Sign In Securely
                        </button>

                    </form>

                    <p className="text-center text-gray-400 text-sm">
                        Don't have an account?{" "}
                        <Link
                            to="/signup"
                            className="text-yellow-400 font-medium hover:underline"
                        >
                            Open an account
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

export default Login;
