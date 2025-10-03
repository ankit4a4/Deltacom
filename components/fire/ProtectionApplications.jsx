import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProtectionApplications = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sections = sectionRef.current.querySelectorAll(".animate-section");

    sections.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  const applications = [
    {
      title: "Commercial Buildings",
      description:
        "Comprehensive Intrusion & Fire Protection for office buildings, retail spaces, and commercial facilities.",
      icon: "🏢",
    },
    {
      title: "Industrial Facilities",
      description:
        "Specialized fire suppression for manufacturing, warehousing, and industrial operations.",
      icon: "🏭",
    },
    {
      title: "Healthcare Facilities",
      description:
        "Advanced fire safety systems designed for hospitals, clinics, and medical facilities.",
      icon: "🏥",
    },
    {
      title: "Educational Institutions",
      description:
        "School and university Intrusion & Fire Protection systems with emergency evacuation capabilities.",
      icon: "🏫",
    },
    {
      title: "Residential Properties",
      description:
        "Multi-family housing and residential complex Intrusion & Fire Protection solutions.",
      icon: "🏠",
    },
    {
      title: "Data Centers",
      description:
        "Clean agent suppression systems specifically designed to protect critical IT infrastructure.",
      icon: "💻",
    },
  ];

  return (
    <section className="py-20 bg-white animate-sections" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-section">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#013a63] mb-6">
            Intrusion & Fire Protection Applications
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Specialized Intrusion & Fire Protection solutions tailored to different facility
            types and risk profiles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <div key={index} className="animate-section">
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-lg transition-all duration-300 text-center h-full">
                <div className="text-4xl mb-4">{app.icon}</div>
                <h3 className="text-xl font-bold text-[#013a63] mb-3">
                  {app.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {app.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProtectionApplications;
