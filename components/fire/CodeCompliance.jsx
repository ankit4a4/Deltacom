import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flame } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CodeCompliance = () => {
  useEffect(() => {
    gsap.fromTo(
      ".animate-section",
      {
        opacity: 0,
        y: 50,
      },
      {
        scrollTrigger: {
          trigger: ".animate-sections",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-[#013a63] via-[#01497c] to-[#013a63] animate-sections">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-section opacity-0 translate-y-12">
          <Flame className="h-16 w-16 text-[#427DF6] mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Code Compliance & Certification
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            All our Intrusion & Fire Protection installations meet or exceed local fire
            codes and NFPA standards, ensuring your facility is fully compliant
            and properly protected.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="glass-dark rounded-2xl p-6 text-center animate-section opacity-0 translate-y-12">
              <div className="text-2xl font-bold text-white mb-2">NFPA</div>
              <div className="text-gray-300 text-sm">Standards Compliant</div>
            </div>
            <div className="glass-dark rounded-2xl p-6 text-center animate-section opacity-0 translate-y-12">
              <div className="text-2xl font-bold text-white mb-2">Local</div>
              <div className="text-gray-300 text-sm">Fire Code Compliance</div>
            </div>
            <div className="glass-dark rounded-2xl p-6 text-center animate-section opacity-0 translate-y-12">
              <div className="text-2xl font-bold text-white mb-2">UL</div>
              <div className="text-gray-300 text-sm">Listed Equipment</div>
            </div>
            <div className="glass-dark rounded-2xl p-6 text-center animate-section opacity-0 translate-y-12">
              <div className="text-2xl font-bold text-white mb-2">ADA</div>
              <div className="text-gray-300 text-sm">
                Accessibility Compliant
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeCompliance;
