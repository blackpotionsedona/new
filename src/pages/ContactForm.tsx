import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    preferred_contact_method: "email",
    message_type: "General Inquiry",
    items_interested: "",
    preferred_visit_time: "",
    message: "",
    consent: false,
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.user_name || !formData.user_email || !formData.message || !formData.consent) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and accept the consent.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const payload = {
      ...formData,
      consent_text: formData.consent ? "consent_given" : "consent_not_given",
    };

    try {
      await emailjs.send(
        "service_27jzfzf",
        "template_ehwemmd",
        payload,
        "AaoLbRFmvDGvv7QSE"
      );

      toast({
        title: "Message Sent!",
        description: "We will reply within 24–48 hours. Thank you!",
      });

      // Reset form
      setFormData({
        user_name: "",
        user_email: "",
        user_phone: "",
        preferred_contact_method: "email",
        message_type: "General Inquiry",
        items_interested: "",
        preferred_visit_time: "",
        message: "",
        consent: false,
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Sending Failed",
        description: (
          <span>
            Please email{" "}
            <a
              href="mailto:blackpotionsedona1@gmail.com"
              className="underline text-primary"
            >
              blackpotionsedona1@gmail.com
            </a>
          </span>
        ),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="user_name">Name *</Label>
                    <Input
                      id="user_name"
                      name="user_name"
                      value={formData.user_name}
                      onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="user_email">Email *</Label>
                    <Input
                      id="user_email"
                      name="user_email"
                      type="email"
                      value={formData.user_email}
                      onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="user_phone">Phone (optional)</Label>
                  <Input
                    id="user_phone"
                    name="user_phone"
                    type="tel"
                    value={formData.user_phone}
                    onChange={(e) => setFormData({ ...formData, user_phone: e.target.value })}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="preferred_contact_method">Preferred Contact Method</Label>
                  <select
                    id="preferred_contact_method"
                    name="preferred_contact_method"
                    value={formData.preferred_contact_method}
                    onChange={(e) =>
                      setFormData({ ...formData, preferred_contact_method: e.target.value })
                    }
                    className="mt-1 w-full px-3 py-2 bg-background border border-border rounded-md"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="text">Text</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message_type">Message Type</Label>
                  <select
                    id="message_type"
                    name="message_type"
                    value={formData.message_type}
                    onChange={(e) => setFormData({ ...formData, message_type: e.target.value })}
                    className="mt-1 w-full px-3 py-2 bg-background border border-border rounded-md"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Booking - Aura Photography">Booking - Aura Photography</option>
                    <option value="Booking - Psychic Reading">Booking - Psychic Reading</option>
                    <option value="Crystal Questions">Crystal Questions</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="items_interested">Items Interested (optional)</Label>
                  <Input
                    id="items_interested"
                    name="items_interested"
                    value={formData.items_interested}
                    onChange={(e) =>
                      setFormData({ ...formData, items_interested: e.target.value })
                    }
                    placeholder="e.g., Amethyst, Rose Quartz"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="preferred_visit_time">Preferred Visit Time (optional)</Label>
                  <Input
                    id="preferred_visit_time"
                    name="preferred_visit_time"
                    value={formData.preferred_visit_time}
                    onChange={(e) =>
                      setFormData({ ...formData, preferred_visit_time: e.target.value })
                    }
                    placeholder="e.g., Next Tuesday afternoon"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="mt-1"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    required
                    className="mt-1"
                  />
                  <Label htmlFor="consent" className="text-sm text-muted-foreground cursor-pointer">
                    I consent to Black Potion Sedona contacting me via the method selected above *
                  </Label>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-glow text-foreground font-semibold"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
