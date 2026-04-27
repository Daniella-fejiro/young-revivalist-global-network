import { useState } from "react"
import { NavLink } from "react-router-dom"
import { FiMenu, FiX } from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"
import yrgnLogo from "../assets/yrgn-logo.jpeg"

export default function Header() {
    const [open, setOpen] = useState(false)

    const linkClass = ({ isActive }) =>
        isActive
        ? "border-b-2 border-white pb-1 transition duration-300 font-montserrat"
        : "hover:scale-105 font-montserrat"

    return (
        <header className="flex justify-between items-center px-6 py-4 bg-[#0a1d3a] text-white relative shadow-md shadow-gray-500 font-poppins fixed t0p-0 right-0 z-[60]">

        <div className="flex flex-col items-center">
            <img src={yrgnLogo} alt="logo" className="w-12 h-12 rounded-full"/>
            <p className="text-[10px] sm:text-[16px] text-center">
            JESUS REVEALED <span className="text-[8px] md:text-[18px]">●</span> JESUS GLORIFIED
            </p>
        </div>

        <nav className="hidden md:flex gap-6">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/join" className={linkClass}>Join</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </nav>

        {/* HAMBURGER */}
        <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
        >
            {open ? <FiX /> : <FiMenu />}
        </button>

        <AnimatePresence>
            {open && (
            <>

                <div
                className="fixed inset-0 bg-black/40"
                onClick={() => setOpen(false)}
                />

                <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 w-64 h-full bg-[#0a1d3a] p-6 flex flex-col gap-6"
                >
                <NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>Home</NavLink>
                <NavLink onClick={() => setOpen(false)} to="/about" className={linkClass}>About</NavLink>
                <NavLink onClick={() => setOpen(false)} to="/gallery" className={linkClass}>Gallery</NavLink>
                <NavLink onClick={() => setOpen(false)} to="/join" className={linkClass}>Join</NavLink>
                <NavLink onClick={() => setOpen(false)} to="/contact" className={linkClass}>Contact</NavLink>
                </motion.div>
            </>
            )}
        </AnimatePresence>

        </header>
    )
}