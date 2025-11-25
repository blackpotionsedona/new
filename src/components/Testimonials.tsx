import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TESTIMONIALS = [
  {
    quote: "Absolutely wonderful coffee (I was especially fond of the cortado), with a great story about their field-to-cup micro supply chain. Plus, their crystals were really high quality — we bought a glorious piece of multi-crystal amethyst. We went back each of our three days in Sedona, and will certainly visit again.",
    person: "Kanon C",
    source: "Wanderlog",
    date: "Jul 15, 2025"
  },
  {
    quote: "Coffee AND crystals? YES PLEASE! This is the perfect shop for the area … one of our party had an aura reading as well. The staff are beautiful humans … we found a spot and enjoyed our coffee while browsing the other side of the shop.",
    person: "Nikki",
    source: "Wanderlog",
    date: "Jul 10, 2025"
  },
  {
    quote: "If you like lattes, then this place should be on your list in Sedona. There were at least 8 options for just latte. Make no mistake, they have other coffee options … along with cookies, coffee cakes … The staff here are very cordial and friendly as well.",
    person: "Arnav B",
    source: "Wanderlog",
    date: "Oct 19, 2025"
  },
  {
    quote: "Our barista, Dave, was personable and accommodating … Combined with his excellent Brazilian coffee concoctions this was a wonderful treat in a more wonderful land.",
    person: "Laurie G",
    source: "Tripadvisor",
    date: "Apr 5, 2024"
  },
  {
    quote: "Best customer service. All the staff were so kind, nice and welcoming even when they were super busy … Will be back every day for my morning coffee! Best coffee in Sedona!",
    person: "SKB627",
    source: "Tripadvisor",
    date: "Apr 26, 2024"
  },
  {
    quote: "All I saw was the Coffee and Crystals sign … The beautiful setup inside catches your eye right away …",
    person: "Jennifer V",
    source: "Yelp",
    date: "Aug 2, 2025"
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      rotateY: direction > 0 ? 10 : -10,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
      zIndex: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
      rotateY: direction > 0 ? -5 : 5,
      scale: 0.9,
      zIndex: 0,
    }),
  };

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-background relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Review Hook */}
        <motion.div
          className="text-center mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-3">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-foreground font-semibold">4.6 ⭐</span>
              <span className="text-muted-foreground text-sm">425+ reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              <span className="text-foreground font-semibold">4.3 ⭐</span>
              <span className="text-muted-foreground text-sm">78+ reviews</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground italic">Hundreds more reviews across platforms</p>
        </motion.div>

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            What People Say
          </h2>
          <p className="text-muted-foreground italic">Real visitors. Real moments.</p>
        </motion.div>

        {/* Testimonial Cards Deck */}
        <div className="max-w-4xl mx-auto relative" style={{ perspective: "1000px", minHeight: "450px" }}>
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                rotateY: { duration: 0.3 },
                scale: { duration: 0.3 },
              }}
              className="absolute inset-0"
            >
              <motion.div
                className="bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl mx-2 sm:mx-4 md:mx-8"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--card)) 100%)",
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(255, 215, 0, 0.1)",
                }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 25px 70px rgba(0, 0, 0, 0.4), 0 0 60px rgba(255, 215, 0, 0.15)",
                }}
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                {/* Quote */}
                <div className="mb-6">
                  <svg
                    className="w-10 h-10 text-primary/30 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                  {/* 5 Star Rating */}
                  <div className="flex gap-1 mb-4 justify-start">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-primary"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed">
                    {TESTIMONIALS[currentIndex].quote}
                  </blockquote>
                </div>

                {/* Author */}
                <div className="border-t border-border/50 pt-6">
                  <cite className="not-italic">
                    <div className="font-semibold text-primary text-lg">
                      {TESTIMONIALS[currentIndex].person}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {TESTIMONIALS[currentIndex].source} • {TESTIMONIALS[currentIndex].date}
                    </div>
                  </cite>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none z-10">
            <Button
              onClick={handlePrev}
              variant="outline"
              size="icon"
              className="pointer-events-auto ml-2 md:-ml-6 bg-card/80 backdrop-blur-sm border-primary/30 hover:bg-primary/10 hover:border-primary shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </Button>
            <Button
              onClick={handleNext}
              variant="outline"
              size="icon"
              className="pointer-events-auto mr-2 md:-mr-6 bg-card/80 backdrop-blur-sm border-primary/30 hover:bg-primary/10 hover:border-primary shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </Button>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-8 relative z-10">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
