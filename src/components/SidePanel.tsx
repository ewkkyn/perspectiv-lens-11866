import { X, ChevronDown, ChevronUp, Info } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import perspectivLogo from "@/assets/perspectiv-logo.png";
interface SidePanelProps {
  isOpen: boolean;
  onClose: () => void;
}
export const SidePanel = ({
  isOpen,
  onClose
}: SidePanelProps) => {
  const [showBreakdown, setShowBreakdown] = useState(false);
  if (!isOpen) return null;
  return (
      <aside className={`
          fixed top-0 right-0 h-full w-full md:w-[480px] 
          bg-[#1a1f3a] border-l border-[#2a3352]
          shadow-2xl z-50
          transform transition-transform duration-300 ease-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          overflow-y-auto
        `} role="complementary" aria-label="Perspectiv analysis panel">
        {/* Header */}
        <div className="sticky top-0 border-b border-[#2a3352] p-6 flex items-center justify-between z-10 bg-[#1a1f3a]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent/60">
              <img 
                src={perspectivLogo} 
                alt="Perspectiv" 
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-white">Perspectiv Analysis</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close panel" className="hover:bg-[#2a3352] text-slate-400 hover:text-white">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 bg-[#1a1f3a]">
          {/* Article Context Section */}
          <section aria-labelledby="context-heading">
            <h3 id="context-heading" className="text-xl font-semibold mb-3 text-white">Article Context</h3>
            
            <div className="space-y-3">
              {/* 1. Confidence Rating */}
              <Card className="p-5 space-y-4 border border-[#2a3352] bg-[#232945] rounded-xl">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 id="confidence-heading" className="text-lg font-semibold mb-2 flex items-center gap-2 text-white">
                      Confidence Rating
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button type="button" className="inline-flex items-center">
                              <Info className="h-4 w-4 text-slate-400 cursor-help hover:text-slate-300" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs bg-[#2a3352] border-[#3a4362] text-slate-200">
                            <p>Reflects how well-supported the article's main claims are based on available evidence, sourcing quality, and expert consensus.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </h3>
                    <div className="mb-3">
                      <div className="relative">
                        {/* Confidence Bar */}
                        <div className="h-8 rounded-full bg-gradient-to-r from-red-500/20 via-yellow-500/20 to-green-500/20 border border-[#3a4362] flex items-center justify-between px-3">
                          <span className="text-[10px] font-medium text-slate-400">Very Low</span>
                          <span className="text-[10px] font-bold text-red-400 bg-red-500/30 px-2 py-0.5 rounded-full">Low</span>
                          <span className="text-[10px] font-medium text-slate-400">Medium</span>
                          <span className="text-[10px] font-medium text-slate-400">High</span>
                          <span className="text-[10px] font-medium text-slate-400">Very High</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-slate-300">
                  This article relies on a withdrawn preprint; experts rate confidence in its main claim as very low.
                </p>

                <Button variant="ghost" size="sm" onClick={() => setShowBreakdown(!showBreakdown)} className="w-full justify-between bg-[#2a3352] hover:bg-[#3a4362] text-white border border-[#3a4362]">
                  <span>Detailed breakdown</span>
                  {showBreakdown ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </Button>

                {showBreakdown && <div className="space-y-4 pt-2 animate-in slide-in-from-top-2 duration-300">
                    <div className="space-y-3">
                      <MetricRow 
                        label="Source Reliability" 
                        score={25} 
                        explanation="Relies on a withdrawn preprint and lacks peer-reviewed evidence." 
                        sourceUrl="#"
                      />
                      <MetricRow 
                        label="Fact-Check Consistency" 
                        score={30} 
                        explanation="Key claims contradicted by multiple independent fact-checks." 
                        sourceUrl="#"
                      />
                      <MetricRow 
                        label="Expert Consensus" 
                        score={20} 
                        explanation="Contradicts prevailing scientific understanding of mRNA vaccine safety." 
                        sourceUrl="#"
                      />
                    </div>
                  </div>}
              </Card>

              {/* 2. Editorial Orientation */}
              <Card className="p-5 space-y-3 bg-[#232945] border border-[#2a3352] rounded-xl">
                <h3 id="orientation-heading" className="text-lg font-semibold text-white">Editorial Orientation</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-[#2a3352] text-slate-300 border-[#3a4362] hover:bg-[#2a3352]">Center-Right</Badge>
                <Badge variant="secondary" className="bg-[#2a3352] text-slate-300 border-[#3a4362] hover:bg-[#2a3352]">Contrarian</Badge>
                <Badge variant="secondary" className="bg-[#2a3352] text-slate-300 border-[#3a4362] hover:bg-[#2a3352]">Independent commentary</Badge>
              </div>
                <p className="text-sm leading-relaxed text-slate-300">
                  Emphasizes freedom of inquiry and questions institutional consensus. Frames the discussion as exploring whether established health organizations may overlook evidence that challenges current scientific understanding.
                </p>
              </Card>
            </div>
          </section>

          {/* 3. Other Perspectives */}
          <section aria-labelledby="perspectives-heading">
            <h3 id="perspectives-heading" className="text-xl font-semibold mb-3 text-white">How others cover this</h3>
            
            <div className="space-y-3">
              <PerspectiveCard 
                outlet="The BMJ (UK Medical Journal)" 
                url="#" 
                confidenceLevel="very-high" 
                confidenceScore={96}
                summary="Peer-reviewed medical journal providing comprehensive expert analysis with multiple studies, clearly distinguishing verified facts from unsubstantiated claims."
                confidenceDescription="This article provides comprehensive expert analysis, cites multiple peer-reviewed studies, and clearly distinguishes between verified facts and unsubstantiated claims."
                orientation={["Center-left", "Institutional", "Academic"]}
                framingDescription="Provides evidence-based analysis, examining regulatory responses and medical community consensus. Emphasizes the lack of peer-reviewed support for disputed claims and focuses on established scientific methodology for evaluating vaccine safety studies."
              />

              <PerspectiveCard 
                outlet="Sky News (UK)" 
                url="#" 
                confidenceLevel="high" 
                confidenceScore={88}
                summary="Center-right mainstream broadcast balancing vaccine-skeptic claims with official responses and expert fact-checking of disputed information."
                confidenceDescription="This article balances vaccine-skeptic claims with official responses and fact-checking. Includes expert commentary and clearly identifies disputed information."
                orientation={["Center-right", "Mainstream", "Broadcast media"]}
                framingDescription="Frames the story around public trust and the political dimensions of health communication. Presents official responses to disputed claims alongside expert commentary, focusing on how misinformation affects public confidence in health institutions."
              />

              <PerspectiveCard 
                outlet="The Exposé / Daily Telegraph NZ" 
                url="#" 
                confidenceLevel="low" 
                confidenceScore={23}
                summary="Far-right fringe outlet presenting alarmist claims about vaccine harm as established fact, relying on withdrawn preprint without peer review."
                confidenceDescription="This article makes sweeping claims about vaccine harm without citing peer-reviewed sources or expert verification. Relies on withdrawn preprint as primary evidence."
                orientation={["Far-right", "Fringe", "Advocacy blog"]}
                framingDescription="Presents vaccine safety concerns as established fact, arguing that health authorities have suppressed clear evidence of harm. Uses emotionally urgent language and frames mainstream health organizations as deliberately ignoring safety signals. Unlike sources that present disputed findings as requiring further investigation, this outlet treats unverified claims as conclusive."
              />
            </div>
          </section>

          {/* 4. Verification Trail */}
          <section aria-labelledby="verification-heading">
            <h3 id="verification-heading" className="text-xl font-semibold mb-4 text-white">Verification Trail</h3>
            <Card className="p-5 space-y-4 bg-[#232945] border border-[#2a3352] rounded-xl">
              <p className="text-sm text-slate-400">
                Check the underlying evidence and independent assessments.
              </p>
              
              <div className="space-y-3">
                <VerificationLink 
                  icon="✅" 
                  source="FactCheck.org" 
                  title="COVID-19 Vaccines Have Not Been Shown to Alter DNA or Cause Cancer" 
                  url="#"
                  description="Reviews scientific literature and expert consensus confirming no DNA alteration or cancer causation from mRNA vaccines."
                />
                <VerificationLink 
                  icon="✅" 
                  source="PolitiFact" 
                  title="Biden, 'Turbo Cancer,' and mRNA Vaccines" 
                  url="#"
                  description="Fact-checks viral claims about 'turbo cancer,' finding no credible evidence linking COVID-19 vaccines to increased cancer rates."
                />
                <VerificationLink 
                  icon="✅" 
                  source="AFP Fact Check" 
                  title="Study Does Not Establish COVID-19 Vaccine Link to Cancer" 
                  url="#"
                  description="Explains methodological flaws in the preprint study and confirms no established link between vaccines and cancer from peer-reviewed research."
                />
                <VerificationLink 
                  icon="🧪" 
                  source="Primary Source" 
                  title="Withdrawn Preprint — 'Synthetic mRNA Vaccines and Transcriptomic Dysregulation,' Preprints.org (July 2025 / Withdrawn Sept 2025)" 
                  url="#"
                  description="The original non-peer-reviewed preprint claiming vaccine-cancer links, withdrawn by authors due to methodological concerns and lack of validation."
                  isWithdrawn 
                />
              </div>
            </Card>
          </section>
        </div>
      </aside>
  );
};

// Helper Components
const MetricRow = ({
  label,
  score,
  explanation,
  sourceUrl
}: {
  label: string;
  score: number;
  explanation: string;
  sourceUrl: string;
}) => <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="font-medium text-white">{label}</span>
      <span className="text-slate-400">{score} / 100</span>
    </div>
    <Progress value={score} className="h-2" />
    <p className="text-xs text-slate-400">
      {explanation}{" "}
      <a href={sourceUrl} className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
        Source
      </a>
    </p>
  </div>;
const PerspectiveCard = ({
  outlet,
  url,
  confidenceLevel,
  confidenceScore,
  confidenceDescription,
  orientation,
  framingDescription,
  summary
}: {
  outlet: string;
  url: string;
  confidenceLevel: "very-low" | "low" | "medium" | "high" | "very-high";
  confidenceScore: number;
  confidenceDescription: string;
  orientation: string[];
  framingDescription: string;
  summary: string;
}) => {
  const getHighlightColor = () => {
    if (confidenceLevel === "very-low" || confidenceLevel === "low") return "text-red-400 bg-red-500/30";
    if (confidenceLevel === "medium") return "text-yellow-400 bg-yellow-500/30";
    return "text-green-400 bg-green-500/30";
  };

  return (
    <Card className="p-5 space-y-4 border border-[#2a3352] bg-[#232945] rounded-xl">
      <div className="space-y-3">
        <div className="space-y-2">
          <h4 className="font-semibold text-white text-lg">{outlet}</h4>
          <a href={url} className="text-sm text-accent hover:underline inline-flex items-center gap-1" target="_blank" rel="noopener noreferrer">
            Read full article ▸
          </a>
        </div>
        
        {/* Confidence indicator */}
        <div className="space-y-1.5">
          <div className="relative">
            <div className="h-6 rounded-full bg-gradient-to-r from-red-500/20 via-yellow-500/20 to-green-500/20 border border-[#3a4362] flex items-center justify-between px-2.5">
              <span className={`text-[9px] font-medium ${confidenceLevel === "very-low" ? getHighlightColor() + " px-1.5 py-0.5 rounded-full" : "text-slate-500"}`}>Very Low</span>
              <span className={`text-[9px] font-medium ${confidenceLevel === "low" ? getHighlightColor() + " px-1.5 py-0.5 rounded-full" : "text-slate-500"}`}>Low</span>
              <span className={`text-[9px] font-medium ${confidenceLevel === "medium" ? getHighlightColor() + " px-1.5 py-0.5 rounded-full" : "text-slate-500"}`}>Medium</span>
              <span className={`text-[9px] font-medium ${confidenceLevel === "high" ? getHighlightColor() + " px-1.5 py-0.5 rounded-full" : "text-slate-500"}`}>High</span>
              <span className={`text-[9px] font-medium ${confidenceLevel === "very-high" ? getHighlightColor() + " px-1.5 py-0.5 rounded-full" : "text-slate-500"}`}>Very High</span>
            </div>
          </div>
        </div>
      </div>

      {/* Confidence Rating Details */}
      <div className="space-y-2">
        <h5 className="text-sm font-semibold text-white">Why this confidence rating?</h5>
        <p className="text-sm leading-relaxed text-slate-300">{confidenceDescription}</p>
      </div>

      {/* Editorial Orientation */}
      <div className="space-y-2">
        <h5 className="text-sm font-semibold text-white">Editorial Orientation</h5>
        <div className="flex flex-wrap gap-2">
          {orientation.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-[#2a3352] text-slate-300 border-[#3a4362] hover:bg-[#2a3352]">{tag}</Badge>
          ))}
        </div>
        <p className="text-sm leading-relaxed text-slate-300">{framingDescription}</p>
      </div>
    </Card>
  );
};
const VerificationLink = ({
  icon,
  source,
  title,
  url,
  description,
  isWithdrawn = false
}: {
  icon: string;
  source: string;
  title: string;
  url: string;
  description: string;
  isWithdrawn?: boolean;
}) => <div className="flex gap-3 items-start">
    <span className="text-lg shrink-0">{icon}</span>
    <div className="flex-1 space-y-1">
      <p className="text-sm font-medium text-white">{source}</p>
      <a href={url} className="text-xs hover:underline text-accent block" target="_blank" rel="noopener noreferrer">
        {title}
      </a>
      <p className="text-xs text-slate-400 leading-relaxed">{description}</p>
    </div>
  </div>;