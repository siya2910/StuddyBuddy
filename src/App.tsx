import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LoginPage from './components/LoginPage';
import CoursesPage from './components/CoursesPage';
import TeacherDashboard from './components/TeacherDashboard';
import StudentDashboard from './components/StudentDashboard';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ChatInterface from './components/ChatInterface';
import CareerPathways from './components/CareerPathways';
import WellnessToolkit from './components/WellnessToolkit';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';

const AppContent: React.FC = () => {
  const { user, isLoading } = useAuth();
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

  // Update userProfile when user logs in
  React.useEffect(() => {
    if (user) {
      setUserProfile(prev => ({
        ...prev,
        name: user.name,
        preferredLanguage: user.role === 'student' ? (user as any).preferredLanguage || 'hi' : 'hi'
      }));
    }
  }, [user]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
            <span className="text-2xl">🎓</span>
          </div>
          <p className="text-gray-600">Loading AI Buddy...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <LoginPage />;
  }

  // Teacher Dashboard - Separate interface for teachers
  if (user.role === 'teacher') {
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
          <TeacherDashboard />
        </main>

        <Footer />
      </div>
    );
  }

  // Student Interface - Different sections based on activeSection
  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <StudentDashboard />;
      case 'courses':
        return <CoursesPage />;
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
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;