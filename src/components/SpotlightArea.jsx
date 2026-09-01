import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export default function SpotlightArea({ children, className = "" }) {
  const mouseX = useMotionValue(-400);
  const mouseY = useMotionValue(-400);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  function handleMouseLeave() {
    mouseX.set(-400);
    mouseY.set(-400);
  }

  const background = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,130,0,0.16), transparent 70%)`;

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ background }}
      />
      {children}
    </div>
  );
}
