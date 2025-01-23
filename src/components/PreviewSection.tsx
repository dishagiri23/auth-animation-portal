import { motion } from "framer-motion";

export const PreviewSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="hidden lg:flex flex-col items-center justify-center p-8 space-y-8"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-3xl" />
        <h1 className="text-4xl font-bold relative z-10">Welcome to AuthFlow</h1>
      </motion.div>
      
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg text-white/70 text-center max-w-md"
      >
        Experience seamless authentication with our modern, secure, and user-friendly platform.
      </motion.p>
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="grid grid-cols-2 gap-4 mt-8"
      >
        {["Secure", "Fast", "Modern", "Reliable"].map((feature, index) => (
          <motion.div
            key={feature}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
            className="glass-card p-4 rounded-lg text-center"
          >
            {feature}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};