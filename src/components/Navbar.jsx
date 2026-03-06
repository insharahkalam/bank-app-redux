import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const links = ["Personal", "Business", "Wealth", "About"];

    return (
        <nav className="fixed top-0 left-0 right-0  bg-[#0F1F3D] z-50 backdrop-blur-lg shadow-sm">
            <div className="container mx-auto flex items-center justify-between h-16 px-4">

                {/* Logo */}
                <a
                    href="/"
                    className="font-serif text-2xl font-bold text-white tracking-tight"
                >
                    Bank<span className="text-yellow-500">State</span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((l) => (
                        <a
                            key={l}
                            href="#"
                            className="text-sm font-bold font-serif tracking-wide text-yellow-500 transition-colors"
                        >
                            {l}
                        </a>
                    ))}
                </div>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center gap-5">
                    <button className="text-gray-200 text-sm font-serif hover:text-yellow-500">
                        Sign In
                    </button>
                    <button className="px-4 py-2 rounded-md bg-yellow-500 text-sm text-white font-semibold font-serif hover:scale-103 transition cursor-pointer">
                        Open Account
                    </button>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-[#0F1F3D] border-t border-blue-800/30 px-4 pb-4">
                    {links.map((l) => (
                        <a
                            key={l}
                            href="#"
                            className="block py-3 text-white hover:text-yellow-500 transition-colors"
                        >
                            {l}
                        </a>
                    ))}

                    <button className="w-full mt-2 px-4 py-2 rounded-md bg-yellow-400 text-white font-semibold hover:bg-green-500 transition">
                        Open Account
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
