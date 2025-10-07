import React, { useState } from 'react';
import { MessageCircle, BookOpen, Heart, Globe, Phone, Users, Award, Lightbulb, Mic, Send, Menu, X, Bell } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ChatInterface from './components/ChatInterface';
import CareerPathways from './components/CareerPathways';
import WellnessToolkit from './components/WellnessToolkit';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';


function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: '',
    age: '',
    location: '',
    education: '',
    interests: [],
    preferredLanguage: 'hi'
  });

  const renderSection = () => {
    switch (activeSection) {
      case 'chat':
        return <ChatInterface userProfile={userProfile} />;
      case 'career':
        return <CareerPathways userProfile={userProfile} />;
      case 'wellness':
        return <WellnessToolkit userProfile={userProfile} />;
      case 'profile':
        return <UserProfile userProfile={userProfile} setUserProfile={setUserProfile} />;
      default:
        return (
          <>
            <Hero setActiveSection={setActiveSection} />
            <Features />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        userProfile={userProfile}
      />
      
      <main className="pt-16">
        {renderSection()}
      </main>

      <Footer />
    </div>
  );
}

export default App;