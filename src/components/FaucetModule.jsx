import { motion } from 'framer-motion';

export default function FaucetModule() {
  return (
    <section
      id="faucet"
      className="py-24 px-6 lg:px-12 max-w-7xl mx-auto text-white relative z-10"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Dev-Ready Faucet for Newcomers
        </h2>
        <p className="mt-4 text-white/80 max-w-2xl mx-auto">
          New to Aptos? Get a jumpstart with non-withdrawable starter APT to help you build reputation — not drain liquidity.
        </p>
      </div>

      {/* Glassy Faucet Card */}
      <motion.div
        className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-10 flex flex-col lg:flex-row items-center justify-between gap-10 hover:drop-shadow-glow transition-all"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="lg:w-2/3">
          <h3 className="text-2xl font-semibold text-accent mb-4">For Builders, Not Drainers</h3>
          <ul className="list-disc list-inside space-y-3 text-white/80">
            <li>Strictly non-withdrawable APT</li>
            <li>Can only be used to build reputation in the ecosystem</li>
            <li>Perfect for devs & explorers entering Aptos</li>
          </ul>
        </div>

        <div className="lg:w-1/3 flex justify-center">
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold hover:shadow-glow transition-all">
            Get Faucet
          </button>
        </div>
      </motion.div>
    </section>
  );
}
