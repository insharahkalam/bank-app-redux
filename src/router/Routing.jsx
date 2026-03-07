import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "../Pages/Dashboard"
import Home from "../Pages/Home"

const Routing = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing