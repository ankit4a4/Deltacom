import React, { useEffect, useRef } from "react";
import { Eye, Siren, Zap, Settings, CheckCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RapidResponse = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".animate-section");
    gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const systems = [
    {
      icon: Eye,
      title: "Fire Detection Systems",
      description:
        "Advanced smoke, heat, and flame detection with intelligent monitoring and rapid response capabilities.",
      features: [
        "Multi-sensor smoke detection",
        "Heat and flame sensors",
        "Carbon monoxide detection",
        "Intelligent fire algorithms",
        "False alarm reduction",
        "Wireless & hardwired options",
      ],
    },
    {
      icon: Siren,
      title: "Alarm & Notification",
      description:
        "Comprehensive alerting systems ensuring everyone is notified immediately when fire is detected.",
      features: [
        "Audible and visual alarms",
        "Voice evacuation systems",
        "Mass notification integration",
        "Mobile alert systems",
        "Emergency lighting",
        "ADA compliant notifications",
      ],
    },
    {
      icon: Zap,
      title: "Suppression Systems",
      description:
        "Automatic fire suppression including sprinklers, clean agents, and specialized suppression systems.",
      features: [
        "Wet & dry sprinkler systems",
        "Pre-action suppression",
        "Clean agent systems",
        "Kitchen hood suppression",
        "Server room protection",
        "Industrial suppression",
      ],
    },
    {
      icon: Settings,
      title: "Monitoring & Maintenance",
      description:
        "24/7 monitoring services with regular inspections and maintenance to ensure optimal performance.",
      features: [
        "24/7 central station monitoring",
        "Regular system inspections",
        "Preventive maintenance",
        "Code compliance testing",
        "Emergency repair service",
        "Detailed reporting",
      ],
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-slate-50 animate-sections">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-section">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#013a63] mb-6">
            Intrusion & Fire Protection Systems
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From detection to suppression, our integrated Intrusion & Fire Protection
            solutions provide complete coverage and peace of mind for your
            facility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {systems.map((system, index) => {
            const IconComponent = system.icon;
            return (
              <div key={index} className="animate-section">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="p-3 bg-[#427DF6] rounded-2xl inline-flex mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#013a63] mb-4">
                    {system.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {system.description}
                  </p>
                  <ul className="space-y-2">
                    {system.features.map((feature, featureIndex) => (
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

export default RapidResponse;
