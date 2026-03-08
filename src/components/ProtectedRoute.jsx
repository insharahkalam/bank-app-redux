import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { client } from "../config/supabase";
import Swal from "sweetalert2";
import { div } from "framer-motion/client";

const ProtectedRoute = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const checkUser = async () => {
            const { data } = await client.auth.getUser();

            setUser(data.user);
            setLoading(false);
        };

        checkUser();

    }, []);

    if (loading) return <div className="w-full h-screen flex justify-center items-center"> <p className="loader"></p></div>;

    if (!user) {

        Swal.fire({
            icon: "warning",
            title: "Unauthorized Access",
            text: "Please login to access your banking dashboard",
            background: "#0f172a",
            color: "#fff",
            confirmButtonColor: "#eab308",
            confirmButtonText: "Go to Login",

            customClass: {
                popup: "rounded-popup"
            }
        });
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
