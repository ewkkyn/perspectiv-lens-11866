import { useState } from "react";
import { ArticleContent } from "@/components/ArticleContent";
import { FloatingButton } from "@/components/FloatingButton";
import { SidePanel } from "@/components/SidePanel";

const Index = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Main Article - shifts left when panel opens */}
      <main className={`flex-1 transition-all duration-300 ${isPanelOpen ? 'md:mr-[480px]' : 'mr-0'}`}>
        <ArticleContent />
      </main>

      {/* Floating Perspectiv Button */}
      <FloatingButton 
        onClick={() => setIsPanelOpen(!isPanelOpen)}
        isActive={isPanelOpen}
      />

      {/* Side Panel */}
      <SidePanel 
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
      />
    </div>
  );
};

export default Index;
