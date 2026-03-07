import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withdraw, deposite, reset } from "../Redux/BankSlice";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Dashboard = () => {

    const dispatch = useDispatch()
    const bank = useSelector((state) => state.bank.value)
    const allHistory = useSelector((state) => state.bank.history)
    console.log(bank);

    const [amount, setAmount] = useState();

    const handledeposite = () => {
        dispatch(deposite(Number(amount)))
        setAmount("");
    };

    const handlewithdraw = () => {
        dispatch(withdraw(Number(amount)))
        setAmount("");
    };

    const resetall = () => {
        dispatch(reset(bank))
    };

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