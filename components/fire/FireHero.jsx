import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, AlertTriangle } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import HeroImage from "../../public/images/fire/1.webp";

gsap.registerPlugin(ScrollTrigger);

const FireHero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".animate-section");
    elements.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative mt-20 md:mt-[120px] py-20" ref={sectionRef}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          height={100}
          width={100}
          src={HeroImage}
          alt="Intrusion & Fire Protection Background"
          className="w-full h-full object-cover"
        />
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-6 animate-section">
            <AlertTriangle className="h-5 w-5 text-orange-200 mr-2" />
            <span className="text-orange-100 font-medium">
              Critical Life Safety Systems
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 animate-section">
            <span>Intrusion & Fire Protection</span> Systems
          </h1>

          {/* Paragraph */}
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8 animate-section">
            Because fire doubles in size every minute, rapid detection and
            response can mean the difference between a minor incident and a
            catastrophic loss. Our Intrusion & Fire Protection systems provide critical
            timing advantages.
          </p>

          {/* Button */}
          <Link
            href="/contact"
            className="bg-white border border-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center animate-section"
          >
            <span className="bg-gradient-to-r from-[#427DF6] to-[#7826CF] bg-clip-text text-transparent">
              Get Fire Safety Assessment
            </span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FireHero;
