import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Coffee, Sparkles, Camera, Book, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-exterior.png";
import interior360Preview from "@/assets/gallery/interior-360-preview.png";
import exterior360Preview from "@/assets/gallery/exterior-360-preview.png";
import coffee1 from "@/assets/gallery/coffee-1.png";
import coffee3 from "@/assets/gallery/coffee-3.png";
import crystals1 from "@/assets/gallery/crystals-1.png";
import crystals3 from "@/assets/gallery/crystals-3.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Testimonials } from "@/components/Testimonials";

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src={heroImage}
            alt="Black Potion Sedona Exterior"
            className="w-full h-full object-cover md:object-center"
            style={{ 
              objectPosition: window.innerWidth <= 768 ? 'center center' : 'center 40%',
              objectFit: 'cover'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-mystical-dark/60 via-mystical-dark/40 to-background" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Where Brazil's Purity
            <br />
            <span className="text-primary">Meets Sedona's Spirit</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl mb-4 text-primary-glow font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We Proudly Serve{" "}
            <a
              href="https://peixotocoffee.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-colors"
            >
              Peixoto Coffee
            </a>
          </motion.p>

          <motion.div
            className="h-1 w-32 mx-auto mb-8 bg-gradient-to-r from-transparent via-primary to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-glow text-foreground font-semibold"
              onClick={() => {
                window.location.href = '/menu';
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
              }}
            >
              View Menu
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => {
                window.location.href = '/contact';
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
              }}
            >
              Visit Us
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            {...fadeIn}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">
              A Sacred Blend of{" "}
              <span className="text-primary">Coffee & Crystals</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Welcome to Black Potion Sedona, where the pure, ethically-sourced beans
              of Brazil's Peixoto Coffee meet the mystical energy of Sedona's red rocks.
              We're more than a coffee shop—we're a sanctuary for the soul.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sip handcrafted lattes while exploring our curated crystal collection,
              capture your aura in vibrant photography, or receive guidance through
              our psychic reading sessions. Every visit is an awakening.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
            {...fadeIn}
          >
            Experience Black Potion
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div {...fadeIn} transition={{ delay: 0.1 }}>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Coffee className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    Premium Coffee
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Peixoto Coffee: ethically sourced, perfectly roasted, spiritually elevated
                  </p>
                  <Button 
                    variant="link" 
                    className="text-primary"
                    onClick={() => {
                      window.location.href = '/menu';
                      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                    }}
                  >
                    View Menu →
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-mystical-purple/10 flex items-center justify-center group-hover:bg-mystical-purple/20 transition-colors">
                    <Sparkles className="w-8 h-8 text-mystical-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    Crystal Shop
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Hand-selected crystals to enhance your energy and spiritual journey
                  </p>
                  <Button 
                    variant="link" 
                    className="text-mystical-purple"
                    onClick={() => {
                      window.location.href = '/crystals';
                      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                    }}
                  >
                    Explore Crystals →
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.3 }}>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Camera className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    Aura Photography
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Capture the colors of your energy field in stunning visual form
                  </p>
                  <Button 
                    variant="link" 
                    className="text-accent"
                    onClick={() => {
                      window.location.href = '/services';
                      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                    }}
                  >
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Book className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    Psychic Readings
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Receive intuitive guidance and spiritual insights from gifted readers
                  </p>
                  <Button 
                    variant="link" 
                    className="text-primary"
                    onClick={() => {
                      window.location.href = '/services';
                      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                    }}
                  >
                    Book Session →
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
            {...fadeIn}
          >
            A Glimpse Inside
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <motion.div
              className="aspect-square overflow-hidden rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={coffee1}
                alt="Coffee Art"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="aspect-square overflow-hidden rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={crystals1}
                alt="Crystal Display"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="aspect-square overflow-hidden rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={coffee3}
                alt="Interior"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="aspect-square overflow-hidden rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={crystals3}
                alt="More Crystals"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                window.location.href = '/gallery';
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
              }}
            >
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* 360 Tours Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
            {...fadeIn}
          >
            Take a Virtual Tour
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="bg-card rounded-lg overflow-hidden shadow-lg border border-border cursor-pointer group"
              {...fadeIn}
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
              {...fadeIn}
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

      {/* CTA Section */}
      <section className="py-20 bg-mystical-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Awaken Your Spirit?
            </h2>
            <p className="text-xl mb-8 text-primary-glow max-w-2xl mx-auto">
              Visit us in Sedona for a transformative experience that nourishes
              both body and soul.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-glow text-foreground font-semibold"
              onClick={() => {
                window.location.href = '/contact';
                setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
              }}
            >
              Text Us Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
