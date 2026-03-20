import { FileText, CheckCircle2 } from "lucide-react";

interface ComparisonBoxProps {
  userInput: string;
  verifiedSummary: string;
}

export function ComparisonBox({ userInput, verifiedSummary }: ComparisonBoxProps) {
  return (
    <div className="w-full space-y-4 animate-in fade-in slide-in-from-bottom-6 mt-8">
      <h3 className="text-xl font-bold flex items-center gap-2">
         Fact Comparison
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 or gap-6">
        {/* User Input Column */}
        <div className="bg-card border rounded-2xl p-6 shadow-sm flex flex-col items-start gap-4 relative overflow-hidden">
          <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-slate-500 to-slate-400 left-0"></div>
          <div className="flex items-center gap-3 text-slate-400">
            <FileText size={20} />
            <h4 className="font-semibold text-lg">Your Input</h4>
          </div>
          <p className="text-muted-foreground leading-relaxed italic border-l-2 border-slate-500/30 pl-4 w-full break-words">
            "{userInput}"
          </p>
        </div>

        {/* Verified Summary Column */}
        <div className="bg-card border rounded-2xl p-6 shadow-sm flex flex-col items-start gap-4 relative overflow-hidden">
          <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-blue-500 to-sky-400 left-0"></div>
          <div className="flex items-center gap-3 text-blue-400">
            <CheckCircle2 size={20} />
            <h4 className="font-semibold text-lg">Verified Summary</h4>
          </div>
          <p className="text-foreground leading-relaxed w-full break-words">
            {verifiedSummary}
          </p>
        </div>
      </div>
    </div>
  );
}
