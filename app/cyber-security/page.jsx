"use client";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import CyberHero from "@/components/cybersecurity/CyberHero";
import CyberLandscape from "@/components/cybersecurity/CyberLandscape";
import CybersecurityServices from "@/components/cybersecurity/CybersecurityServices";
import IndustrySpecific from "@/components/cybersecurity/IndustrySpecific";
import InfrastructureServices from "@/components/cybersecurity/InfrastructureServices";
import CyberCTA from "@/components/cybersecurity/CyberCTA";
import CyberSecurityContent from "@/components/cybersecurity/CyberSecurityContent"
import CMMCSection from "@/components/cybersecurity/CMMCSection"

export default function Cybersecurity() {
  return (
    <>
      <CyberHero />
      {/* <CMMCSection /> */}
      <CyberLandscape />
      <CyberSecurityContent/>
      <CybersecurityServices />
      <IndustrySpecific />
      <InfrastructureServices />
      <CyberCTA />
    </>
  );
}
