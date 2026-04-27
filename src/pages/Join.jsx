import Footer from "../components/Footer"
import picture from "../assets/prayingteens.jpg"
import PagesHero from "../components/PagesHero"
import { FaWhatsapp, FaCheckCircle, FaUserCheck, FaHandsHelping } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Join(){

    return(
        <div>
            <PagesHero 
                title={"JOIN YRGN"}
                subtitle={"Be a Part of a Vibriant Community Today"}
                backgroundImage={picture}/>

            <div className="bg-white px-6 py-16 space-y-20">

                {/* ================= ACTION SECTION ================= */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center "
                >
                    <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[#0a1d3a] mb-4">
                    Take Your First Step
                    </h2>

                    <p className="text-gray-600 font-inter mb-8 max-w-2xl mx-auto">
                    Join our global community of young believers and begin your journey
                    of prayer, growth, and revival.
                    </p>

                    <a
                    href="https://wa.me/YOUR_NUMBER"
                    target="_blank"
                    className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
                    >
                    <FaWhatsapp />
                    Join WhatsApp Community
                    </a>
                </motion.section>

                {/* ================= WHAT YOU GET ================= */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl md:text-3xl font-poppins font-bold text-[#0a1d3a] text-center mb-10">
                    What You Get
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

                    {[
                        "Daily online prayer sessions",
                        "Word-based fellowship & teachings",
                        "Spiritual mentorship & guidance",
                    ].map((item, i) => (
                        <div
                        key={i}
                        className="bg-slate-50 p-6 rounded-2xl text-center shadow-sm"
                        >
                        <FaCheckCircle className="text-[#f4c430] text-2xl mx-auto mb-3" />
                        <p className="font-inter text-gray-700">{item}</p>
                        </div>
                    ))}

                    </div>
                </motion.section>

                {/* ================= HOW IT WORKS ================= */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl md:text-3xl font-poppins font-bold text-[#0a1d3a] text-center mb-10">
                    How It Works
                    </h2>

                    <div className="max-w-3xl mx-auto space-y-6">

                    {[
                        "Click the WhatsApp join button",
                        "Get added to the YRGN community group",
                        "Start participating in daily prayers & fellowship",
                    ].map((step, i) => (
                        <div
                        key={i}
                        className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl"
                        >
                        <FaUserCheck className="text-[#0a1d3a] mt-1" />
                        <p className="font-inter text-gray-700">{step}</p>
                        </div>
                    ))}

                    </div>
                </motion.section>

                {/* ================= WHAT IS EXPECTED ================= */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-2xl md:text-3xl font-poppins font-bold text-[#0a1d3a] mb-6">
                    What Is Expected
                    </h2>

                    <div className="bg-slate-50 p-8 rounded-2xl shadow-sm">
                    <FaHandsHelping className="text-[#0a1d3a] text-4xl mx-auto mb-4" />

                    <p className="text-gray-700 font-inter leading-relaxed">
                        A heart ready for growth, consistency in fellowship, and a desire
                        to pursue God wholeheartedly. We are building a generation that
                        is disciplined, prayerful, and committed to Christ.
                    </p>
                    </div>
                </motion.section>

                </div>

            <Footer />
        </div>
    )
    
}