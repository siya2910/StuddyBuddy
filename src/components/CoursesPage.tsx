import React, { useState } from 'react';
import { BookOpen, Clock, Users, Star, Filter, Search, Play, Lock, Crown, Award, TrendingUp } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Course } from '../types/auth';

const CoursesPage: React.FC = () => {
  const { user } = useAuth();
  const [selectedStream, setSelectedStream] = useState<string>('all');
  const [selectedGrade, setSelectedGrade] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const streams = [
    { id: 'all', label: 'All Streams', color: 'bg-gray-100' },
    { id: 'PCM', label: 'PCM (Physics, Chemistry, Math)', color: 'bg-blue-100' },
    { id: 'PCB', label: 'PCB (Physics, Chemistry, Biology)', color: 'bg-green-100' },
    { id: 'Commerce', label: 'Commerce', color: 'bg-yellow-100' },
    { id: 'Arts', label: 'Arts & Humanities', color: 'bg-purple-100' },
    { id: 'Nursery', label: 'Nursery (Pre-K)', color: 'bg-pink-100' },
    { id: 'Primary', label: 'Primary (1st-5th)', color: 'bg-orange-100' },
    { id: 'Middle', label: 'Middle School (6th-8th)', color: 'bg-indigo-100' }
  ];

  const grades = ['all', 'Nursery', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'];

  const courses: Course[] = [
    {
      id: 'math-12',
      title: 'Advanced Mathematics for JEE/NEET',
      description: 'Complete calculus, algebra, and trigonometry for competitive exams',
      stream: 'PCM',
      grade: '12th',
      subject: 'Mathematics',
      teacherId: '4',
      teacherName: 'Dr. Sunita Verma',
      duration: '6 months',
      lessons: [],
      enrolledStudents: 1250,
      rating: 4.8,
      isPremium: true,
      price: 2999,
      thumbnail: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=400',
      createdAt: new Date('2024-01-01')
    },
    {
      id: 'physics-12',
      title: 'Physics Mastery - Mechanics & Waves',
      description: 'Master physics concepts with practical experiments and problem solving',
      stream: 'PCM',
      grade: '12th',
      subject: 'Physics',
      teacherId: '4',
      teacherName: 'Dr. Sunita Verma',
      duration: '8 months',
      lessons: [],
      enrolledStudents: 980,
      rating: 4.9,
      isPremium: true,
      price: 3499,
      thumbnail: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400',
      createdAt: new Date('2024-01-15')
    },
    {
      id: 'biology-10',
      title: 'Biology Fundamentals',
      description: 'Life processes, genetics, and human body systems explained simply',
      stream: 'PCB',
      grade: '10th',
      subject: 'Biology',
      teacherId: '5',
      teacherName: 'Dr. Meera Singh',
      duration: '4 months',
      lessons: [],
      enrolledStudents: 750,
      rating: 4.7,
      isPremium: false,
      price: 0,
      thumbnail: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400',
      createdAt: new Date('2024-02-01')
    },
    {
      id: 'accounts-11',
      title: 'Accountancy for Commerce Students',
      description: 'Double entry bookkeeping, financial statements, and business accounting',
      stream: 'Commerce',
      grade: '11th',
      subject: 'Accountancy',
      teacherId: '5',
      teacherName: 'Prof. Rajesh Gupta',
      duration: '5 months',
      lessons: [],
      enrolledStudents: 650,
      rating: 4.6,
      isPremium: true,
      price: 1999,
      thumbnail: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400',
      createdAt: new Date('2024-01-20')
    },
    {
      id: 'english-8',
      title: 'English Grammar & Literature',
      description: 'Improve reading, writing, and comprehension skills',
      stream: 'Middle',
      grade: '8th',
      subject: 'English',
      teacherId: '6',
      teacherName: 'Ms. Priya Sharma',
      duration: '3 months',
      lessons: [],
      enrolledStudents: 450,
      rating: 4.5,
      isPremium: false,
      price: 0,
      thumbnail: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
      createdAt: new Date('2024-02-10')
    },
    {
      id: 'nursery-basics',
      title: 'Fun Learning for Little Ones',
      description: 'Colors, shapes, numbers, and alphabets through games and activities',
      stream: 'Nursery',
      grade: 'Nursery',
      subject: 'General',
      teacherId: '7',
      teacherName: 'Ms. Anjali Patel',
      duration: '2 months',
      lessons: [],
      enrolledStudents: 320,
      rating: 4.9,
      isPremium: true,
      price: 999,
      thumbnail: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400',
      createdAt: new Date('2024-02-15')
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesStream = selectedStream === 'all' || course.stream === selectedStream;
    const matchesGrade = selectedGrade === 'all' || course.grade === selectedGrade;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.subject.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesStream && matchesGrade && matchesSearch;
  });

  const getStreamColor = (stream: string) => {
    const streamObj = streams.find(s => s.id === stream);
    return streamObj?.color || 'bg-gray-100';
  };

  return (
    <div className="max-w-7xl mx-auto p-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Course Library
          <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Learn from Expert Teachers
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive courses designed for Indian curriculum - from Nursery to 12th grade
        </p>
        
        {user?.isPremium && (
          <div className="mt-4 inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm">
            <Crown className="w-4 h-4" />
            <span>Premium Member - Access All Courses</span>
          </div>
        )}
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search courses, subjects, or teachers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Filter className="w-5 h-5" />
            <span>Filters</span>
          </button>
        </div>
        
        {showFilters && (
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Stream</label>
                <select 
                  value={selectedStream}
                  onChange={(e) => setSelectedStream(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {streams.map(stream => (
                    <option key={stream.id} value={stream.id}>{stream.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Grade</label>
                <select 
                  value={selectedGrade}
                  onChange={(e) => setSelectedGrade(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {grades.map(grade => (
                    <option key={grade} value={grade}>
                      {grade === 'all' ? 'All Grades' : grade}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Stream Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {streams.map((stream) => (
          <button
            key={stream.id}
            onClick={() => setSelectedStream(stream.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedStream === stream.id
                ? 'bg-blue-500 text-white shadow-lg'
                : `${stream.color} text-gray-700 hover:shadow-md`
            }`}
          >
            {stream.label}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            {/* Course Thumbnail */}
            <div className="relative">
              <img 
                src={course.thumbnail} 
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStreamColor(course.stream)} text-gray-700`}>
                  {course.stream} - {course.grade}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                {course.isPremium ? (
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                    <Crown className="w-3 h-3" />
                    <span>Premium</span>
                  </div>
                ) : (
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Free
                  </div>
                )}
              </div>
              {course.isPremium && !user?.isPremium && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <Lock className="w-8 h-8 text-white" />
                </div>
              )}
            </div>

            {/* Course Content */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-900 line-clamp-2">{course.title}</h3>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium text-gray-700">{course.rating}</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{course.enrolledStudents.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-900">{course.teacherName}</p>
                  <p className="text-xs text-gray-500">{course.subject} Teacher</p>
                </div>
                {course.isPremium && (
                  <div className="text-right">
                    <p className="text-lg font-bold text-green-600">₹{course.price.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">one-time</p>
                  </div>
                )}
              </div>

              <div className="flex space-x-2">
                <button 
                  className={`flex-1 py-3 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2 ${
                    course.isPremium && !user?.isPremium
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700'
                  }`}
                  disabled={course.isPremium && !user?.isPremium}
                >
                  {course.isPremium && !user?.isPremium ? (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Premium Required</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      <span>Start Learning</span>
                    </>
                  )}
                </button>
                <button className="px-4 py-3 border border-gray-300 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors">
                  <BookOpen className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No courses found</h3>
          <p className="text-gray-600">Try adjusting your search or filters to find more courses.</p>
        </div>
      )}

      {/* Premium Upgrade Banner */}
      {!user?.isPremium && (
        <div className="mt-16 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-8 md:p-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Crown className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Unlock Premium Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Get access to all premium courses, advanced AI features, personalized learning paths, 
              and priority support for just ₹999/month.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <Award className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">All Premium Courses</h3>
                <p className="text-sm text-gray-600">Access to 50+ premium courses worth ₹50,000+</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Advanced AI Tutor</h3>
                <p className="text-sm text-gray-600">Personalized learning with detailed progress tracking</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Priority Support</h3>
                <p className="text-sm text-gray-600">Direct access to teachers and instant doubt resolution</p>
              </div>
            </div>
            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 transform hover:scale-105">
              Upgrade to Premium - ₹999/month
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesPage;