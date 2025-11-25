import { motion } from "framer-motion";
import { Camera, Book, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-mystical-purple/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Spiritual <span className="text-mystical-purple">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Connect with your inner self through our transformative offerings
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Aura Photography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden bg-card border-border">
                <div className="grid md:grid-cols-2">
                  <div className="bg-gradient-to-br from-mystical-purple/20 to-primary/20 p-12 flex items-center justify-center">
                    <Camera className="w-32 h-32 text-mystical-purple" />
                  </div>
                  <CardContent className="p-8 md:p-12">
                    <h2 className="text-3xl font-bold mb-4 text-foreground">
                      Aura Photography
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Witness the invisible made visible. Our specialized aura
                      camera captures the electromagnetic field surrounding your
                      body, revealing the colors and patterns of your energy in
                      stunning clarity.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3" />
                        <p className="text-sm text-muted-foreground">
                          Full-color photograph of your aura field
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3" />
                        <p className="text-sm text-muted-foreground">
                          Detailed interpretation of colors and meanings
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3" />
                        <p className="text-sm text-muted-foreground">
                          Insights into your emotional and spiritual state
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3" />
                        <p className="text-sm text-muted-foreground">
                          Take-home print and digital copy
                        </p>
                      </div>
                    </div>
                    <Button
                      className="bg-mystical-purple hover:bg-mystical-purple/90 text-white"
                      asChild
                    >
                      <a href="sms:+1234567890">
                        <Phone className="mr-2 h-4 w-4" />
                        Text to Book
                      </a>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </motion.div>

            {/* Psychic Readings */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="overflow-hidden bg-card border-border">
                <div className="grid md:grid-cols-2">
                  <div className="order-2 md:order-1">
                    <CardContent className="p-8 md:p-12">
                      <h2 className="text-3xl font-bold mb-4 text-foreground">
                        Psychic Readings
                      </h2>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Receive guidance from our gifted intuitive readers. Whether
                        you're seeking clarity on life decisions, relationship
                        insights, or spiritual direction, our readers connect with
                        divine wisdom to illuminate your path forward.
                      </p>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3" />
                          <p className="text-sm text-muted-foreground">
                            Intuitive guidance and spiritual counseling
                          </p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3" />
                          <p className="text-sm text-muted-foreground">
                            Tarot, oracle cards, and clairvoyant readings
                          </p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3" />
                          <p className="text-sm text-muted-foreground">
                            Past life exploration and akashic records
                          </p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3" />
                          <p className="text-sm text-muted-foreground">
                            Private, judgment-free sessions
                          </p>
                        </div>
                      </div>
                      <Button
                        className="bg-primary hover:bg-primary-glow text-foreground"
                        asChild
                      >
                        <a href="sms:+1234567890">
                          <Phone className="mr-2 h-4 w-4" />
                          Text to Book
                        </a>
                      </Button>
                    </CardContent>
                  </div>
                  <div className="order-1 md:order-2 bg-gradient-to-br from-primary/20 to-mystical-purple/20 p-12 flex items-center justify-center">
                    <Book className="w-32 h-32 text-primary" />
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Book */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Both services are available by appointment. Walk-ins welcome based
              on availability. Text us to schedule your session or ask any
              questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-glow text-foreground" asChild>
                <a href="sms:+1234567890">
                  <Phone className="mr-2 h-5 w-5" />
                  Text Us Now
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Visit us at Black Potion Sedona | Open Daily
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
