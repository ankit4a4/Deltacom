import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Camera,
  Key,
  ShieldCheck,
  Flame,
  Network,
  CheckCircle,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SecuritySolutions = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".animate-section");

    elements.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const solutions = [
    {
      icon: Camera,
      title: "Video Surveillance Systems",
      description:
        "Advanced CCTV with AI analytics, cloud storage, and real-time monitoring for comprehensive visual security.",
      features: [
        "4K Ultra HD cameras",
        "AI behavior detection",
        "Cloud & on-premise storage",
        "Mobile monitoring",
      ],
    },
    {
      icon: Key,
      title: "Access Control",
      description:
        "Sophisticated entry systems with card readers, biometrics, and time-based access permissions.",
      features: [
        "Multi-factor authentication",
        "Visitor management",
        "Integration with HR systems",
        "Audit trails",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity",
      description:
        "Comprehensive IT security including network protection, endpoint security, and threat monitoring.",
      features: [
        "Network security",
        "Endpoint protection",
        "Threat intelligence",
        "Security training",
      ],
    },
    {
      icon: Flame,
      title: "Intrusion & Fire Protection",
      description:
        "Complete fire safety systems with detection, suppression, and emergency notification capabilities.",
      features: [
        "Smoke & heat detection",
        "Sprinkler systems",
        "Emergency alerts",
        "Code compliance",
      ],
    },
    {
      icon: Network,
      title: "Network Infrastructure",
      description:
        "Robust networking solutions supporting all security systems and business operations.",
      features: [
        "Structured cabling",
        "Wireless networks",
        "Network monitoring",
        "Redundancy planning",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-section">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#013a63] mb-6">
            Complete Security Solutions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From video surveillance to cybersecurity, we provide integrated
            solutions that protect your business comprehensively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div key={index} className="animate-section">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-slate-100">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl inline-flex mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#013a63] mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-slate-600"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecuritySolutions;
