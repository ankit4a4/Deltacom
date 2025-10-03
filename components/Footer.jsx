'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Image from 'next/image';
import {
  Shield,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ArrowRight,
  Linkedin,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Footer = () => {
  const footerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer content animation
      gsap.fromTo(contentRef.current?.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
            once: true
          }
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Commercial', href: '/commercial' },
    { name: 'Intrusion & Fire Protection', href: '/fire' },
    { name: 'Cyber Security', href: '/cybersecurity' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    { name: 'Video Surveillance', href: '/services/video-surveillance' },
    { name: 'Access Control', href: '/services/access-control' },
    { name: 'Cybersecurity', href: '/services/cybersecurity' },
    { name: 'Intrusion & Fire Protection', href: '/services/fire-protection' },
    { name: 'Networking', href: '/services/networking-solutions' },
    { name: 'Mobile Surveillance', href: '/services/mobile-surveillance' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-400' },
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-400' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-cyan-400' }
  ];

  return (
    <footer ref={footerRef} className="relative bg-gradient-to-br from-[#013a63] via-[#01497c] to-[#013a63] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-white/5 bg-gradient-to-br from-blue-500/5 to-purple-500/5 backdrop-blur-3xl"></div>
        <div className="absolute bottom-32 left-16 w-48 h-48 rounded-2xl border border-white/5 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 backdrop-blur-3xl rotate-45"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Content */}
        <div ref={contentRef} className="py-16 lg:py-20">

          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">

            {/* Company Info */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-3">
                <div className=" rounded-xl">
                  <Image height={100} width={100}  src='/images/logo.png' className='w-20'></Image>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Deltacom Security</h3>
                  <p className="text-gray-400 text-sm">4000 Legato Road Suite 1100, Fairfax, VA 22033</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Serving Washington DC, Maryland, Virginia, and across the USA, your most trusted provider of end-to-end smart security and IT solutions, protecting what matters most to your business.
              </p>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 font-medium"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-100 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-gray-100 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3">
              <h4 className="text-lg font-semibold text-white mb-6">Get In Touch</h4>
              <div className="space-y-4">

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white/5 rounded-lg">
                    <MapPin className="w-4 h-4 text-gray-100" />
                  </div>
                  <div>
                    <p className="text-gray-100 text-sm">
                      4000 Legato Road Suite 1100, Fairfax, VA 22033.
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/5 rounded-lg">
                    <Phone className="w-4 h-4 text-gray-100" />
                  </div>
                  <a
                    href="tel:+12025551234"
                    className="text-gray-100 hover:text-white transition-colors duration-300"
                  >
                    (703) 345-1012
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/5 rounded-lg">
                    <Mail className="w-4 h-4 text-gray-100" />
                  </div>
                  <a
                    href="mailto:support@deltacomsecurity.com"
                    className="text-gray-100 hover:text-white transition-colors duration-300"
                  >
                 support@deltacomsecurity.com
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-3 pt-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        className={`p-2 bg-white/50 rounded-lg ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/10`}
                        aria-label={social.name}
                      >
                        <IconComponent className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} Deltacom Security. All rights reserved.</p>
            </div>

            {/* Additional Links */}
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>24/7 Support Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
