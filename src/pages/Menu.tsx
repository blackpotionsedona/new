import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Menu = () => {
  const menuItems = {
    "Hot Drinks": [
      { name: "Smoked Praline Latte", tags: [] },
      { name: "Cacao Mocha", tags: [] },
      { name: "Caramel Macchiato", tags: [] },
      { name: "Peanutbutter Mocha", tags: [] },
      { name: "Lavender Latte", tags: [] },
      { name: "Spanish Latte", tags: [] },
      { name: "Maple Latte", tags: [] },
      { name: "Brasilero Cold Brew", tags: [] },
      { name: "Cappuccino", tags: [] },
    ],
    "Cold Drinks": [
      { name: "Espresso", tags: [] },
      { name: "Americano", tags: [] },
      { name: "Latte", tags: [] },
      { name: "Cappuccino", tags: [] },
      { name: "Mocha", tags: [] },
      { name: "Cold Brew", tags: [] },
      { name: "Matcha", tags: [] },
    ],
    "Tea": [
      { name: "Iced Tea", tags: [] },
      { name: "Hot Tea", tags: [] },
    ],
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Our <span className="text-primary">Menu</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Handcrafted beverages featuring{" "}
              <a
                href="https://peixotocoffee.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-glow underline"
              >
                Peixoto Coffee
              </a>
              , ethically sourced from Brazil with love and intention
            </p>
          </motion.div>

          {/* Menu Items Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(menuItems).map(([category, items], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {items.map((item, itemIdx) => (
                        <motion.li
                          key={itemIdx}
                          className="flex items-start justify-between pb-2 border-b border-border last:border-0"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (idx * 0.1) + (itemIdx * 0.05) }}
                        >
                          <div className="flex-1">
                            <div className="font-medium text-foreground">
                              {item.name}
                            </div>
                            {item.tags.length > 0 && (
                              <div className="flex gap-1 mt-1">
                                {item.tags.map((tag, tagIdx) => (
                                  <Badge
                                    key={tagIdx}
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Note about pricing */}
          <motion.div
            className="text-center mt-12 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-sm">
              Prices available in-store. We also offer plant-based milk
              alternatives and seasonal specials.
            </p>
            <p className="text-sm mt-2">
              <span className="text-primary font-semibold">Text us</span> for
              current offerings and daily specials.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
