import React from 'react';
import { Heart, BookOpen, Globe, Users, Shield, Award, Mic, Phone } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: 'Mental Wellness Support',
      description: 'Empathetic AI companion that listens without judgment. Get mindfulness exercises, guided breathing, and daily affirmations.',
      color: 'bg-red-100 text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: BookOpen,
      title: 'Career Mentorship',
      description: 'Personalized roadmaps for UPSC, coding, ITI, nursing, government jobs, and more. Discover scholarships and opportunities.',
      color: 'bg-blue-100 text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Globe,
      title: 'Multilingual & Voice-First',
      description: 'Talk in Hindi, Tamil, Bengali, or any regional language. Voice journaling and WhatsApp integration for accessibility.',
      color: 'bg-green-100 text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Users,
      title: 'Peer Community',
      description: 'Connect with students from similar backgrounds. Share experiences, study together, and motivate each other.',
      color: 'bg-purple-100 text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Shield,
      title: 'Crisis Support',
      description: 'Advanced distress detection with immediate escalation to verified helplines like NIMHANS and iCall when needed.',
      color: 'bg-orange-100 text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Award,
      title: 'Daily Motivation',
      description: 'Productivity hacks, study tips, and personalized encouragement to keep you motivated on your journey.',
      color: 'bg-yellow-100 text-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Succeed & Stay Happy
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI companion combines mental wellness support with career guidance, 
            designed specifically for students in smaller cities across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`${feature.bgColor} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Accessible Through Multiple Channels
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Mic className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Voice Chat</h4>
                    <p className="text-gray-600">Speak in any Indian language</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp Integration</h4>
                    <p className="text-gray-600">No app installation required</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Globe className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Mobile App</h4>
                    <p className="text-gray-600">Full-featured experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-center">
                <div className="text-4xl mb-4">📱</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Start Your Journey Today</h4>
                <p className="text-gray-600 mb-6">Join thousands of students already using AI Buddy</p>
                <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                  Get Started Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;