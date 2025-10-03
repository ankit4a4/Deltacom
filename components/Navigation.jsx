"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Shield, Phone, Mail } from "lucide-react";
import Image from "next/image";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" }, // Make sure this matches your actual route
    { name: "Commercial", href: "/commercial-security" }, // Update if needed
    { name: "Intrusion & Fire Protection", href: "/fire-protection" }, // Update if needed
    { name: "Cyber Security", href: "/cyber-security" }, // Update if needed
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between p-6 ">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className={`flex items-center justify-center w-20 h-12 rounded-2xl transition-all duration-300 group-hover:scale-105`}
            >
              <Image height={100} width={100} src="/images/logo.png"></Image>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative py-2 transition-all duration-300 group text-sm ${
                  pathname === item.href
                    ? scrolled
                      ? "text-[#01497c] font-semibold"
                      : "text-[#01497c] font-semibold"
                    : scrolled
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.name}
                {(pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href))) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#01497c] rounded-full"></div>
                )}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <div className="flex flex-col items-start gap-2 text-sm text-[#2a6f97]">
              <a
                href="mailto:support@deltacomsecurity.com"
                className={`flex items-center gap-2 transition-colors duration-300 ${
                  scrolled ? " hover:text-gray-900" : " hover:text-gray-900"
                }`}
              >
                <Mail className="w-4 h-4" />
                <span className="hidden xl:inline">
                  support@deltacomsecurity.com
                </span>
              </a>
              <a
                href="tel:+(703)345-1012"
                className={`flex items-center gap-2 transition-colors duration-300 ${
                  scrolled ? " hover:text-gray-900" : " hover:text-gray-900"
                }`}
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">(703) 345-1012</span>
              </a>
            </div>
            <Link
              href="/contact"
              className="px-6 py-2 bg-[#013a63] text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm font-medium"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300 ${
              scrolled
                ? "bg-gray-900 hover:bg-gray-800"
                : "bg-gray-900 hover:bg-gray-800"
            }`}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-gray-900/95 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-gray-900 rounded-xl">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">
                    Deltacom Security
                  </div>
                  <div className="text-xs text-gray-600">DC Metro Area</div>
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Menu Navigation */}
            <div className="flex-1 py-6">
              <div className="space-y-2 px-6">
                {navItems.map((item) => ( 
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block py-3 px-4 rounded-xl transition-all duration-300 ${
                      pathname === item.href
                        ? "bg-gray-900 text-white font-semibold"
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-6 border-t border-gray-200 space-y-4">
              <div className="space-y-3">
                <a
                  href="mailto:support@deltacomsecurity.com
"
                  className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>support@deltacomsecurity.com</span>
                </a>
                <a
                  href="tel:+12025551234"
                  className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>(703) 345-1012</span>
                </a>
              </div>
              <Link
                href="/contact"
                className="block w-full py-3 px-4 bg-gray-900 text-white text-center rounded-xl hover:bg-gray-800 transition-colors font-medium"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
