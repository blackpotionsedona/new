import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import interior360Preview from "@/assets/gallery/interior-360-preview.png";
import exterior360Preview from "@/assets/gallery/exterior-360-preview.png";
import coffee1 from "@/assets/gallery/coffee-1.png";
import coffee2 from "@/assets/gallery/coffee-2.png";
import coffee3 from "@/assets/gallery/coffee-3.png";
import crystals1 from "@/assets/gallery/crystals-1.png";
import crystals2 from "@/assets/gallery/crystals-2.png";
import crystals3 from "@/assets/gallery/crystals-3.png";
import crystals4 from "@/assets/gallery/crystals-4.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const coffeeGallery = [
    { src: coffee1, alt: "Coffee with crystals display", category: "drinks" },
    { src: coffee2, alt: "Black Potion branded cup", category: "drinks" },
    { src: coffee3, alt: "Latte in interior setting", category: "interior" },
  ];

  const crystalGallery = [
    { src: crystals1, alt: "Buddha and crystal display", category: "crystals" },
    { src: crystals2, alt: "Crystal shelf arrangement", category: "crystals" },
    { src: crystals3, alt: "Amethyst and crystal bowls", category: "crystals" },
    { src: crystals4, alt: "Crystal tarot cards", category: "crystals" },
  ];

  const allImages = [...coffeeGallery, ...crystalGallery];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Our <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A visual journey through coffee, crystals, and consciousness
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="max-w-7xl mx-auto">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="coffee">Coffee</TabsTrigger>
              <TabsTrigger value="crystals">Crystals</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {allImages.map((image, idx) => (
                  <motion.div
                    key={idx}
                    className="aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="coffee">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {coffeeGallery.map((image, idx) => (
                  <motion.div
                    key={idx}
                    className="aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="crystals">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {crystalGallery.map((image, idx) => (
                  <motion.div
                    key={idx}
                    className="aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* 360 Tours Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Take a Virtual Tour
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="bg-card rounded-lg overflow-hidden shadow-lg border border-border cursor-pointer group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onClick={() => window.open('https://www.google.com/local/place/fid/0x872da71dcd8823d7:0x7748972b96eb0f18/photosphere?iu=https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz5nzaE9r_EQ76K456idrV3M08CLul0AKCxnu2CKJPLJE4zVuwL4YN_NrhYxsxZUAVM4OYRM9AMeo0z4rtJVoi4OoLEih0MpFOFgYC7Tda7TWAe5Xc9-lY7qKDOQp3wrnZl8_oC%3Dw160-h106-k-no-pi-0-ya1.1901368-ro-0-fo100&ik=CAoSFkNJSE0wb2dLRUlDQWdJRDNpNDdERVE%3D', '_blank')}
            >
              <h3 className="text-xl font-bold p-4 text-foreground border-b border-border flex items-center justify-between">
                Interior 360° View
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </h3>
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={interior360Preview}
                  alt="Interior 360 Preview"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <span className="text-white text-lg font-semibold px-6 py-3 bg-primary/80 rounded-lg group-hover:bg-primary transition-colors">
                    Click to view interior 360°
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-card rounded-lg overflow-hidden shadow-lg border border-border cursor-pointer group"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onClick={() => window.open('https://www.google.com/local/place/fid/0x872da71dcd8823d7:0x7748972b96eb0f18/photosphere?iu=https://lh3.googleusercontent.com/gps-cs-s/AG0ilSytYwkAzx0WyZpAxRGgJqOa7kl0ce-Q78sBOifSfs6UDZEYMUPsOiPfmT9waE4uWmAFNFJAwKtplzAnWb3Yb-YicyIXH0LAOdc15ffForxXf2EaAnZTAhjzRUQcvKclTPwFKN2-Jw%3Dw160-h106-k-no-pi-10-ya11.681393-ro-0-fo100&ik=CAoSF0NJSE0wb2dLRUlDQWdJRDNpX2EtamdF', '_blank')}
            >
              <h3 className="text-xl font-bold p-4 text-foreground border-b border-border flex items-center justify-between">
                Exterior 360° View
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </h3>
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={exterior360Preview}
                  alt="Exterior 360 Preview"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <span className="text-white text-lg font-semibold px-6 py-3 bg-primary/80 rounded-lg group-hover:bg-primary transition-colors">
                    Click to view exterior 360°
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
