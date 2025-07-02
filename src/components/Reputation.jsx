import { motion } from 'framer-motion';

export default function Reputation() {
  return (
    <section
      id="modules"
      className="py-24 px-6 lg:px-12 max-w-7xl mx-auto text-white relative z-10"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Reputation That Matters
        </h2>
        <p className="mt-4 text-white/80 max-w-xl mx-auto">
          Your on-chain actions build your rep. Pay back loans, use the protocol responsibly,
          and unlock bigger limits with trustless scoring — all verified on Aptos.
        </p>
      </div>

      {/* Glassy Highlight Block */}
      <motion.div
        className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-10 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-10 hover:drop-shadow-glow transition-all"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Left - Visual Graphic */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
          <h3 className="text-3xl font-semibold mb-4 text-accent">
            On-Chain Scoring
          </h3>
          <ul className="space-y-3 text-white/80 list-disc list-inside">
            <li>Build credit by borrowing & repaying</li>
            <li>Score updated based on repayment history</li>
            <li>Dynamic trust system for DeFi access</li>
          </ul>
        </div>

        {/* Right - Animated Circle Chart */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="relative w-48 h-48 rounded-full border-8 border-accent animate-pulse bg-white/10 shadow-inner shadow-cyan-500/10 flex items-center justify-center">
            <span className="text-3xl font-bold text-accent">92</span>
            <span className="absolute bottom-4 text-xs text-white/60">Reputation Score</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
