import { motion } from "framer-motion";

export default function HeroMotif({ variant = "full" }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-orange-500/20 blur-[110px]" />
      <div className="absolute bottom-[-140px] left-[-10%] h-[360px] w-[360px] rounded-full bg-orange-400/10 blur-[110px]" />

      {variant === "full" && (
        <>
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <svg
            viewBox="0 0 800 300"
            preserveAspectRatio="none"
            className="absolute inset-x-0 bottom-0 h-[45%] w-full opacity-[0.35]"
          >
            <motion.path
              d="M0,220 C100,180 150,260 240,200 C330,140 380,240 460,180 C540,120 600,200 680,140 C740,100 780,150 800,110"
              fill="none"
              stroke="#ffab57"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
          </svg>
        </>
      )}
    </div>
  );
}
