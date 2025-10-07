import React from 'react';
import { MessageCircle, Heart, BookOpen, Mic, Globe, Award } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-blue-300 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-green-300 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 border border-orange-300 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Heart className="w-4 h-4" />
            <span>Supporting 10M+ students across India</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your Personal
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              AI Buddy for Life
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Mental wellness support and career guidance for students All Over India. 
            Talk to your AI companion in your preferred language, get personalized roadmaps, 
            and build confidence for your future.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <button 
              onClick={() => setActiveSection('chat')}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Start Chatting Now</span>
            </button>
            <button 
              onClick={() => setActiveSection('wellness')}
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center space-x-2"
            >
              <Mic className="w-5 h-5" />
              <span>Voice Chat (Hindi)</span>
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center bg-white/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer" onClick={() => setActiveSection('chat')}>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">24/7</p>
              <p className="text-sm text-gray-600">AI Support</p>
            </div>
            <div className="text-center bg-white/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer" onClick={() => setActiveSection('profile')}>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">12+</p>
              <p className="text-sm text-gray-600">Languages</p>
            </div>
            <div className="text-center bg-white/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer" onClick={() => setActiveSection('career')}>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">50+</p>
              <p className="text-sm text-gray-600">Career Paths</p>
            </div>
            <div className="text-center bg-white/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">Free</p>
              <p className="text-sm text-gray-600">Always</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;