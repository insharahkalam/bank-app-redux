// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { clear, deposite, withdraw } from './Redux/BankSlice'

// const App = () => {
//   const dispatch = useDispatch()
//   const bank = useSelector(state => (state.bank.value))
//   console.log(bank);
//   const [widraw, setWidraw] = useState()
//   const [deposit, setDeposit] = useState()

//   function hanlde() {
//     dispatch(withdraw(Number(widraw)))
//     setWidraw("")
//   }

//   function hanlde2() {
//     dispatch(deposite(Number(deposit)))
//     setDeposit("")
//   }

//   return (
//     <>




//       <h1>Total Amount:{bank}</h1>
//       <div className='flex justify-center items-center gap-5 my-2'>
//         <input value={widraw} onChange={(e) => setWidraw(e.target.value)} className='px-1 py-2 w-64 rounded-md border' type="number" placeholder='enter amount to withdraw' />
//         <button onClick={hanlde} className='px-3 py-2 border rounded-lg'>withdraw</button>
//       </div>

//       <div className='flex justify-center items-center gap-5 my-2'>
//         <input value={deposit} onChange={(e) => setDeposit(e.target.value)} className='px-1 py-2 w-64 rounded-md border' type="number" placeholder='enter amount to deposite' />
//         <button onClick={hanlde2} className='px-3 py-2 border rounded-lg'>deposite</button>
//       </div>

//       <button className='px-3 py-2 border rounded-lg' onClick={() => dispatch(clear(bank))}>REset Amount</button>


//     </>
//   )
// }

// export default App

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import StatsSection from "./components/StatsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import WalletUI from "./components/WalletUI";

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <CTASection />
      <Footer />
      <WalletUI />
    </div>
  );
};

export default App;
