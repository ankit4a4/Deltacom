import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurJourney = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading + description
      gsap.fromTo(
        ".animate-section",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const milestones = [
    { year: "2000", event: "Deltacom Security Founded" },
    { year: "2003", event: "Secured First Major Residential Contract" },
    { year: "2007", event: "Expanded Services Across Virginia & Maryland" },
    { year: "2010", event: "Achieved 100+ Successful Installations" },
    { year: "2014", event: "Awarded First Government Security Contract" },
    { year: "2016", event: "Launched Smart Home Security Solutions" },
    { year: "2018", event: "Expanded to Cybersecurity Services" },
    { year: "2020", event: "500+ Installations Completed" },
    { year: "2022", event: "Added Intrusion & Fire Protection Systems" },
    { year: "2024", event: "1000+ Satisfied Clients" },
  ];

  return (
    <section ref={containerRef} className="py-20 bg-white animate-sections">
      <div className="text-center max-w-7xl mx-auto pb-10 px-4 sm:px-6 lg:px-8 space-y-2">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#013a63] pb-3">
          Strategic Cyber Security Partnership for Future-Ready Protection
        </h1>
        <p className="pb-3 text-lg text-black/80">
          Deltacom Security delivers comprehensive long-term cyber security
          solutions that evolve with emerging threats and technology
          advancements. Our expert team collaborates with industry-leading
          technology partners to provide cutting-edge protection strategies
          tailored to your business requirements. We conduct thorough
          assessments of your unique security landscape and develop customized
          defense plans that grow with your organization. Through continuous
          monitoring and strategic planning, we ensure your digital assets
          remain protected against current and future cyber threats. Our
          proactive approach combines advanced threat intelligence with proven
          security frameworks to create robust, scalable protection systems.
          Partner with Deltacom Security for enterprise-grade cyber security
          solutions that provide lasting peace of mind and business continuity.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-section">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#013a63] mb-6">
            Our Journey
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {`From our founding to today, we've consistently grown and evolved to meet 
            the changing security needs of our clients.`}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-[#8B3AEA] transform lg:-translate-x-0.5"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center animate-section ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-[#8B3AEA] rounded-full transform lg:-translate-x-2 z-10"></div>

                {/* Milestone Card */}
                <div
                  className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"
                  }`}
                >
                  <div className="ml-12 lg:ml-0 bg-white rounded-2xl p-6 shadow-lg">
                    <div className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#427DF6] to-[#7826CF] bg-clip-text text-transparent">
                      {milestone.year}
                    </div>
                    <div className="text-lg font-semibold text-slate-900">
                      {milestone.event}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
