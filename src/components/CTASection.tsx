import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="about" className="py-24 bg-primary">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Ready to modernize your farm?
          </h2>
          <p className="text-primary-foreground/70 mb-8">
            Join the early access program and be among the first to experience modular farm management.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="gap-2"
          >
            Get Early Access <ArrowRight size={16} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
