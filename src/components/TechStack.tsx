import { motion } from "framer-motion";

const technologies = [
  { name: "Python", color: "hsl(45, 93%, 58%)" },
  { name: "scikit-learn", color: "hsl(174, 72%, 56%)" },
  { name: "Pandas", color: "hsl(280, 65%, 60%)" },
  { name: "NumPy", color: "hsl(200, 80%, 55%)" },
  { name: "Jupyter", color: "hsl(25, 95%, 55%)" },
];

const TechStack = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-2">Built With</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="px-6 py-3 rounded-full glass-card font-medium text-sm flex items-center gap-2"
            >
              <span 
                className="w-2 h-2 rounded-full" 
                style={{ backgroundColor: tech.color }}
              />
              {tech.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
