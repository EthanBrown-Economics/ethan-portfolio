import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  x = 0,
  duration = 0.6,
  className,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
