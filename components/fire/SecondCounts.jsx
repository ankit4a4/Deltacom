import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, ShieldAlert } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SecondCounts = () => {
  const sectionRef = useRef(null);

  const fireStats = [
    {
      number: "60",
      unit: "seconds",
      description: "Fire doubles in size every minute",
    },
    {
      number: "3-5",
      unit: "minutes",
      description: "Average time for fire to become deadly",
    },
    {
      number: "30",
      unit: "seconds",
      description: "Time to evacuate once alarm sounds",
    },
  ];

  useEffect(() => {
    const sections = sectionRef.current.querySelectorAll(".animate-section");

    sections.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white animate-sections">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-section">
          <Clock className="h-16 w-16 text-[#427DF6] mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-[#013a63] mb-6">
            Every Second Counts
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
            Fire emergencies develop rapidly. Understanding the timeline is
            critical to effective Intrusion & Fire Protection planning.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fireStats.map((stat, index) => (
              <div key={index} className="animate-section">
                <div className="border-2 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl lg:text-5xl font-bold text-[#427DF6] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-[#013a63] mb-3">
                    {stat.unit}
                  </div>
                  <div className="text-slate-600">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-section bg-[#0F172A] rounded-3xl p-8 lg:p-12 text-center text-white">
          <ShieldAlert className="h-16 w-16 mx-auto mb-6 text-orange-200" />
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Rapid Response Intrusion & Fire Protection
          </h3>
          <p className="text-lg text-gray-400 font-light leading-relaxed">
            {`Deltacom Security's advanced Intrusion & Fire Protection systems deliver rapid
            fire detection and immediate emergency response to safeguard lives
            and property. Our state-of-the-art fire alarm systems, automatic
            sprinkler installations, and intelligent smoke detection technology
            provide the fastest possible threat identification. Every second
            counts during a fire emergency, and our NFPA-certified fire safety
            systems are engineered to detect fires at the earliest stages. With
            24/7 monitoring and instant notification capabilities, our fire
            protection solutions give you critical extra time for safe
            evacuation and emergency response. Trust Deltacom Security's
            comprehensive fire safety systems to protect your commercial,
            industrial, or institutional facility with proven reliability.
            Contact our Intrusion & Fire Protection experts today for a professional fire
            safety assessment and custom system design.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecondCounts;
