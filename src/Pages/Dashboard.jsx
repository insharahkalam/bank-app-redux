import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withdraw, deposite, reset } from "../Redux/BankSlice";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Swal from "sweetalert2";
import { client } from "../config/supabase";

const Dashboard = () => {

    const dispatch = useDispatch()
    const bank = useSelector((state) => state.bank.value)
    const allHistory = useSelector((state) => state.bank.history)
    console.log(bank);

    const [amount, setAmount] = useState();
    const [userId, setUserId] = useState(null);

    const getUser = async () => {
        const { data } = await client.auth.getUser();
        let userId = data.user.id
        return userId;

    }
    getUser()

    const handledeposite = async () => {
        if (!amount) return;
        const { error } = await client
            .from("transactions")
            .insert([{ user_id: userId, type: "Deposit", amount: Number(amount) }]);

        if (error) {
            Swal.fire({
                icon: "error",
                title: "DB Error",
                text: error.message,
                customClass: {
                    popup: "rounded-popup"
                }
            });
            return;
        }

        dispatch(deposite(Number(amount)))
        Swal.fire({
            icon: "success",
            title: "Deposited!",
            text: `$${amount} added to your balance.`,
            background: "#0b1f3a",
            color: "#fff",
            confirmButtonColor: "#facc15",
            customClass: {
                popup: "rounded-popup"
            }
        });
        setAmount("");
    };

    const handlewithdraw = async () => {
        if (!amount) return;
        if (Number(amount) > bank) {
            Swal.fire({
                icon: "error",
                title: "Insufficient Balance",
                text: "You cannot withdraw more than your current balance!",
                background: "#0b1f3a",
                color: "#fff",
                confirmButtonColor: "#f87171",
                customClass: {
                    popup: "rounded-popup"
                }
            });
            return;
        }
        const { error } = await client
            .from("transactions")
            .insert([{ user_id: userId, type: "Withdraw", amount: Number(amount) }]);

        if (error) {
            Swal.fire({ icon: "error", title: "DB Error", text: error.message });
            return;
        }

        dispatch(withdraw(Number(amount)))
        Swal.fire({
            icon: "success",
            title: "Withdrawn!",
            text: `$${amount} has been withdrawn from your balance.`,
            background: "#0b1f3a",
            color: "#fff",
            confirmButtonColor: "#f87171",
            customClass: {
                popup: "rounded-popup"
            }
        });
        setAmount("");
    };

    const resetall = async () => {
        if (!userId) return; // ensure userId loaded

        // 1️⃣ Delete from Supabase
        const { error } = await client
            .from("transactions")
            .delete()
            .eq("user_id", userId);

        if (error) {
            Swal.fire({
                icon: "error",
                title: "DB Error",
                text: error.message,
                background: "#0b1f3a",
                color: "#fff",
                confirmButtonColor: "#f87171",
                customClass: {
                    popup: "rounded-popup"
                }
            });
            return;
        }

        // 2️⃣ Reset Redux state
        dispatch(reset());

        // 3️⃣ Show success alert
        Swal.fire({
            icon: "info",
            title: "Reset Successful",
            text: "Balance and transaction history have been cleared.",
            background: "#0b1f3a",
            color: "#fff",
            confirmButtonColor: "#facc15",
            customClass: {
                popup: "rounded-popup"
            }
        });
    };


    useEffect(() => {
        const init = async () => {
            try {
                const { data: { user }, error } = await client.auth.getUser();
                if (error) throw error;
                setUserId(user.id);

                const { data, error: historyError } = await client
                    .from("transactions")
                    .select("*")
                    .eq("user_id", user.id)
                    .order("created_at", { ascending: false });

                if (historyError) throw historyError;

                data.forEach(item => {
                    if (item.type === "Deposit") dispatch(deposite(item.amount));
                    else if (item.type === "Withdraw") dispatch(withdraw(item.amount));
                });

            } catch (err) {
                console.log("Error:", err.message);
            }
        };

        init();
    }, [dispatch]);




    return (

        <>
            <Navbar />
            <div className="min-h-screen bg-[#0b1f3a] text-white pt-24 pb-10 px-4">

                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

                    {/* Balance Card */}
                    <div className="md:col-span-2  rounded-2xl p-8 shadow-sm shadow-gray-600 transition duration-500 hover:-translate-y-2">
                        <p className="text-xl font-bold font-serif mb-4 text-yellow-500">
                            CURRENT BALANCE
                        </p>

                        <h1 className="text-5xl font-bold mt-4">
                            ${bank}
                        </h1>

                        <p className="text-green-400 mt-4">↑ Available</p>
                    </div>

                    {/* History */}
                    <div className="bg-[#102846] rounded-2xl p-6 shadow-sm shadow-gray-600 transition duration-500 hover:-translate-y-2 border border-yellow-500/10">
                        <h2 className="text-xl font-bold font-serif mb-4 text-yellow-500">
                            Transaction History
                        </h2>

                        {allHistory.length === 0 ? (
                            <p className="text-gray-400 font-bold font-serif text-md">
                                No transactions yet
                            </p>
                        ) : (
                            <div className="space-y-3">
                                {allHistory.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex justify-between text-sm border-b border-white/10 pb-2"
                                    >
                                        <span className="font-bold font-serif tracking-wide">{item.type}</span>
                                        <span
                                            className={`font-bold font-serif tracking-wide
                                            ${item.type === "Deposit" ? "text-green-500"
                                                    : "text-red-500"}
                                               
                                        `}
                                        >
                                            ${item.amount}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* New Transaction */}
                    <div className="md:col-span-2 shadow-sm shadow-gray-600 transition duration-500 hover:-translate-y-2 bg-[#102846] rounded-2xl p-6 border border-yellow-500/10">
                        <h2 className="text-lg font-semibold mb-4 text-yellow-400">
                            New Transaction
                        </h2>

                        <input
                            type="number"
                            placeholder="Enter amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full bg-[#0b1f3a] border border-white/10 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:border-yellow-500"
                        />

                        <div className="flex gap-4">

                            <button
                                onClick={handledeposite}
                                className="flex-1 bg-green-500 hover:bg-green-600 transition py-3 rounded-lg font-medium"
                            >
                                Deposit
                            </button>

                            <button
                                onClick={handlewithdraw}
                                className="flex-1 bg-red-500 hover:bg-red-600 transition py-3 rounded-lg font-medium"
                            >
                                Withdraw
                            </button>

                        </div>
                    </div>

                    {/* Reset */}
                    <div className="md:col-span-2 text-center">

                        <button
                            onClick={resetall}
                            className="text-yellow-400 border px-5 py-2 rounded-lg hover:text-yellow-300 transition"
                        >
                            Reset Balance & History
                        </button>

                    </div>

                </div>
            </div>

            <Footer />


        </>



    )
}

export default Dashboard