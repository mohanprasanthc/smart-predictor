import ConfusionMatrix from "./ConfusionMatrix";
import FeatureImportance from "./FeatureImportance";

const ChartsSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Model <span className="gradient-text-accent">Analysis</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Detailed visualizations of the model's classification behavior
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ConfusionMatrix />
          <FeatureImportance />
        </div>
      </div>
    </section>
  );
};

export default ChartsSection;
