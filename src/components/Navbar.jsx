import React from 'react'
import ReactDOM from 'react-dom'
import { motion } from 'framer-motion'
import { Link } from 'react-router'
import Logo from './Logo'

function Navbar() {
    return (
        <nav className='w-screen left-0 z-99999 bg-white fixed top-0 shadow-lg h-18 px-[50px] py-8 flex items-center justify-between'>
            <Logo />
            <div className='min-h-20 flex text-[22px] items-center font-medium  text-black gap-3 justify-evenly'>
                <Link to={'/register'}>
                    <motion.button
                        className='px-8  text-black cursor-pointer'
                        initial={{ opacity: 1 }}
                        whileHover={{ color: '#FF6767' }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        Sign Up
                    </motion.button>
                </Link>
                <Link to={'/login'}>
                    <motion.button
                        className='py-1 px-8 border rounded-xl bg-white text-(--color-primary) border-(--color-primary) cursor-pointer'
                        initial={{ opacity: 1 }}
                        whileHover={{ color: 'white', backgroundColor: '#FF6767', borderColor: 'Transparent' }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                    >
                        Login
                    </motion.button>
                </Link>
            </div>
        </nav>
    )
}
export default Navbar