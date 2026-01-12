import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
  accentColor?: "primary" | "accent" | "chart3" | "chart4";
}

const colorClasses = {
  primary: "text-primary",
  accent: "text-accent",
  chart3: "text-[hsl(var(--chart-3))]",
  chart4: "text-[hsl(var(--chart-4))]",
};

const glowClasses = {
  primary: "glow-primary",
  accent: "glow-accent",
  chart3: "",
  chart4: "",
};

const MetricCard = ({ 
  title, 
  value, 
  description, 
  icon: Icon, 
  delay = 0,
  accentColor = "primary" 
}: MetricCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`glass-card rounded-2xl p-6 hover:border-primary/50 transition-all group ${glowClasses[accentColor]}`}
    >
      <div className={`w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <Icon className={`w-6 h-6 ${colorClasses[accentColor]}`} />
      </div>
      
      <h3 className="text-sm font-medium text-muted-foreground mb-2">{title}</h3>
      
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.2, type: "spring" }}
        className={`text-4xl font-bold mb-2 ${colorClasses[accentColor]}`}
      >
        {value}
      </motion.div>
      
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );
};

export default MetricCard;
