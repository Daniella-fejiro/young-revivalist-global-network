import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import yrgnLogo from "../assets/yrgn-logo.jpeg"
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaWhatsapp,
    FaPrayingHands,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaTiktok
    } from 'react-icons/fa';

    export default function Footer() {
    const socialLinks = [
        { icon: <FaFacebookF />, href: 'https://www.facebook.com/share/1HqK5aD8f5/', label: 'Facebook' },
        { icon: <FaInstagram />, href: 'https://www.instagram.com/sir_wealth_ezimadu?igsh=aDJkM21mdmUzbm5w', label: 'Instagram' },
        { icon: <FaYoutube />, href: 'https://youtube.com/@sirwealthezimadu?si=7-Fp-roVynyRX3SH', label: 'YouTube' },
        { icon: <FaTiktok />, href: 'https://www.tiktok.com/@sirwealthezimadu?_r=1&_t=ZS-95pUgfAlBUS', label: 'TikTok' },
    ];

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Join Us', path: '/join' },
        { name: 'Contact', path: '/contact' },
];

    return (
        <footer className="bg-[#0a1d3a] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1d3a] via-[#102a52] to-[#07152b] opacity-100" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="flex items-center gap-3 mb-5">
                <img src={yrgnLogo} alt="YRGN LOGO" className='w-8 h-8 rounded-full' />
                <h2 className="font-poppins text-xl font-bold">YOUNG REVIVALIST GLOBAL NETWORK</h2>
                </div>
                <p className="text-[14px] font-inter text-gray-300 leading-relaxed mb-6">
                JESUS REVEALED <span className="text-xl">●</span> JESUS GLORIFIED
                </p>

                <p className="font-inter text-gray-300 leading-relaxed mb-6">
                Raising a generation of believers rooted in prayer, grounded in the Word,
                and empowered by the Holy Spirit to impact lives and transform nations.
                </p>
                

                <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                    <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-[#f4c430] hover:bg-[#f4c430] hover:text-[#0a1d3a] transition-all duration-300 hover:scale-110"
                    >
                    {social.icon}
                    </a>
                ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                >
                <h3 className="font-poppins text-xl font-semibold mb-6 text-[#f4c430]">
                    Quick Links
                </h3>

                <div className="flex flex-col space-y-3">
                    {quickLinks.map((link) => (
                    <NavLink
                        key={link.name}
                        to={link.path}
                        className="font-inter text-gray-300 hover:text-[#f4c430] transition-colors duration-300"
                    >
                        {link.name}
                    </NavLink>
                    ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <h3 className="font-poppins text-xl font-semibold mb-6 text-[#f4c430]">
                Our Gatherings
                </h3>
                <ul className="space-y-4 font-inter text-gray-300">
                <li>Daily Online Prayers</li>
                <li>Global Word Fellowship</li>
                <li>Midnight Cry</li>
                <li>Weekly Fasting</li>
                </ul>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
            >
                <h3 className="font-poppins text-xl font-semibold mb-6 text-[#f4c430]">
                Contact Us
                </h3>

                <div className="space-y-5 font-inter text-gray-300">
                <div className="flex items-start gap-3">
                    <FaEnvelope className="text-[#f4c430] mt-1" />
                    <span>wealthezimadu@gmail.com</span>
                </div>

                <div className="flex items-start gap-3">
                    <FaPhone className="text-[#f4c430] mt-1" />
                    <span>+234 813 892 5416</span>
                </div>

                <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-[#f4c430] mt-1" />
                    <span>Connecting believers globally through prayer and fellowship.</span>
                </div>
                </div>
            </motion.div>
            </div>

            <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="font-inter text-sm text-gray-400">
                © {new Date().getFullYear()} Young Revivalists Global Network. All rights reserved.
            </p>
            <p className="font-inter text-sm text-[#f4c430] mt-2">
                Built for prayer, fellowship, and spiritual transformation.
            </p>
            </div>
        </div>
        </footer>
    );
}
