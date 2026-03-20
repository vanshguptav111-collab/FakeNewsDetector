import { ShieldAlert, ShieldCheck, HelpCircle } from "lucide-react";

interface ResultCardProps {
  prediction: "fake" | "real" | "uncertain";
  confidence: number;
}

export function ResultCard({ prediction, confidence }: ResultCardProps) {
  const isReal = prediction === "real";
  const isFake = prediction === "fake";
  
  const icon = isReal ? (
    <ShieldCheck size={32} />
  ) : isFake ? (
    <ShieldAlert size={32} />
  ) : (
    <HelpCircle size={32} />
  );

  const colors = isReal
    ? "bg-green-500/10 border-green-500/20 text-green-500"
    : isFake
    ? "bg-red-500/10 border-red-500/20 text-red-500"
    : "bg-yellow-500/10 border-yellow-500/20 text-yellow-500";

  const label = isReal ? "Likely Real" : isFake ? "Likely Fake" : "Uncertain";

  return (
    <div className={`w-full p-6 rounded-2xl border ${colors.split(" text")[0]} animate-in fade-in slide-in-from-bottom-4 shadow-sm`}>
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-full ${colors}`}>
          {icon}
        </div>
        <div className="flex-1 space-y-2">
          <div>
            <h3 className="text-2xl font-bold flex items-center gap-2">
              {label}
            </h3>
            <p className="text-xl font-medium mt-1">
              <span className={colors.split("bg-")[0]}>
                {confidence}% Reliable
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
