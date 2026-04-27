import { motion } from 'framer-motion';

export default function PagesHero({
    title,
    subtitle,
    backgroundImage,
    }) {
    return (
        <section
        className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        >
        <div className="absolute inset-0 bg-gradient-to-r from-[#081528]/90 via-[#0a1d3a]/75 to-[#0a1d3a]/85" />

        <div className="absolute inset-0 bg-black/20" />

        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
            <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            {title}
            </h1>

            {subtitle && (
            <p className="font-inter text-md sm:text-lg md:text-xl text-[#f4c430] leading-relaxed max-w-3xl mx-auto">
                {subtitle}
            </p>
            )}
        </motion.div>
        </section>
    );
}
