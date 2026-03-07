import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
        console.error(
            "404 Error: User attempted to access non-existent route:",
            location.pathname
        );
    }, [location.pathname]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#0f172a]">

            <div className="text-center border border-gray-800 shadow-md transition duration-500 hover:scale-105 shadow-gray-500 rounded-3xl p-10 space-y-5">

                <h1 className="text-7xl font-extrabold text-yellow-400">
                    404
                </h1>

                <p className="text-4xl font-bold font-serif text-gray-300">
                    Oops! Page not found
                </p>

                <Link to={'/home'}>
                    <button
                        className="text-yellow-400  border transition duration-500 hover:scale-105  px-8 py-2.5 rounded-lg  font-medium"
                    >
                        Return to Home
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default NotFound;
