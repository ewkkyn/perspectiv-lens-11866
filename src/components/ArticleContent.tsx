import { useState } from "react";
import { CheckCircle2, AlertTriangle, XCircle, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const ArticleContent = () => {
  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      {/* Header */}
      <header className="mb-8 space-y-4">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span>The Daily Sceptic</span>
          <span>•</span>
          <time dateTime="2025-01-15">January 15, 2025</time>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
          Scientist Questions mRNA Vaccine Safety After New Preprint Analysis
        </h1>
        
        <p className="text-xl text-muted-foreground leading-relaxed">
          A controversial new study links synthetic mRNA vaccines to unexpected cellular changes, sparking debate within the medical community.
        </p>

        <div className="flex items-center gap-4 pt-4">
          <div className="w-10 h-10 rounded-full bg-muted" />
          <div>
            <p className="font-medium text-foreground">Dr. James Mitchell</p>
            <p className="text-sm text-muted-foreground">Science Correspondent</p>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <div className="prose prose-lg max-w-none space-y-6 text-foreground">
        <p className="text-lg leading-relaxed">
          A newly published preprint study has raised questions about <ClaimVerification 
            status="disputed"
            verification="Multiple fact-checkers have found no credible evidence linking mRNA vaccines to long-term cellular harm. The preprint cited was withdrawn in September 2025."
            sources={[
              { name: "FactCheck.org", url: "https://www.factcheck.org" },
              { name: "PolitiFact", url: "https://www.politifact.com" }
            ]}
          >the long-term cellular effects of mRNA vaccines</ClaimVerification>, prompting heated discussion among researchers and healthcare professionals.
        </p>

        <p className="leading-relaxed">
          The study, titled <ClaimVerification 
            status="withdrawn"
            verification="This preprint was withdrawn by the publisher in September 2025 due to concerns about methodology and lack of reproducibility."
            sources={[{ name: "Preprints.org", url: "https://www.preprints.org" }]}
          >"Synthetic mRNA Vaccines and Transcriptomic Dysregulation,"</ClaimVerification> analyzes gene expression patterns in cells exposed to synthetic mRNA. According to the authors, <ClaimVerification 
            status="disputed"
            verification="The claimed transcriptomic changes have not been replicated in peer-reviewed studies and contradict established vaccine safety data."
            sources={[{ name: "AFP Fact Check", url: "https://factcheck.afp.com" }]}
          >certain transcriptomic changes were observed</ClaimVerification> that warrant further investigation.
        </p>

        <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 italic text-muted-foreground">
          "We believe these findings merit serious consideration and independent verification. The scientific community must remain open to questions about vaccine safety."
          <footer className="mt-2 text-sm not-italic">— Dr. Elena Kovacs, Lead Researcher</footer>
        </blockquote>

        <p className="leading-relaxed">
          Critics of the study point out that the research has not undergone peer review and that the observed cellular changes do not necessarily indicate harm. Dr. Sarah Chen, an immunologist at Cambridge University, stated that "extraordinary claims require extraordinary evidence."
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Expert Reactions</h2>

        <p className="leading-relaxed">
          The medical establishment has largely dismissed the findings as preliminary and inconclusive. <ClaimVerification 
            status="verified"
            verification="As of January 2025, over 13 billion COVID-19 vaccine doses have been administered globally with extensive safety monitoring showing favorable risk-benefit profiles."
            sources={[
              { name: "WHO", url: "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/covid-19-vaccines" },
              { name: "CDC", url: "https://www.cdc.gov/coronavirus/2019-ncov/vaccines/safety/safety-of-vaccines.html" }
            ]}
          >Public health officials emphasize that hundreds of millions of vaccine doses have been administered worldwide with established safety profiles.</ClaimVerification>
        </p>

        <p className="leading-relaxed">
          However, some independent researchers argue that all safety signals deserve thorough investigation, regardless of their source. The debate highlights ongoing tensions between those who prioritize vaccine confidence and those who advocate for unrestricted scientific inquiry.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">What This Means</h2>

        <p className="leading-relaxed">
          While the preprint has generated controversy, <ClaimVerification 
            status="verified"
            verification="Major health organizations including WHO, CDC, and EMA continue to affirm that authorized COVID-19 vaccines are safe and effective based on extensive real-world data."
            sources={[
              { name: "WHO", url: "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/covid-19-vaccines" },
              { name: "CDC", url: "https://www.cdc.gov/coronavirus/2019-ncov/vaccines/safety/safety-of-vaccines.html" },
              { name: "EMA", url: "https://www.ema.europa.eu/en/human-regulatory/overview/public-health-threats/coronavirus-disease-covid-19/treatments-vaccines/covid-19-vaccines" }
            ]}
          >health authorities maintain that current vaccines remain safe and effective.</ClaimVerification> The study's authors call for additional research to either confirm or refute their preliminary observations.
        </p>

        <p className="leading-relaxed">
          <ClaimVerification 
            status="false"
            verification="The paper was actually withdrawn in September 2025 and will not undergo peer review. The withdrawal was due to serious methodological concerns."
            sources={[{ name: "Preprints.org", url: "https://www.preprints.org" }]}
          >The paper is expected to undergo formal peer review in the coming months</ClaimVerification>, which will provide greater clarity on the validity of its methodology and conclusions.
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-border">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium">Disclosure:</span> The Daily Sceptic maintains editorial independence and does not accept pharmaceutical advertising.
        </p>
      </footer>
    </article>
  );
};

