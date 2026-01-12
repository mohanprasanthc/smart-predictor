import { Target, TrendingUp, RefreshCw, Zap } from "lucide-react";
import MetricCard from "./MetricCard";

const MetricsSection = () => {
  const metrics = [
    {
      title: "Accuracy",
      value: "97.2%",
      description: "Correctly classified samples out of all predictions",
      icon: Target,
      accentColor: "primary" as const,
    },
    {
      title: "Precision",
      value: "98.1%",
      description: "True spam detected from predicted spam emails",
      icon: TrendingUp,
      accentColor: "accent" as const,
    },
    {
      title: "Recall",
      value: "94.8%",
      description: "Actual spam emails that were correctly identified",
      icon: RefreshCw,
      accentColor: "chart3" as const,
    },
    {
      title: "F1 Score",
      value: "0.96",
      description: "Harmonic mean of precision and recall",
      icon: Zap,
      accentColor: "chart4" as const,
    },
  ];

  return (
    <section id="metrics" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Model <span className="gradient-text">Performance</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Key metrics demonstrating the effectiveness of our classification model
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <MetricCard key={i} {...metric} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
