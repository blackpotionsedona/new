import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContactForm } from "./ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Visit <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Your sanctuary for coffee, crystals, and consciousness awaits
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-card border-border h-full">
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <MapPin className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">
                        Location
                      </h3>
                      <p className="text-muted-foreground">
                        841 AZ-179
                        <br />
                        Sedona, AZ 86336, United States
                      </p>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Black+Potion+Sedona+841+AZ-179+Sedona+AZ+86336"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-glow text-sm underline mt-2 inline-block"
                      >
                        Open in Google Maps
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start mb-6">
                    <Phone className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">
                        Text Us
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        Best way to reach us for questions or bookings
                      </p>
                      <Button className="bg-primary hover:bg-primary-glow text-foreground" asChild>
                        <a href="sms:+1234567890">Send a Text</a>
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start mb-6">
                    <Clock className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">
                        Hours
                      </h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>Monday - Sunday</p>
                        <p className="font-semibold text-foreground">7:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">
                        Email
                      </h3>
                      <a
                        href="mailto:info@blackpotionsedona.com"
                        className="text-primary hover:text-primary-glow underline"
                      >
                        info@blackpotionsedona.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="h-full min-h-[400px]"
            >
              <Card className="bg-card border-border h-full overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=Black+Potion+Sedona,+841+AZ-179,+Sedona,+AZ+86336&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Black Potion Sedona Location"
                />
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Easy to Find
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're located on AZ-179, just minutes from Sedona's famous vortex
              sites and red rock formations. Look for our distinctive stone
              exterior and golden signage.
            </p>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold mb-3 text-foreground">Parking</h3>
              <p className="text-muted-foreground">
                Free parking available in front of the shop and in the adjacent
                lot. ADA accessible entrance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default Contact;
