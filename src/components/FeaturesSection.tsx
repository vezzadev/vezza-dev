import { motion } from "framer-motion";
import { Layers, BarChart3, Wifi, Shield } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Modular Architecture",
    description: "Add, remove, or reconfigure farm modules without disrupting your existing operations.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track yield, soil health, water usage and equipment performance from a single dashboard.",
  },
  {
    icon: Wifi,
    title: "IoT Integration",
    description: "Connect sensors, drones, and automated systems with plug-and-play hardware support.",
  },
  {
    icon: Shield,
    title: "Compliance Ready",
    description: "Built-in traceability and reporting tools for organic, GAP, and sustainability certifications.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wide">Why Vezza</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Built for the future of farming
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="group p-6 rounded-xl bg-card border border-border hover:shadow-elevated transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <f.icon className="w-6 h-6 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
