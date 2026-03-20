import { motion, type Variants } from "framer-motion";
import { ShieldCheck, Newspaper, Zap, ScanSearch } from "lucide-react";

/* Floating animated orb used to give a glowing depth effect */
function GlowOrb({ className }: { className: string }) {
  return (
    <div
      className={`absolute rounded-full blur-[120px] opacity-40 pointer-events-none ${className}`}
    />
  );
}

export function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stats = [
    { icon: <ShieldCheck size={20} />, label: "Accuracy Rate", value: "94%" },
    { icon: <Newspaper size={20} />, label: "Articles Scanned", value: "2M+" },
    { icon: <Zap size={20} />, label: "Avg. Analysis Time", value: "<2s" },
    { icon: <ScanSearch size={20} />, label: "Sources Indexed", value: "500+" },
  ];

  return (
    <div className="relative w-full overflow-hidden">

      {/* ── Animated glow orbs ── */}
      <GlowOrb className="w-[600px] h-[600px] bg-blue-600 -top-40 -left-40" />
      <GlowOrb className="w-[500px] h-[500px] bg-indigo-500 -top-20 -right-32" />
      <GlowOrb className="w-[400px] h-[400px] bg-sky-500 top-80 left-1/2 -translate-x-1/2" />

      {/* ── Dot grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Main hero content ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center px-4 pt-24 pb-16 text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
            </span>
            Powered by Gemini AI — Fact-Check Anything
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="mb-3 max-w-4xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl"
        >
          <span className="text-white">Detect Fake </span>
          <span className="relative inline-block">
            <span
              className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent"
            >
              News
            </span>
            {/* Animated underline */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
              className="absolute -bottom-1 left-0 h-1 w-full origin-left rounded-full bg-gradient-to-r from-blue-500 to-sky-400"
            />
          </span>
          <span className="text-white"> Instantly.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={itemVariants}
          className="mb-10 max-w-2xl text-lg font-light text-white/60 leading-relaxed"
        >
          Paste any news article, headline, or claim — our AI powered by{" "}
          <span className="font-semibold text-blue-400">Gemini</span> analyses
          credibility, extracts key facts, and surfaces verified sources in
          seconds.
        </motion.p>

        {/* CTA area */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#analyze"
            className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(59,130,246,0.4)] transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_36px_rgba(59,130,246,0.6)]"
          >
            <ScanSearch size={18} className="transition-transform duration-300 group-hover:scale-110" />
            Start Checking
          </a>
          <a
            href="https://aistudio.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:text-white"
          >
            Learn More
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          variants={itemVariants}
          className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/10 bg-white/10"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-1.5 bg-white/5 backdrop-blur-md px-6 py-5 transition-colors duration-300 hover:bg-white/10"
            >
              <span className="text-blue-400">{stat.icon}</span>
              <span className="text-2xl font-extrabold text-white">{stat.value}</span>
              <span className="text-xs font-medium text-white/50 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Bottom fade-to-background transition ── */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
