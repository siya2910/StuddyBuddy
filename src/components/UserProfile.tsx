import React, { useState } from 'react';
import { User, MapPin, GraduationCap, Heart, Globe, Save, Edit3, Camera } from 'lucide-react';

interface UserProfileProps {
  userProfile: {
    name: string;
    age: string;
    location: string;
    education: string;
    interests: string[];
    preferredLanguage: string;
  };
  setUserProfile: (profile: any) => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ userProfile, setUserProfile }) => {
  const [isEditing, setIsEditing] = useState(!userProfile.name);
  const [formData, setFormData] = useState(userProfile);

  const languageOptions = {
    'en': 'English',
    'hi': 'हिंदी',
    'bn': 'বাংলা',
    'ta': 'தமிழ்',
    'te': 'తెలుగు',
    'gu': 'ગુજરાતી',
    'mr': 'मराठी',
    'kn': 'ಕನ್ನಡ',
    'ml': 'മലയാളം',
    'pa': 'ਪੰਜਾਬੀ',
    'or': 'ଓଡ଼ିଆ',
    'as': 'অসমীয়া'
  };

  const educationLevels = [
    '10th Class',
    '12th Class',
    'Diploma',
    'Undergraduate',
    'Graduate',
    'Post Graduate',
    'ITI/Vocational',
    'Other'
  ];

  const interestOptions = [
    'Government Jobs',
    'Engineering',
    'Medical',
    'Teaching',
    'Business',
    'Arts & Literature',
    'Sports',
    'Technology',
    'Social Work',
    'Agriculture',
    'Defense',
    'Banking',
    'Law',
    'Media',
    'Tourism'
  ];

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleInterestToggle = (interest: string) => {
    const currentInterests = formData.interests || [];
    const updatedInterests = currentInterests.includes(interest)
      ? currentInterests.filter(i => i !== interest)
      : [...currentInterests, interest];
    
    handleInputChange('interests', updatedInterests);
  };

  const handleSave = () => {
    setUserProfile(formData);
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 py-8">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                  {userProfile.name ? (
                    <span className="text-3xl font-bold">
                      {userProfile.name.charAt(0).toUpperCase()}
                    </span>
                  ) : (
                    <User className="w-10 h-10" />
                  )}
                </div>
                <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Camera className="w-4 h-4" />
                </button>
              </div>
              <div>
                <h1 className="text-2xl font-bold">
                  {userProfile.name || 'Complete Your Profile'}
                </h1>
                <p className="text-blue-100">
                  {userProfile.location && userProfile.age 
                    ? `${userProfile.age} years old • ${userProfile.location}`
                    : 'Tell us about yourself to get personalized guidance'
                  }
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
            >
              <Edit3 className="w-4 h-4" />
              <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
            </button>
          </div>
        </div>

        {/* Profile Content */}
        <div className="p-8">
          {isEditing ? (
            <div className="space-y-8">
              {/* Basic Information */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <User className="w-5 h-5 mr-2 text-blue-600" />
                  Basic Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Age
                    </label>
                    <input
                      type="number"
                      value={formData.age}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                      placeholder="Your age"
                      min="13"
                      max="35"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location (City, State)
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      placeholder="e.g., Patna, Bihar"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Language
                    </label>
                    <select
                      value={formData.preferredLanguage}
                      onChange={(e) => handleInputChange('preferredLanguage', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {Object.entries(languageOptions).map(([code, name]) => (
                        <option key={code} value={code}>{name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2 text-green-600" />
                  Education
                </h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Education Level
                  </label>
                  <select
                    value={formData.education}
                    onChange={(e) => handleInputChange('education', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select your education level</option>
                    {educationLevels.map((level) => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Interests */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-red-600" />
                  Career Interests
                </h2>
                <p className="text-gray-600 mb-4">Select areas you're interested in (choose multiple):</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {interestOptions.map((interest) => (
                    <button
                      key={interest}
                      onClick={() => handleInterestToggle(interest)}
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        formData.interests?.includes(interest)
                          ? 'bg-blue-500 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end">
                <button
                  onClick={handleSave}
                  disabled={!formData.name}
                  className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-2"
                >
                  <Save className="w-5 h-5" />
                  <span>Save Profile</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Profile Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <MapPin className="w-6 h-6 text-blue-600" />
                    <h3 className="font-semibold text-gray-900">Location</h3>
                  </div>
                  <p className="text-gray-700">{userProfile.location || 'Not specified'}</p>
                </div>
                <div className="bg-green-50 rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <GraduationCap className="w-6 h-6 text-green-600" />
                    <h3 className="font-semibold text-gray-900">Education</h3>
                  </div>
                  <p className="text-gray-700">{userProfile.education || 'Not specified'}</p>
                </div>
                <div className="bg-purple-50 rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Globe className="w-6 h-6 text-purple-600" />
                    <h3 className="font-semibold text-gray-900">Language</h3>
                  </div>
                  <p className="text-gray-700">
                    {languageOptions[userProfile.preferredLanguage as keyof typeof languageOptions] || 'English'}
                  </p>
                </div>
              </div>

              {/* Interests */}
              {userProfile.interests && userProfile.interests.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-red-600" />
                    Career Interests
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {userProfile.interests.map((interest, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Recommendations */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Personalized Recommendations</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <p className="text-gray-700">
                      Based on your interests, explore government job opportunities in your area
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <p className="text-gray-700">
                      Daily wellness check-ins available in {languageOptions[userProfile.preferredLanguage as keyof typeof languageOptions]}
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <p className="text-gray-700">
                      Scholarship opportunities matching your education level
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;