import PagesHero from "../components/PagesHero";
import picture from "../assets/prayingteens.jpg"
import aboutImg from '../assets/yrgn-about.jpeg'
import Footer from "../components/Footer";
import founderImg from "../assets/founderimage.jpeg"
import { motion } from "framer-motion";
import { FaFacebookF, FaTiktok, FaTwitter, FaYoutube, FaInstagram, FaCross, FaBullseye, FaLightbulb } from "react-icons/fa";


const visionMission = {
    vision:
        'To be an effective witness of Christ and to bring revival across the nations of the earth through the power of the Holy Spirit.',
    visionScripture: 'Acts 1:4–8',

    mission:
        'Saving, raising, and building Kingdom giants in all spheres of life upon the solid rock—Jesus Christ—by guiding them into closer fellowship and a deeper relationship with God.',
    missionScripture: 'Matthew 7:24–27',

    corePurpose:
        'To help people discover their God-given purpose and pursue His divine plan for their lives.',
    corePurposeScripture: ['Romans 8:28–30', 'Jeremiah 1:5'],

    motto:
        'A City of Transformation by the Blood, by the Word, and by the Spirit.',

    declaration: 'Jesus Revealed • Jesus Glorified',
    };

    const socialLinks = [
        { icon: <FaFacebookF />, href: 'https://www.facebook.com/share/1HqK5aD8f5/', label: 'Facebook' },
        { icon: <FaInstagram />, href: 'https://www.instagram.com/sir_wealth_ezimadu?igsh=aDJkM21mdmUzbm5w', label: 'Instagram' },
        { icon: <FaYoutube />, href: 'https://youtube.com/@sirwealthezimadu?si=7-Fp-roVynyRX3SH', label: 'YouTube' },
        { icon: <FaTiktok />, href: 'https://www.tiktok.com/@sirwealthezimadu?_r=1&_t=ZS-95pUgfAlBUS', label: 'TikTok' },
    ];

    const coreValues = [
    {
        title: 'Prayer',
        description: 'Building lives anchored in consistent and fervent communion with God.',
    },
    {
        title: 'Revival',
        description: 'Igniting spiritual awakening in hearts, communities, and nations.',
    },
    {
        title: 'Discipleship',
        description: 'Raising believers who are grounded in truth and mature in faith.',
    },
    {
        title: 'Purpose',
        description: 'Helping individuals discover and fulfill God’s calling for their lives.',
    },
    {
        title: 'Transformation',
        description: 'Empowering lives to reflect Christ through the Word and the Holy Spirit.',
    },
];


