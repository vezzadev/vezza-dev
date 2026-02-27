import { motion } from "framer-motion";
import { Sprout, Droplets, Sun, Package, Truck, LineChart } from "lucide-react";

const modules = [
  { icon: Sprout, name: "Crop Planning", desc: "Seasonal planning and rotation management" },
  { icon: Droplets, name: "Irrigation", desc: "Smart water distribution and monitoring" },
  { icon: Sun, name: "Climate Control", desc: "Greenhouse and microclimate automation" },
  { icon: Package, name: "Inventory", desc: "Seed, fertilizer, and supply tracking" },
  { icon: Truck, name: "Logistics", desc: "Harvest scheduling and distribution" },
  { icon: LineChart, name: "Yield Forecast", desc: "AI-powered production predictions" },
];

const ModulesSection = () => {
  return (
    <section id="modules" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wide">Platform</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Plug in what you need
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Each module works independently or together — scale at your own pace.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {modules.map((m, i) => (
            <motion.div
              key={m.name}
              className="flex items-start gap-4 p-5 rounded-xl bg-background border border-border hover:border-primary/40 transition-colors"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <m.icon className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">{m.name}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
