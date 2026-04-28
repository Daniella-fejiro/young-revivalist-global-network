import PagesHero from "../components/PagesHero";
import picture from "../assets/prayingteens.jpg";
import Footer from "../components/Footer";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaYoutube, FaFacebook, FaTiktok } from "react-icons/fa";


export default function Contact() {
return (
    <div>
        <PagesHero
            title={"Get In Touch Today"}
            subtitle={"We’re here to pray with you, guide you, and connect you to the community."}
            backgroundImage={picture}
        />
<div className="min-h-screen bg-white py-16 flex justify-center">
            <div className="w-full max-w-md px-6">
                
                {/* TITLE */}
                <h1 className="text-3xl md:text-4xl font-poppins font-bold text-[#0a1d3a] text-center mb-12">
                Contact Us
                </h1>

                {/* SOCIAL LINKS */}
                <div className="space-y-6">
                <h2 className="text-xl font-poppins font-semibold text-[#0a1d3a] mb-4 text-center">
                    Connect With Us
                </h2>

                <a
                    href="https://wa.me/2348138925416?text=Hello%20I%20would%20like%20to%20connect%20with%20YRGN"
                    target="_blank"
                    className="flex items-center gap-3 border p-4 rounded-lg hover:bg-gray-50 transition"
                >
                    <FaWhatsapp className="text-green-500 text-xl" />
                    <span>WhatsApp</span>
                </a>

                <a
                    href="mailto:wealthezimadu@gmail.com"
                    className="flex items-center gap-3 border p-4 rounded-lg hover:bg-gray-50 transition"
                >
                    <FaEnvelope className="text-[#0a1d3a] text-xl" />
                    <span>Email</span>
                </a>

                <a
                    href="https://www.instagram.com/sir_wealth_ezimadu?igsh=aDJkM21mdmUzbm5w"
                    className="flex items-center gap-3 border p-4 rounded-lg hover:bg-gray-50 transition"
                >
                    <FaInstagram className="text-pink-500 text-xl" />
                    <span>Instagram</span>
                </a>

                <a
                    href="https://youtube.com/@sirwealthezimadu?si=7-Fp-roVynyRX3SH"
                    className="flex items-center gap-3 border p-4 rounded-lg hover:bg-gray-50 transition"
                >
                    <FaYoutube className="text-red-500 text-xl" />
                    <span>YouTube</span>
                </a>

                <a
                    href="https://www.facebook.com/share/1HqK5aD8f5/"
                    className="flex items-center gap-3 border p-4 rounded-lg hover:bg-gray-50 transition"
                >
                    <FaFacebook className="text-blue-600 text-xl" />
                    <span>Facebook</span>
                </a>

                <a
                    href="https://www.tiktok.com/@sirwealthezimadu?_r=1&_t=ZS-95pUgfAlBUS"
                    className="flex items-center gap-3 border p-4 rounded-lg hover:bg-gray-50 transition"
                >
                    <FaTiktok className="text-black text-xl" />
                    <span>TikTok</span>
                </a>
                </div>

            </div>
        </div>

        <Footer />
        </div>
    );
}