export default function About(){

    return(
        <div>
            <PagesHero 
                title={"ABOUT"}
                subtitle={"Get To Know More About Us"}
                backgroundImage={picture}/>

            <section className="bg-white py-20 px-6">

                {/* TITLE */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-poppins font-bold text-[#0a1d3a] text-center mb-12"
                >
                    About YRGN
                </motion.h1>

                {/* CONTENT */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* IMAGE */}
                    <motion.img
                    src={aboutImg}
                    alt="About YRGN"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="w-full rounded-2xl shadow-lg object-cover"
                    />

                    {/* TEXT */}
                    <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="space-y-5"
                    >

                    <p className="text-gray-700 font-inter leading-relaxed text-base md:text-lg">
                        Young Revivalist Global Network (YRGN) is a Spirit-led community of young believers
                        passionate about prayer, revival, and intimacy with God. Founded on July 8, 2023,
                        and later renamed on December 24, 2023. YRGN exists to raise a generation rooted
                        in Christ and empowered by the Holy Spirit.
                    </p>

                    <p className="text-gray-700 font-inter leading-relaxed text-base md:text-lg">
                        We are committed to helping teenagers, youths, and young adults discover their
                        God-given purpose, grow in the Word, and walk boldly in their calling through
                        prayer, fellowship, discipleship, and spiritual mentorship.
                    </p>

                    <div className="pt-4 border-l-4 border-[#f4c430] pl-4">
                        <p className="font-poppins font-semibold text-[#0a1d3a]">
                        “JESUS REVEALED • JESUS GLORIFIED”
                        </p>
                    </div>

                    </motion.div>

                </div>
            </section>

            <section className="bg-white py-20 px-6">

                {/* TITLE */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-poppins font-bold text-[#0a1d3a] text-center mb-12"
                >
                    Meet The Founder
                </motion.h1>
                

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* IMAGE SIDE */}
                    <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                    >
                    <img
                        src={founderImg}
                        alt="Founder of YRGN"
                        className="w-full max-w-sm md:max-w-md rounded-2xl shadow-lg object-cover"
                    />
                    </motion.div>

                    {/* TEXT SIDE */}
                    <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="space-y-5"
                    >

                    <h2 className="text-2xl md:text-3xl font-poppins font-bold text-[#0a1d3a]">
                        Sir Wealth Ezimadu
                    </h2>

                    <p className="text-gray-700 font-inter leading-relaxed">
                        Sir Wealth Ezimadu, born on the 20th of April in Delta State, Nigeria,
                        is a discipler, mentor, revivalist, and the visionary leader of
                        Young Revivalist Global Network (YRGN), a movement rapidly spreading
                        across cities and nations.
                    </p>

                    <p className="text-gray-700 font-inter leading-relaxed">
                        Driven by a divine mandate to raise a generation of believers who
                        will become witnesses of Jesus across the earth, his ministry is
                        marked by revival fire, transformative teachings, holiness, and
                        deep intimacy with God.
                    </p>

                    <p className="text-gray-700 font-inter leading-relaxed">
                        He is the President of Sir Wealth’s Mentorship Academy, and his daily
                        podcast “Wisdom For Daily Living” continues to impact lives globally
                        with clarity, direction, and spiritual wisdom.
                    </p>

                    <p className="text-gray-700 font-inter leading-relaxed">
                        Through his leadership, many lives are being ignited, equipped, and
                        positioned to fulfill destiny and manifest Christ in every sphere of life.
                    </p>

                    <p className="text-gray-700 font-inter leading-relaxed">
                        Follow His Accouts below to Follow His Daily Podcasts "Wisdom For Daily Living".
                    </p>

                    {/* SOCIALS */}
                    <div className="flex gap-4 pt-4 text-[#0a1d3a]">

                        {socialLinks.map((social, index) => (
                            <a
                            key={index}
                            href={social.href}
                            aria-label={social.label}
                            className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-[#0a1d3a] hover:bg-[#f4c430] hover:text-[#0a1d3a] transition-all duration-300 hover:scale-110"
                            >
                            {social.icon}
                            </a>
                        ))}
                    </div>

                    </motion.div>

                </div>
            </section>

            <section className="bg-white py-20 px-6">

                {/* TITLE */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-poppins font-bold text-[#0a1d3a] text-center mb-14"
                >
                    Our Vision & Calling
                </motion.h1>

                {/* GRID */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* VISION */}
                    <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className=" rounded-2xl p-6 shadow-lg"
                    >
                    <div className="flex items-center gap-3 mb-3 text-[#0a1d3a]">
                        <FaCross className="text-xl" />
                        <h2 className="font-poppins font-semibold text-xl">
                        Vision
                        </h2>
                    </div>

                    <p className="text-gray-700 font-inter leading-relaxed mb-3">
                        {visionMission.vision}
                    </p>

                    <p className="text-md text-[#f4c430] font-semibold">
                        {visionMission.visionScripture}
                    </p>
                    </motion.div>

                    {/* MISSION */}
                    <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className=" rounded-2xl p-6 shadow-lg"
                    >
                    <div className="flex items-center gap-3 mb-3 text-[#0a1d3a]">
                        <FaCross className="text-xl" />
                        <h2 className="font-poppins font-semibold text-xl">
                        Mission
                        </h2>
                    </div>

                    <p className="text-gray-700 font-inter leading-relaxed mb-3">
                        {visionMission.mission}
                    </p>

                    <p className="text-md text-[#f4c430] font-semibold">
                        {visionMission.missionScripture}
                    </p>
                    </motion.div>

                    {/* CORE PURPOSE */}
                    <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className=" rounded-2xl p-6 shadow-lg"
                    >
                    <div className="flex items-center gap-3 mb-3 text-[#0a1d3a]">
                        <FaLightbulb className="text-xl" />
                        <h2 className="font-poppins font-semibold text-xl">
                        Core Purpose
                        </h2>
                    </div>

                    <p className="text-gray-700 font-inter leading-relaxed mb-3">
                        {visionMission.corePurpose}
                    </p>

                    <div className="text-md text-[#f4c430] font-semibold">
                        {visionMission.corePurposeScripture.map((s, i) => (
                        <p key={i}>{s}</p>
                        ))}
                    </div>
                    </motion.div>

                    {/* MOTTO + DECLARATION */}
                    <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className=" text-white rounded-2xl p-6 shadow-lg flex flex-col justify-center"
                    >
                    <div className="flex items-center gap-3 mb-4">
                        <FaBullseye className="text-[#0a1d3a]" />
                        <h2 className="font-poppins text-[#0a1d3a] font-semibold text-xl">
                        Motto
                        </h2>
                    </div>

                    <p className="font-inter text-[#0a1d3a] mb-6">
                        {visionMission.motto}
                    </p>

                    <div className="border-t border-gray-600 pt-4 font-montserrat">
                        <p className="text-[#f4c430] font-semibold ">
                        {visionMission.declaration}
                        </p>
                    </div>
                    </motion.div>

                </div>

                {/* CORE VALUES */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-16 max-w-6xl mx-auto"
                >
                    <h2 className="text-2xl md:text-3xl font-poppins font-bold text-[#0a1d3a] text-center mb-10">
                    Core Values
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                    {coreValues.map((item, index) => (
                        <div
                        key={index}
                        className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition"
                        >
                        <h3 className="font-poppins font-semibold text-[#0a1d3a] mb-2">
                            {item.title}
                        </h3>

                        <p className="font-inter text-gray-600 text-sm leading-relaxed">
                            {item.description}
                        </p>
                        </div>
                    ))}

                    </div>
                </motion.div>

                </section>

            <Footer />
        </div>
    )
    
}