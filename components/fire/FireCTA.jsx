"use client";
import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const FireCTA = () => {
  useEffect(() => {
    gsap.fromTo(
      ".fire-animate",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".fire-animate",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="md:py-[100px] py-10 bg-white fire-animate">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#013a63] mb-6">
          Don&apos;t Wait - Fire Won&apos;t Wait
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Every facility needs proper Intrusion & Fire Protection. Get a professional
          assessment and ensure your people and property are protected.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-[#427DF6] px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center border border-gray-200 shadow-md"
          >
            <span className="bg-gradient-to-r from-[#427DF6] to-[#7826CF] bg-clip-text text-transparent">
              Schedule Fire Safety Assessment
            </span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FireCTA;
