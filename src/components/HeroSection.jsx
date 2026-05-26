import { ArrowDown } from "lucide-react";
import myimage from "@/assets/face-outline.png";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      {/* Left decorative outline image (transparent background, subtle) */}
      <img
        // src="/face-outline.png"
        src={myimage}
        alt="."
        className="pointer-events-none select-none absolute top-1/2 -translate-y-1/2 left-0 w-2/5 opacity-20 bg-transparent"
        style={{ filter: "grayscale(100%) contrast(0%)", mixBlendMode: "normal", backgroundColor: "transparent" }}
      />

      {/* Right decorative outline image (mirrored, transparent background, subtle) */}
      <img
        // src="/face-outline.png"
        src={myimage}
        alt="."
        className="pointer-events-none select-none absolute top-1/2 -translate-y-1/2 right-0 w-2/5 opacity-20 bg-transparent"
        style={{ transform: "scaleX(-1)", filter: "grayscale(100%) contrast(0%)", mixBlendMode: "normal", backgroundColor: "transparent" }}
      />
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Akaash
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Sharma
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Software engineer focused on scalable systems, AI-driven tools, and impactful product 
            experiences — with a creative side shaped by music, mountain treks, and 
            a habit of exploring ideas both in and beyond tech.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
