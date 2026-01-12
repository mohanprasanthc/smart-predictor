import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts";

const FeatureImportance = () => {
  const features = [
    { name: "Word Frequency", value: 0.35 },
    { name: "Special Chars", value: 0.22 },
    { name: "Caps Ratio", value: 0.18 },
    { name: "Link Count", value: 0.15 },
    { name: "Email Length", value: 0.10 },
  ];

  const colors = [
    "hsl(174, 72%, 56%)",
    "hsl(280, 65%, 60%)",
    "hsl(45, 93%, 58%)",
    "hsl(340, 75%, 55%)",
    "hsl(200, 80%, 55%)",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-2xl p-8"
    >
      <h3 className="text-xl font-semibold mb-6 text-center">Feature Importance</h3>
      
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={features} layout="vertical" margin={{ left: 20, right: 20 }}>
            <XAxis type="number" domain={[0, 0.4]} tick={{ fill: 'hsl(215, 20%, 55%)' }} axisLine={false} tickLine={false} />
            <YAxis 
              dataKey="name" 
              type="category" 
              tick={{ fill: 'hsl(210, 40%, 98%)', fontSize: 12 }} 
              axisLine={false} 
              tickLine={false}
              width={100}
            />
            <Bar dataKey="value" radius={[0, 6, 6, 0]}>
              {features.map((_, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <p className="text-sm text-muted-foreground text-center mt-4">
        Top contributing features for spam classification
      </p>
    </motion.div>
  );
};

export default FeatureImportance;
