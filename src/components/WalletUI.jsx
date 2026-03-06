import { useState } from "react";

export default function WalletDashboard() {
    const [balance, setBalance] = useState(5000);
    const [amount, setAmount] = useState("");
    const [history, setHistory] = useState([]);

    const deposit = () => {
        if (!amount) return;
        const value = Number(amount);
        setBalance(balance + value);
        setHistory([{ type: "Deposit", amount: value }, ...history]);
        setAmount("");
    };

    const withdraw = () => {
        if (!amount) return;
        const value = Number(amount);
        setBalance(balance - value);
        setHistory([{ type: "Withdraw", amount: value }, ...history]);
        setAmount("");
    };

    const reset = () => {
        setBalance(5000);
        setHistory([]);
    };

    return (
        <div className="min-h-screen bg-[#0b1f3a] text-white p-10">

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

                {/* Balance Card */}
                <div className="md:col-span-2 bg-gradient-to-r from-[#0f2b4f] to-[#173b6e] rounded-2xl p-8 shadow-lg border border-yellow-500/20">
                    <p className="text-yellow-400 tracking-widest text-sm">
                        CURRENT BALANCE
                    </p>

                    <h1 className="text-5xl font-bold mt-4">
                        ${balance.toFixed(2)}
                    </h1>

                    <p className="text-green-400 mt-4">↑ Available</p>
                </div>

                {/* History */}
                <div className="bg-[#102846] rounded-2xl p-6 border border-yellow-500/10">
                    <h2 className="text-lg font-semibold mb-4 text-yellow-400">
                        Transaction History
                    </h2>

                    {history.length === 0 ? (
                        <p className="text-gray-400 text-sm">
                            No transactions yet
                        </p>
                    ) : (
                        <div className="space-y-3">
                            {history.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex justify-between text-sm border-b border-white/10 pb-2"
                                >
                                    <span>{item.type}</span>
                                    <span
                                        className={
                                            item.type === "Deposit"
                                                ? "text-green-400"
                                                : "text-red-400"
                                        }
                                    >
                                        ${item.amount}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* New Transaction */}
                <div className="md:col-span-2 bg-[#102846] rounded-2xl p-6 border border-yellow-500/10">
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
                            onClick={deposit}
                            className="flex-1 bg-green-500 hover:bg-green-600 transition py-3 rounded-lg font-medium"
                        >
                            Deposit
                        </button>

                        <button
                            onClick={withdraw}
                            className="flex-1 bg-red-500 hover:bg-red-600 transition py-3 rounded-lg font-medium"
                        >
                            Withdraw
                        </button>

                    </div>
                </div>

                {/* Reset */}
                <div className="md:col-span-2 text-center">

                    <button
                        onClick={reset}
                        className="text-yellow-400 hover:text-yellow-300 transition"
                    >
                        Reset Balance & History
                    </button>

                </div>

            </div>
        </div>
    );
}