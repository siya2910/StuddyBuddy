import React, { useState } from 'react';
import { User, GraduationCap, Mail, Lock, Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState<'student' | 'teacher'>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [showCredentials, setShowCredentials] = useState(false);
  
  const { login, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const success = await login(email, password);
    if (!success) {
      setError('Invalid email or password. Please check the demo credentials below.');
    }
  };

  const demoCredentials = {
    students: [
      { email: 'student1@demo.com', password: 'student123', name: 'Rahul Kumar (12th PCM)' },
      { email: 'student2@demo.com', password: 'student123', name: 'Priya Sharma (11th Commerce) - Premium' },
      { email: 'student3@demo.com', password: 'student123', name: 'Amit Patel (10th PCB)' }
    ],
    teachers: [
      { email: 'teacher1@demo.com', password: 'teacher123', name: 'Dr. Sunita Verma (Math & Physics)' },
      { email: 'teacher2@demo.com', password: 'teacher123', name: 'Prof. Rajesh Gupta (Commerce)' }
    ]
  };

  const fillCredentials = (email: string, password: string) => {
    setEmail(email);
    setPassword(password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Study Buddy</h1>
          <p className="text-gray-600">Your Learning & Wellness Companion</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex mb-6">
            <button
              onClick={() => setUserType('student')}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
                userType === 'student'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <User className="w-4 h-4 inline mr-2" />
              Student
            </button>
            <button
              onClick={() => setUserType('teacher')}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ml-2 ${
                userType === 'teacher'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <GraduationCap className="w-4 h-4 inline mr-2" />
              Teacher
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                <AlertCircle className="w-5 h-5" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                userType === 'student'
                  ? 'bg-blue-500 hover:bg-blue-600 text-white'
                  : 'bg-green-500 hover:bg-green-600 text-white'
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isLoading ? 'Signing In...' : `Sign In as ${userType === 'student' ? 'Student' : 'Teacher'}`}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <button
              onClick={() => setShowCredentials(!showCredentials)}
              className="w-full text-center text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              {showCredentials ? 'Hide' : 'Show'} Demo Credentials
            </button>
            
            {showCredentials && (
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                    <User className="w-4 h-4 mr-2 text-blue-600" />
                    Student Accounts
                  </h4>
                  <div className="space-y-2">
                    {demoCredentials.students.map((cred, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-900">{cred.name}</p>
                            <p className="text-xs text-gray-600">{cred.email}</p>
                          </div>
                          <button
                            onClick={() => fillCredentials(cred.email, cred.password)}
                            className="text-xs bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors"
                          >
                            Use
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                    <GraduationCap className="w-4 h-4 mr-2 text-green-600" />
                    Teacher Accounts
                  </h4>
                  <div className="space-y-2">
                    {demoCredentials.teachers.map((cred, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-900">{cred.name}</p>
                            <p className="text-xs text-gray-600">{cred.email}</p>
                          </div>
                          <button
                            onClick={() => fillCredentials(cred.email, cred.password)}
                            className="text-xs bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition-colors"
                          >
                            Use
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Features Preview */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-blue-50 rounded-lg p-3">
                <CheckCircle className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="text-xs font-medium text-blue-900">AI Chat Support</p>
              </div>
              <div className="bg-green-50 rounded-lg p-3">
                <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="text-xs font-medium text-green-900">Course Management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;