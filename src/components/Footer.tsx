import React from 'react';
import { Heart, Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Mental Wellness',
      links: ['Crisis Support', 'Breathing Exercises', 'Meditation', 'Mood Tracking', 'Affirmations']
    },
    {
      title: 'Career Guidance',
      links: ['Government Jobs', 'Technical Skills', 'Healthcare', 'Education', 'Scholarships']
    },
    {
      title: 'Support',
      links: ['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service', 'Community Guidelines']
    },
    {
      title: 'Languages',
      links: ['English', 'हिंदी', 'বাংলা', 'தமிழ்', 'తెలుగు']
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">AI Buddy</h3>
                <p className="text-sm text-gray-400">for Students</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering students All Over India with AI-powered mental wellness support and career guidance.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <Globe className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                <Phone className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                <Mail className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Emergency Section */}
        <div className="bg-red-900/20 rounded-2xl p-6 mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <Phone className="w-6 h-6 text-red-400" />
            <h4 className="text-lg font-bold text-red-400">24x7 Crisis Support</h4>
          </div>
          <p className="text-gray-300 text-sm mb-4">
            If you're experiencing thoughts of self-harm or having a mental health crisis, please reach out immediately:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-red-400 font-semibold">NIMHANS:</span>
              <span className="text-gray-300 ml-2">080-26995000</span>
            </div>
            <div>
              <span className="text-red-400 font-semibold">iCall:</span>
              <span className="text-gray-300 ml-2">9152987821</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400 text-sm">Made with ❤️ for students across India</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2025 AI Buddy for Students. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Committed to mental wellness and career success
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;