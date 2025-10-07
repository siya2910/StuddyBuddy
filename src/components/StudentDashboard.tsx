import React, { useState } from 'react';
import {
  BookOpen,
  TrendingUp,
  Award,
  Clock,
  Play,
  Star,
  Users,
  Calendar,
  Target,
  Brain,
  Heart,
  CheckCircle,
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Student } from '../types/auth';

// Define valid stream values in one place
type StreamType =
  | 'PCM'
  | 'PCB'
  | 'Commerce'
  | 'Arts'
  | 'Nursery'
  | 'Primary'
  | 'Middle'
  | '';

const StudentDashboard: React.FC = () => {
  const { user } = useAuth();
  const student = user as Student;
  const [selectedStream, setSelectedStream] = useState<StreamType>(student.stream || '');

  const streams = [
    { id: 'PCM', label: 'PCM (Physics, Chemistry, Math)', color: 'bg-blue-100 text-blue-700' },
    { id: 'PCB', label: 'PCB (Physics, Chemistry, Biology)', color: 'bg-green-100 text-green-700' },
    { id: 'Commerce', label: 'Commerce', color: 'bg-yellow-100 text-yellow-700' },
    { id: 'Arts', label: 'Arts & Humanities', color: 'bg-purple-100 text-purple-700' },
    { id: 'Nursery', label: 'Nursery (Pre-K)', color: 'bg-pink-100 text-pink-700' },
    { id: 'Primary', label: 'Primary (1st-5th)', color: 'bg-orange-100 text-orange-700' },
    { id: 'Middle', label: 'Middle School (6th-8th)', color: 'bg-indigo-100 text-indigo-700' },
  ];

  const availableCourses = [
    {
      id: 'math-12',
      title: 'Advanced Mathematics for JEE/NEET',
      teacher: 'Dr. Sunita Verma',
      duration: '6 months',
      students: 1250,
      rating: 4.8,
      isPremium: true,
      price: 2999,
      stream: 'PCM',
      grade: '12th',
      thumbnail:
        'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      id: 'physics-12',
      title: 'Physics Mastery - Mechanics & Waves',
      teacher: 'Dr. Sunita Verma',
      duration: '8 months',
      students: 980,
      rating: 4.9,
      isPremium: true,
      price: 3499,
      stream: 'PCM',
      grade: '12th',
      thumbnail:
        'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      id: 'biology-10',
      title: 'Biology Fundamentals',
      teacher: 'Dr. Meera Singh',
      duration: '4 months',
      students: 750,
      rating: 4.7,
      isPremium: false,
      price: 0,
      stream: 'PCB',
      grade: '10th',
      thumbnail:
        'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      id: 'accounts-11',
      title: 'Accountancy for Commerce Students',
      teacher: 'Prof. Rajesh Gupta',
      duration: '5 months',
      students: 650,
      rating: 4.6,
      isPremium: true,
      price: 1999,
      stream: 'Commerce',
      grade: '11th',
      thumbnail:
        'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      id: 'english-8',
      title: 'English Grammar & Literature',
      teacher: 'Ms. Priya Sharma',
      duration: '3 months',
      students: 450,
      rating: 4.5,
      isPremium: false,
      price: 0,
      stream: 'Middle',
      grade: '8th',
      thumbnail:
        'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      id: 'nursery-basics',
      title: 'Fun Learning for Little Ones',
      teacher: 'Ms. Anjali Patel',
      duration: '2 months',
      students: 320,
      rating: 4.9,
      isPremium: true,
      price: 999,
      stream: 'Nursery',
      grade: 'Nursery',
      thumbnail:
        'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
  ];

  const enrolledCourses = availableCourses.filter((course) =>
    student.enrolledCourses.includes(course.id)
  );

  const recommendedCourses = availableCourses
    .filter((course) => course.stream === student.stream && course.grade === student.grade)
    .slice(0, 3);

  const stats = [
    { label: 'Enrolled Courses', value: enrolledCourses.length, icon: BookOpen, color: 'bg-blue-100 text-blue-600' },
    { label: 'Hours Learned', value: '45', icon: Clock, color: 'bg-green-100 text-green-600' },
    { label: 'Certificates', value: '2', icon: Award, color: 'bg-yellow-100 text-yellow-600' },
    { label: 'Study Streak', value: '7 days', icon: Target, color: 'bg-purple-100 text-purple-600' },
  ];

  const recentActivities = [
    { type: 'course', message: 'Completed Chapter 3 in Mathematics', time: '2 hours ago', icon: CheckCircle },
    { type: 'wellness', message: 'Completed daily mood check-in', time: '4 hours ago', icon: Heart },
    { type: 'chat', message: 'Asked AI Buddy about career guidance', time: '6 hours ago', icon: Brain },
    { type: 'achievement', message: 'Earned "Consistent Learner" badge', time: '1 day ago', icon: Award },
  ];

  const handleStreamSelection = (streamId: StreamType) => {
    setSelectedStream(streamId);
  };

  const handleEnrollCourse = (courseId: string) => {
    // In a real app, this would make an API call
    console.log('Enrolling in course:', courseId);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 py-8">
      {/* Welcome Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
              {student.name.charAt(0)}
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Welcome back, {student.name}!</h1>
              <p className="text-gray-600">
                {student.grade} • {student.stream} • {student.schoolName}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            {student.isPremium && (
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
                ⭐ Premium Student
              </div>
            )}
            <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              Grade: {student.grade}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stream Selection */}
      {!student.stream && (
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Select Your Stream</h2>
          <p className="text-gray-600 mb-6">
            Choose your educational stream to get personalized course recommendations
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {streams.map((stream) => (
              <button
                key={stream.id}
                onClick={() => handleStreamSelection(stream.id as StreamType)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                  selectedStream === stream.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                <div
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${stream.color}`}
                >
                  {stream.id}
                </div>
                <h3 className="font-semibold text-gray-900">{stream.label}</h3>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Remaining JSX stays the same */}
      {/* (Courses, Sidebar, Schedule, Quick Actions, etc.) */}
    </div>
  );
};

export default StudentDashboard;
