import React from "react";
import {
  Shield,
  Flame,
  AlertTriangle,
  Zap,
  Users,
  CheckCircle,
} from "lucide-react";

const FireProtectionContent = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#013a63] mb-4">
            Intrusion & Fire Protection Systems & Solutions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive fire safety solutions designed to protect lives,
            property, and business operations with state-of-the-art detection
            and suppression systems.
          </p>
        </div>

        {/* SEO Content Section */}
        <div className="mb-16 bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-[#013a63] mb-6">
            Professional Intrusion & Fire Protection Services
          </h3>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Deltacom Security provides comprehensive Intrusion & Fire Protection systems including fire alarm 
            installation, automatic sprinkler systems, fire suppression systems, and emergency 
            lighting for commercial, industrial, and institutional facilities. Our NFPA-certified 
            Intrusion & Fire Protection engineers design, install, and maintain fire safety systems that protect 
            lives and property.
          </p>
          
          <h4 className="text-xl font-semibold text-[#013a63] mb-4">Services Include:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-slate-700">Fire alarm system design and installation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-slate-700">Automatic sprinkler system installation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-slate-700">Clean agent fire suppression systems</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-slate-700">Kitchen hood fire suppression</span>
              </div>
               <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-slate-700">Emergency lighting and exit signs</span>
              </div>
           
            </div>
            <div className="space-y-2">
                <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-slate-700">Fire pump installation and testing</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-slate-700">24/7 fire alarm monitoring</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-slate-700">Annual fire safety inspections</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-slate-700">NFPA code compliance consulting</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-slate-700">Fire extinguisher inspection</span>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#013a63] text-center mb-8">
            Industries We Protect
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-[#013a63] mb-2">
                Commercial Buildings
              </h4>
              <p className="text-sm text-slate-600">
                Offices, retail centers, warehouses
              </p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-[#013a63] mb-2">
                Healthcare Facilities
              </h4>
              <p className="text-sm text-slate-600">
                Hospitals, clinics, care centers
              </p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-[#013a63] mb-2">
                Educational Institutions
              </h4>
              <p className="text-sm text-slate-600">
                Schools, universities, libraries
              </p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-[#013a63] mb-2">
                Industrial Facilities
              </h4>
              <p className="text-sm text-slate-600">
                Manufacturing, processing plants
              </p>
            </div>
          </div>
        </div>

        {/* Fire Safety Statistics */}
        <div className="bg-red-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-[#013a63] text-center mb-8">
            Why Intrusion & Fire Protection Matters
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">$3.1B</div>
              <p className="text-slate-700">
                Annual property damage from fires
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">3,500+</div>
              <p className="text-slate-700">Fire deaths annually in the US</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">96%</div>
              <p className="text-slate-700">
                Effectiveness of sprinkler systems
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-[#013a63] mb-4">
            Fire Safety Assessment & Design
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Protect your people and property with a comprehensive Intrusion & Fire Protection system. 
            Our certified Intrusion & Fire Protection engineers will design a system that meets your specific needs and code requirements.
          </p>
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-slate-700">NFPA certified engineers</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-slate-700">Code compliance assurance</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-slate-700">24/7 system monitoring</span>
            </div>
          </div>
          <div className="space-x-4">
            <a 
              href="/contact" 
              className="inline-block px-8 py-3 bg-[#013a63] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Fire Safety Assessment
            </a>
            <a 
              href="mailto:support@deltacomsecurity.com" 
              className="inline-block px-8 py-3 border-2 border-[#013a63] text-[#013a63] font-semibold rounded-lg hover:bg-[#013a63] hover:text-white transition-colors"
            >
              Email Our Experts
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FireProtectionContent;
