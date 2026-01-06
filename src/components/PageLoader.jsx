import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-zinc-950"
    >
      {/* Glow Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        className="relative flex items-center justify-center"
      >
        <div className="absolute h-20 w-20 rounded-full bg-indigo-500/20 blur-2xl" />

        <motion.div
          className="h-14 w-14 rounded-full border-[3px] border-indigo-500 border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
      </motion.div>

      {/* Brand Text */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-center"
      >
        <h1 className="text-lg font-semibold tracking-wide text-white">
          ModernBlog
        </h1>
        <p className="mt-1 text-xs text-zinc-500">
          Loading experience…
        </p>
      </motion.div>

      {/* Subtle Progress Dots */}
      <motion.div
        className="mt-6 flex gap-2"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.2, repeat: Infinity },
          },
        }}
      >
        {[1, 2, 3].map((i) => (
          <motion.span
            key={i}
            className="h-2 w-2 rounded-full bg-indigo-500"
            variants={{
              hidden: { opacity: 0.3 },
              visible: {
                opacity: [0.3, 1, 0.3],
                transition: { duration: 1 },
              },
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
