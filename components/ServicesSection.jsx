"use client";

import { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, ArrowRight, Sparkles } from "lucide-react";
import { Cctv, Key, BellElectric, Network, Truck } from "lucide-react";
import ServiceCard from "./ServiceCard";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Memoized services data outside component
const SERVICES_DATA = [
  {
    id: "video-surveillance",
    slug: "/services/video-surveillance",
    title: "Video Surveillance",
    subtitle: "CCTV Systems",
    description:
      "Advanced cloud and on-premise solutions with smart analytics and triple redundancy.",
    icon: Cctv,
    backgroundImage: "/images/services/camera2.jpg",
  },
  {
    id: "access-control",
    slug: "/services/access-control",
    title: "Access Control",
    subtitle: "Security Systems",
    description:
      "Scalable access systems including Brivo enterprise solutions and advanced card access control.",
    icon: Key,
    backgroundImage: "/images/services/access.jpg",
  },
  {
    id: "cybersecurity",
    slug: "/cyber-security",
    title: "Cybersecurity",
    subtitle: "IT Services",
    description:
      " Deltacom is a CMMC-certified cybersecurity provider, delivering compliance and readiness services to support Department of Defense contractors and subcontractors.",
    icon: Shield,
    backgroundImage: "/images/newImags/image1.png",
  },
  {
    id: "fire-protection",
    slug: "/services/fire-protection",
    title: "Fire Protection",
    subtitle: "Safety Systems",
    description:
      "Critical fire protection with rapid response - fire doubles in size every minute.",
    icon: BellElectric,
    backgroundImage: "/images/services/fire.jpg",
  },
  {
    id: "networking",
    slug: "/services/networking-solutions",
    title: "Networking",
    subtitle: "Infrastructure",
    description:
      "Complete network design and deployment for wired and wireless networks across all sites.",
    icon: Network,
    backgroundImage: "/images/services/networking-background.png",
  },
  {
    id: "mobile-surveillance",
    slug: "/services/mobile-surveillance",
    title: "Mobile Surveillance",
    subtitle: "Rapid Deployment",
    description:
      "Rapid deployment systems for temporary installations and high-risk environments.",
    icon: Truck,
    backgroundImage: "/images/services/surv.jpg",
  },
];

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const servicesRef = useRef(null);
  const decorRef = useRef(null);

  // Memoize services to prevent recreation
  const services = useMemo(() => SERVICES_DATA, []);

  useEffect(() => {
    let ctx;

    const initAnimations = () => {
      ctx = gsap.context(() => {
        // Floating animation for decorative elements
        if (decorRef.current?.children) {
          gsap.set(decorRef.current.children, { rotation: 0 });
          gsap.to(decorRef.current.children, {
            rotation: 360,
            duration: 20,
            ease: "none",
            repeat: -1,
            stagger: 2,
          });
        }

        // Enhanced title animation
        if (titleRef.current) {
          gsap.fromTo(
            titleRef.current.children,
            { opacity: 0, y: 50, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              ease: "power3.out",
              stagger: 0.2,
              scrollTrigger: {
                trigger: titleRef.current,
                start: "top 85%",
                once: true,
              },
            }
          );
        }

        // Enhanced services animation
        if (servicesRef.current?.children) {
          gsap.fromTo(
            servicesRef.current.children,
            { opacity: 0, y: 40, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: servicesRef.current,
                start: "top 80%",
                once: true,
              },
            }
          );
        }
      }, sectionRef);
    };

    requestAnimationFrame(initAnimations);

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden"
    >
      {/* Modern Background Elements */}
      <div ref={decorRef} className="absolute inset-0 pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-gradient-to-br from-blue-100/40 to-transparent border border-blue-200/30 backdrop-blur-3xl"></div>
        <div className="absolute top-40 right-32 w-32 h-32 rounded-2xl bg-gradient-to-br from-[#013a63]/5 to-transparent rotate-12 backdrop-blur-sm"></div>
        <div className="absolute bottom-32 left-10 w-56 h-56 rounded-full bg-gradient-to-tr from-gray-100/60 to-transparent border border-gray-200/40 backdrop-blur-2xl"></div>
        <div className="absolute bottom-20 left-32 w-20 h-20 rounded-xl bg-gradient-to-br from-blue-50/80 to-transparent rotate-45"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(1,58,99,0.03)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-100/20 to-purple-100/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-gray-100/30 to-blue-100/20 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <header ref={titleRef} className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-md rounded-full border border-gray-200/50 shadow-lg shadow-gray-100/50 text-sm text-[#013a63] mb-8 hover:shadow-xl transition-all duration-300">
            <Shield className="w-4 h-4" />
            <span className="font-medium">Security Solutions</span>
            <Sparkles className="w-4 h-4 text-blue-400" />
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold text-[#013a63] mb-8 leading-[0.95] tracking-tight">
            <span className="block">Comprehensive</span>
            <span className="block bg-gradient-to-r from-[#013a63] via-[#01497c] to-[#0056b3] bg-clip-text text-transparent">
              Security Services
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Protecting your people, property, and operations with{" "}
            <span className="font-medium text-[#013a63]">cutting-edge technology</span>{" "}
            across the  US.
          </p>
        </header>

        {/* Enhanced Services Grid */}
        <div
          ref={servicesRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-24">
          <div className="max-w-2xl mx-auto">
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-gray-600 text-sm bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>24/7 Monitoring</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Enterprise Solutions</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span>Rapid Response</span>
              </div>
            </div>

            {/* Main CTA */}
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#013a63] to-[#01497c] text-[#f1f1f1] rounded-2xl hover:shadow-2xl hover:shadow-[#013a63]/20 transition-all duration-500 font-semibold text-lg relative overflow-hidden"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <span className="relative">Get Free Security Assessment</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative" />
            </Link>

            {/* Secondary info */}
            <p className="text-sm text-gray-500 mt-4 font-light">
              Free consultation • No obligation • Expert analysis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
