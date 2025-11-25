import { motion } from "framer-motion";
import crystals1 from "@/assets/gallery/crystals-1.png";
import crystals2 from "@/assets/gallery/crystals-2.png";
import crystals3 from "@/assets/gallery/crystals-3.png";
import crystals4 from "@/assets/gallery/crystals-4.png";
import { Card, CardContent } from "@/components/ui/card";

const Crystals = () => {
  const crystalInfo = [
    {
      name: "Amethyst",
      properties: "Spiritual awareness, intuition, peace",
      chakra: "Crown & Third Eye",
    },
    {
      name: "Clear Quartz",
      properties: "Clarity, amplification, healing",
      chakra: "All Chakras",
    },
    {
      name: "Rose Quartz",
      properties: "Love, compassion, emotional healing",
      chakra: "Heart",
    },
    {
      name: "Citrine",
      properties: "Abundance, manifestation, joy",
      chakra: "Solar Plexus",
    },
    {
      name: "Black Tourmaline",
      properties: "Protection, grounding, purification",
      chakra: "Root",
    },
    {
      name: "Selenite",
      properties: "Cleansing, clarity, divine connection",
      chakra: "Crown",
    },
    {
      name: "Carnelian",
      properties: "Courage, creativity, vitality",
      chakra: "Sacral",
    },
    {
      name: "Labradorite",
      properties: "Transformation, intuition, protection",
      chakra: "Third Eye",
    },
  ];

  const galleryImages = [crystals1, crystals2, crystals3, crystals4];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-mystical-dark to-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Crystal <span className="text-mystical-purple">Collection</span>
            </h1>
            <p className="text-xl text-primary-glow">
              Hand-selected stones from around the world, each carrying the
              energy of the earth and the wisdom of Sedona's vortexes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {galleryImages.map((image, idx) => (
              <motion.div
                key={idx}
                className="aspect-square overflow-hidden rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={image}
                  alt={`Crystal display ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Crystal Properties */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Crystal Properties & Meanings
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {crystalInfo.map((crystal, idx) => (
              <motion.div
                key={crystal.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Card className="h-full bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-mystical-purple">
                      {crystal.name}
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-semibold text-foreground">
                          Properties:
                        </span>
                        <p className="text-muted-foreground">
                          {crystal.properties}
                        </p>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">
                          Chakra:
                        </span>
                        <p className="text-primary">{crystal.chakra}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Our Collection */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Why Crystals Matter
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Crystals have been used for thousands of years as tools for
                healing, meditation, and spiritual growth. Each stone carries a
                unique vibrational frequency that can help balance, cleanse, and
                amplify your own energy.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Black Potion Sedona, we carefully select each crystal for its
                quality, beauty, and energetic properties. Whether you're new to
                crystal work or a seasoned practitioner, our knowledgeable staff
                can help you find the perfect stone for your journey.
              </p>
            </motion.div>

            <motion.div
              className="bg-mystical-dark text-white rounded-lg p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Visit Our Crystal Shop
              </h3>
              <p className="text-lg mb-6">
                Explore our full collection in person and let the right crystal
                find you.
              </p>
              <p className="text-sm text-primary-glow">
                Located inside Black Potion Sedona | Open Daily
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Crystals;
