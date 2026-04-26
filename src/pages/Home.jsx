import { motion } from "framer-motion"
import { FaPrayingHands, FaBookOpen, FaUsers, FaBible, FaUserFriends, FaComments, FaGlobe, FaMoon, FaUtensils } from "react-icons/fa"
import aboutImg from '../assets/yrgn-about.jpeg'
import Footer from "../components/Footer";


const whatWeStandFor =[
    {
        icon: <FaPrayingHands />,
        title: "Prayer",
        desc: "We believe in consistent prayer as the foundation of a strong spiritual life.",
        color: "bg-blue-50 text-blue-900"
    },
    {
        icon: <FaUsers />,
        title: "Community",
        desc: "We grow together as a family of believers supporting one another in faith.",
        color: "bg-amber-50 text-amber-900"
    },
    {
        icon: <FaBookOpen />,
        title: "Spiritual Growth",
        desc: "We are committed to growing deeper in the Word and intimacy with God.",
        color: "bg-rose-50 text-rose-900"
    }
];

const whatWeDo = [
    { text: "Daily Prayer Activities", icon: <FaPrayingHands /> },
    { text: "Bible Study Sessions", icon: <FaBible /> },
    { text: "Mentorship and Counselling", icon: <FaUserFriends /> },
    { text: "Faith-Building Discussions", icon: <FaComments /> },
    { text: "Community Outreach", icon: <FaGlobe /> }
];

const programs = [
    {
        title: "Global Online Prayers",
        time: "Everyday",
        icon: <FaGlobe />,
        details:
        "We meet daily for powerful online prayers featuring 5 prayer points, personal supplication (5 minutes each), a 15-minute Word charge, and a 10-minute interactive session. A consistent daily spiritual refreshment for every believer."
    },
    {
        title: "Global Word Fellowship",
        time: "Every Friday – 9:00 PM Prompt",
        icon: <FaBookOpen />,
        details:
        "A deep and interactive Word-based fellowship designed to strengthen faith, build spiritual understanding, and equip believers with biblical truth."
    },
    {
        title: "WhatsApp Chat Show",
        time: "9:00 PM Prompt",
        icon: <FaComments />,
        details:
        "An engaging online discussion space where believers share insights, testimonies, and encouragement centered on faith and daily Christian living."
    },
    {
        title: "Midnight Cry",
        time: "First Friday, Saturday & Sunday of Every Month – 12:00 AM",
        icon: <FaMoon />,
        details:
        "A powerful midnight prayer session dedicated to spiritual breakthroughs, revival, and deep encounters with God at the start of each month cycle."
    },
    {
        title: "Weekly Fast",
        time: "Every Friday",
        icon: <FaUtensils />,
        details:
        "A day set apart for fasting and consecration, focusing on spiritual renewal, clarity, and deeper intimacy with God."
    }
]
export default function Home() {
    return (
        <div className="home">

        <section className="hero min-h-[90vh] w-full flex flex-col justify-center items-center text-white px-4 ">

            <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-5xl font-extrabold text-center leading-tight"
            >
            A <span className="text-[#f4c430]">Community</span> Of Young <br />
            <span className="text-[#f4c430]">Believers</span> Growing In Prayer
            </motion.h1>

            <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-center text-sm md:text-lg w-full md:w-2/3 text-gray-200"
            >
            Join our online prayer gatherings, deepen your faith, and grow spiritually with a vibrant community of believers.
            </motion.p>

            <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
            >
            <a href="https://chat.whatsapp.com/F5voC9BfVFC0SI2HAlhjgT?mode=gi_t">
                <button className="flex items-center gap-2 bg-[#f4c430] text-black font-semibold px-6 py-3 rounded-full hover:scale-105 transition">
                    <FaPrayingHands />
                    Join Prayer Group
                </button>
            </a>
            

            <button className="flex items-center gap-2 border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
                <FaBookOpen />
                Learn More
            </button>

            </motion.div>

        </section>
        
    <section className="flex flex-col sm:flex-row justify-around items-center px-6 sm:px-12 py-12 gap-10 bg-white flex-wrap">

        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-xl"
        >
            <h1 className="text-3xl sm:text-4xl font-poppins font-bold text-[#0a1d3a] mb-4">
            Who Are We
            </h1>

            <p className="text-base sm:text-lg font-inter text-gray-700 leading-relaxed">
            We are a vibrant community of young believers passionate about prayer, spiritual growth, and intimacy with God, committed to raising a generation rooted in faith, strengthened by the Word, and empowered by the Holy Spirit. Through prayer gatherings and fellowship, we help believers grow deeper in their walk with Christ, build strong spiritual foundations, and live lives that reflect His love and purpose in their everyday lives.
            </p>

        </motion.div>

        <motion.img
            src={aboutImg}
            alt="About YRGN"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full sm:w-[25rem] rounded-2xl shadow-lg object-cover"
        />

        </section>

        <section className="px-6 py-16 text-center bg-white">

        <h1 className="text-3xl md:text-4xl font-poppins font-bold text-[#0a1d3a] mb-12">
            What We Stand For
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {whatWeStandFor.map((item, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.2
                }}
                viewport={{ once: true }}
                className={`${item.color} rounded-2xl p-6 flex flex-col items-center gap-3 shadow-sm hover:shadow-md transition`}
            >

                <div className="text-4xl">
                {item.icon}
                </div>

                <h2 className="font-poppins text-lg font-semibold">
                {item.title}
                </h2>

                <p className="font-inter text-md opacity-80 leading-relaxed">
                {item.desc}
                </p>

            </motion.div>
            ))}

        </div>

        </section>
        <section className="px-6 py-16 text-center bg-white">

            <h1 className="text-3xl md:text-4xl font-poppins font-bold text-[#0a1d3a] mb-10">
                What We Do
            </h1>

            <div className="w-[85%] sm:w-[65%] mx-auto flex flex-col sm:flex-row justify-evenly flex-wrap gap-4">

                {whatWeDo.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 bg-gray-50 hover:bg-gray-100 transition rounded-xl px-5 py-4 shadow-sm"
                >

                    <div className="text-[#0a1d3a] text-2xl">
                    {item.icon}
                    </div>

                    <p className="font-inter text-[#0a1d3a] text-[16px] font-normal text-left">
                    {item.text}
                    </p>

                </motion.div>
                ))}

            </div>
        </section>
        
        <section className="px-6 py-16 bg-white text-center">

            <h1 className="text-3xl md:text-4xl font-poppins font-bold text-[#0a1d3a] mb-12">
                Activities & Programmes
            </h1>

            <div className="max-w-4xl mx-auto flex flex-col gap-6">

                {programs.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 hover:bg-gray-100 transition rounded-2xl p-6 text-left shadow-sm"
                >

                    <div className="flex items-center gap-3 mb-2 text-[#0a1d3a]">
                    <span className="text-xl">{item.icon}</span>
                    <h2 className="font-poppins font-semibold text-xl">
                        {item.title}
                    </h2>
                    </div>

                    <p className="text-lg font-semibold text-[#f4c430] mb-3">
                    {item.time}
                    </p>

                    <p className="font-inter text-gray-700 leading-relaxed text-lg md:text-base">
                    {item.details}
                    </p>

                </motion.div>
                ))}

            </div>
        </section>

        <Footer />

        </div>
    )
}