import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "../Pages/Dashboard"
import Home from "../Pages/Home"
import Signup from "../Pages/Signup"
import Login from "../Pages/Login"
import Error from "../Pages/Error"

const Routing = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Error/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing