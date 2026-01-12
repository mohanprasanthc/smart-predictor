import { motion } from "framer-motion";
import { Database, Wand2, Brain, LineChart, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "Data Collection",
    description: "5,572 email samples from the UCI SMS Spam Collection dataset",
  },
  {
    icon: Wand2,
    title: "Preprocessing",
    description: "Text cleaning, tokenization, and TF-IDF vectorization",
  },
  {
    icon: Brain,
    title: "Model Training",
    description: "Multinomial Naive Bayes classifier with scikit-learn",
  },
  {
    icon: LineChart,
    title: "Evaluation",
    description: "Cross-validation and performance metrics analysis",
  },
  {
    icon: CheckCircle2,
    title: "Optimization",
    description: "Hyperparameter tuning for improved accuracy",
  },
];

const MethodologySection = () => {
  return (
    <section id="methodology" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Methodology</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The complete machine learning workflow from data to deployment
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`lg:flex lg:items-center lg:gap-8 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className={`lg:w-1/2 ${i % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:text-left lg:pl-12"}`}>
                  <div className={`glass-card rounded-2xl p-6 inline-block ${i % 2 === 0 ? "lg:ml-auto" : ""}`}>
                    <div className={`flex items-center gap-4 ${i % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className={i % 2 === 0 ? "lg:text-right" : ""}>
                        <h3 className="text-lg font-semibold">{step.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:flex w-4 h-4 rounded-full bg-primary shrink-0 relative z-10 glow-primary" />

                <div className="lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
