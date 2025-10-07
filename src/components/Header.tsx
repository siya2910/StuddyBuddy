import React from 'react';
import { MessageCircle, BookOpen, Heart, Menu, X, Globe, User, Bell, LogOut, Crown, GraduationCap, TrendingUp } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  userProfile: {
    name: string;
    preferredLanguage: string;
  };
}

const Header: React.FC<HeaderProps> = ({ 
  activeSection, 
  setActiveSection, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen,
  userProfile
}) => {
  const { user, logout, upgradeToPremium } = useAuth();
  
  const navItems = [
    { id: 'home', label: 'Home', icon: Globe },
    { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'chat', label: 'AI Chat', icon: MessageCircle },
    { id: 'career', label: 'Career Paths', icon: GraduationCap },
    { id: 'wellness', label: 'Wellness', icon: Heart },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  const languageOptions = {
    'en': 'English',
    'hi': 'हिंदी',
    'bn': 'বাংলা',
    'ta': 'தமிழ்',
    'te': 'తెలుగు'
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-blue-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Study Buddy
              </h1>
              <p className="text-xs text-gray-600">for Students</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-100 text-blue-700 shadow-sm'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Language Selector & Emergency */}
          <div className="hidden md:flex items-center space-x-4">
            {user && (
              <div className="flex items-center space-x-2 bg-blue-50 px-3 py-1 rounded-lg">
                {user.role === 'teacher' ? (
                  <GraduationCap className="w-4 h-4 text-green-600" />
                ) : (
                  <User className="w-4 h-4 text-blue-600" />
                )}
                <span className="text-sm font-medium text-blue-700">{user.name}</span>
                {user.isPremium && <Crown className="w-4 h-4 text-yellow-500" />}
              </div>
            )}
            
            {user && !user.isPremium && user.role === 'student' && (
              <button 
                onClick={upgradeToPremium}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:from-yellow-600 hover:to-orange-600 transition-colors text-sm flex items-center space-x-1"
              >
                <Crown className="w-4 h-4" />
                <span>Upgrade</span>
              </button>
            )}
            
            <button className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
            
            <select className="bg-transparent border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              {Object.entries(languageOptions).map(([code, name]) => (
                <option key={code} value={code} selected={userProfile.preferredLanguage === code}>
                  {name}
                </option>
              ))}
            </select>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors">
              Emergency Help
            </button>
            
            <button 
              onClick={logout}
              className="p-2 text-gray-600 hover:text-red-600 transition-colors"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`px-4 py-3 rounded-lg flex items-center space-x-3 transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
              {user && (
                <div className="px-4 py-2 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    {user.role === 'teacher' ? (
                      <GraduationCap className="w-4 h-4 text-green-600" />
                    ) : (
                      <User className="w-4 h-4 text-blue-600" />
                    )}
                    <span className="text-sm font-medium text-blue-700">{user.name}</span>
                    {user.isPremium && <Crown className="w-4 h-4 text-yellow-500" />}
                  </div>
                </div>
              )}
              
              {user && !user.isPremium && user.role === 'student' && (
                <button 
                  onClick={upgradeToPremium}
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-2 rounded-lg font-medium hover:from-yellow-600 hover:to-orange-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <Crown className="w-4 h-4" />
                  <span>Upgrade to Premium</span>
                </button>
              )}
              
              <select className="w-full bg-transparent border border-gray-300 rounded-lg px-3 py-2 text-sm">
                {Object.entries(languageOptions).map(([code, name]) => (
                  <option key={code} value={code} selected={userProfile.preferredLanguage === code}>
                    {name}
                  </option>
                ))}
              </select>
              <button className="w-full bg-red-500 text-white py-2 rounded-lg font-medium hover:bg-red-600 transition-colors">
                Emergency Help
              </button>
              
              <button 
                onClick={logout}
                className="w-full bg-gray-500 text-white py-2 rounded-lg font-medium hover:bg-gray-600 transition-colors flex items-center justify-center space-x-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;