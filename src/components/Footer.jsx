export default function Footer() {
    return (
        <footer className="bg-[#0e2545] text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Logo Section */}
                <div>
                    <h2 className="text-2xl font-serif font-bold text-white">
                        Bank<span className="text-yellow-400">State</span>
                    </h2>

                    <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                        Building financial futures since 1987. FDIC insured.
                    </p>
                </div>

                {/* Products */}
                <div>
                    <h3 className="text-white font-serif font-semibold mb-4 tracking-wider">
                        PRODUCTS
                    </h3>

                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Checking</li>
                        <li className="hover:text-white cursor-pointer">Savings</li>
                        <li className="hover:text-white cursor-pointer">Credit Cards</li>
                        <li className="hover:text-white cursor-pointer">Loans</li>
                        <li className="hover:text-white cursor-pointer">Mortgages</li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h3 className="text-white font-serif font-semibold mb-4 tracking-wider">
                        COMPANY
                    </h3>

                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">About Us</li>
                        <li className="hover:text-white cursor-pointer">Careers</li>
                        <li className="hover:text-white cursor-pointer">Press</li>
                        <li className="hover:text-white cursor-pointer">Investor Relations</li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-white font-serif font-semibold mb-4 tracking-wider">
                        SUPPORT
                    </h3>

                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Help Center</li>
                        <li className="hover:text-white cursor-pointer">Contact Us</li>
                        <li className="hover:text-white cursor-pointer">Security</li>
                        <li className="hover:text-white cursor-pointer">Accessibility</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="border-t border-gray-700 text-center py-6 text-sm text-gray-400">
                © 2026 BankState. All rights reserved. Member FDIC. Equal Housing Lender.
            </div>
        </footer>
    );
}