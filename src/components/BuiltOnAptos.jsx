import { motion } from 'framer-motion';

export default function BuiltOnAptos() {
  return (
    <section
      id="built-on-aptos"
      className="py-32 px-6 lg:px-12 max-w-7xl mx-auto text-white text-center relative z-10"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="inline-block px-10 py-6 rounded-3xl bg-gradient-to-r from-purple-800/30 to-cyan-800/30 border border-white/10 backdrop-blur-lg shadow-xl hover:drop-shadow-glow transition-all"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent tracking-wide drop-shadow-md">
          Built on Aptos
        </h2>
      </motion.div>

      <p className="mt-8 text-white/70 max-w-xl mx-auto text-sm md:text-base">
        Leveraging Aptos’ parallel execution engine, our entire system is secure, upgradable, and gas-optimized for a seamless on-chain DeFi experience.
      </p>
    </section>
  );
}