import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import logo from "@/assets/logo.png";

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader = ({ onComplete }: PreloaderProps) => {
  const [stage, setStage] = useState<"tiger" | "pulse" | "move" | "complete">("tiger");
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const duration = isMobile ? 4000 : 3000;

  const x = useMotionValue(-200);
  const opacity = useMotionValue(0);

  useEffect(() => {
    const sequence = async () => {
      // Stage 1: Tiger enters
      setStage("tiger");
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      // Stage 2: Pulse on sigil
      setStage("pulse");
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Stage 3: Move to header
      setStage("move");
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Complete
      setStage("complete");
      setTimeout(onComplete, 500);
    };

    sequence();
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: stage === "complete" ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Dust particles background */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Tiger + Sigil animation */}
      <motion.div
        className="relative flex items-center justify-center"
        animate={
          stage === "move"
            ? {
                x: (() => {
                  const headerRect = document.querySelector("nav")?.getBoundingClientRect();
                  if (headerRect) {
                    return -(window.innerWidth / 2 - headerRect.left - 48);
                  }
                  return -window.innerWidth / 2 + 100;
                })(),
                y: (() => {
                  const headerRect = document.querySelector("nav")?.getBoundingClientRect();
                  if (headerRect) {
                    return -(window.innerHeight / 2 - headerRect.top - 48);
                  }
                  return -window.innerHeight / 2 + 60;
                })(),
                scale: 0.35,
              }
            : {}
        }
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Tiger (golden shimmer effect) */}
        {stage === "tiger" && (
          <motion.div
            className="absolute left-0"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: [0, 1, 0] }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div
                className="w-32 h-32 md:w-40 md:h-40"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.6), transparent)",
                  filter: "blur(2px)",
                }}
                animate={{
                  scaleX: [1, 1.2, 1],
                }}
                transition={{ duration: 0.6, repeat: 2 }}
              />
            </div>
          </motion.div>
        )}

        {/* Central Sigil (Logo) */}
        <motion.div
          className="relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: stage === "pulse" ? [1, 1.1, 1] : 1,
            opacity: stage === "complete" ? 0 : 1,
          }}
          transition={{
            scale: { duration: 0.6, repeat: stage === "pulse" ? 2 : 0 },
            opacity: { duration: 0.3 },
          }}
        >
          <motion.img
            src={logo}
            alt="Black Potion Sedona"
            className="w-40 h-40 md:w-56 md:h-56"
            animate={{
              filter: stage === "pulse" 
                ? [
                    "drop-shadow(0 0 20px rgba(255, 215, 0, 0.4))",
                    "drop-shadow(0 0 60px rgba(255, 215, 0, 0.8))",
                    "drop-shadow(0 0 20px rgba(255, 215, 0, 0.4))",
                  ]
                : "drop-shadow(0 0 20px rgba(255, 215, 0, 0.3))",
            }}
            transition={{ duration: 0.6, repeat: stage === "pulse" ? 2 : 0 }}
          />
          
          {/* Golden strands wrapping effect */}
          {stage === "pulse" && (
            <>
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0"
                  style={{
                    transform: `rotate(${i * 45}deg)`,
                  }}
                >
                  <motion.div
                    className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent origin-top"
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: [0, 1, 0] }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.05,
                    }}
                  />
                </motion.div>
              ))}
            </>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