// Jargon Term Component with Hover Tooltip
const JargonTerm = ({ term, definition, children }: { term: string; definition: string; children?: React.ReactNode }) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={200}>
        <TooltipTrigger asChild>
          <span className="underline decoration-dotted decoration-primary/50 cursor-help hover:decoration-primary transition-colors">
            {children || term}
          </span>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs bg-card border-border">
          <p className="text-sm">{definition}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

// Claim Verification Component
type VerificationStatus = "verified" | "disputed" | "false" | "withdrawn" | "unverified";

const ClaimVerification = ({ 
  status, 
  verification, 
  sources,
  children 
}: { 
  status: VerificationStatus; 
  verification: string; 
  sources: { name: string; url: string }[];
  children: React.ReactNode;
}) => {
  const getStatusConfig = (status: VerificationStatus) => {
    switch (status) {
      case "verified":
        return {
          color: "decoration-green-500",
          hoverColor: "hover:decoration-green-600",
          icon: CheckCircle2,
          iconColor: "text-green-500",
          label: "Verified",
          bgColor: "bg-green-500/10"
        };
      case "disputed":
        return {
          color: "decoration-amber-500",
          hoverColor: "hover:decoration-amber-600",
          icon: AlertTriangle,
          iconColor: "text-amber-500",
          label: "Disputed",
          bgColor: "bg-amber-500/10"
        };
      case "false":
        return {
          color: "decoration-red-500",
          hoverColor: "hover:decoration-red-600",
          icon: XCircle,
          iconColor: "text-red-500",
          label: "False",
          bgColor: "bg-red-500/10"
        };
      case "withdrawn":
        return {
          color: "decoration-red-500",
          hoverColor: "hover:decoration-red-600",
          icon: XCircle,
          iconColor: "text-red-500",
          label: "Withdrawn",
          bgColor: "bg-red-500/10"
        };
      case "unverified":
        return {
          color: "decoration-slate-500",
          hoverColor: "hover:decoration-slate-600",
          icon: Info,
          iconColor: "text-slate-500",
          label: "Unverified",
          bgColor: "bg-slate-500/10"
        };
    }
  };

  const config = getStatusConfig(status);
  const Icon = config.icon;

  return (
    <TooltipProvider>
      <Tooltip delayDuration={200}>
        <TooltipTrigger asChild>
          <span className={`underline decoration-2 ${config.color} ${config.hoverColor} cursor-help transition-colors`}>
            {children}
          </span>
        </TooltipTrigger>
        <TooltipContent className="max-w-md bg-[#232945] border-[#2a3352]">
          <div className="space-y-3">
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-md ${config.bgColor}`}>
              <Icon className={`h-4 w-4 ${config.iconColor}`} />
              <span className="text-sm font-semibold text-white">{config.label}</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">{verification}</p>
            {sources.length > 0 && (
              <div className="pt-2 border-t border-[#2a3352]">
                <p className="text-xs text-slate-400 font-medium mb-1">Sources:</p>
                <div className="text-xs space-y-1">
                  {sources.map((source, index) => (
                    <div key={index}>
                      <a 
                        href={source.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                      >
                        {source.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
