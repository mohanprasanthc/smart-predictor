import { motion } from "framer-motion";

const ConfusionMatrix = () => {
  const matrix = [
    { label: "True Negative", value: 965, predicted: "Ham", actual: "Ham", color: "bg-primary/80" },
    { label: "False Positive", value: 12, predicted: "Spam", actual: "Ham", color: "bg-destructive/40" },
    { label: "False Negative", value: 22, predicted: "Ham", actual: "Spam", color: "bg-destructive/40" },
    { label: "True Positive", value: 116, predicted: "Spam", actual: "Spam", color: "bg-accent/80" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-2xl p-8"
    >
      <h3 className="text-xl font-semibold mb-6 text-center">Confusion Matrix</h3>
      
      <div className="flex justify-center mb-4">
        <div className="text-sm text-muted-foreground font-medium">Predicted</div>
      </div>
      
      <div className="flex items-start gap-4">
        <div className="flex flex-col justify-center h-[200px]">
          <div className="text-sm text-muted-foreground font-medium -rotate-90 whitespace-nowrap">
            Actual
          </div>
        </div>
        
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto">
            <div className="text-center text-sm text-muted-foreground pb-2">Ham</div>
            <div className="text-center text-sm text-muted-foreground pb-2">Spam</div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-2">
              <div className="text-sm text-muted-foreground h-[90px] flex items-center">Ham</div>
              <div className="text-sm text-muted-foreground h-[90px] flex items-center">Spam</div>
            </div>
            
            <div className="grid grid-cols-2 gap-2 flex-1 max-w-xs">
              {matrix.map((cell, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`${cell.color} rounded-xl p-4 h-[90px] flex flex-col items-center justify-center text-center`}
                >
                  <div className="text-2xl font-bold text-foreground">{cell.value}</div>
                  <div className="text-xs text-foreground/70 mt-1">{cell.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center gap-6 mt-8 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-primary/80" />
          <span className="text-muted-foreground">Correct Prediction</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-destructive/40" />
          <span className="text-muted-foreground">Misclassification</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ConfusionMatrix;
