import React, { useState } from 'react';
import { Users, BookOpen, TrendingUp, Award, Plus, CreditCard as Edit, Eye, BarChart3, MessageCircle, Calendar, Star } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Teacher } from '../types/auth';

const TeacherDashboard: React.FC = () => {
  const { user } = useAuth();
  const teacher = user as Teacher;
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Students', value: teacher.studentsCount, icon: Users, color: 'bg-blue-100 text-blue-600' },
    { label: 'Active Courses', value: teacher.createdCourses.length, icon: BookOpen, color: 'bg-green-100 text-green-600' },
    { label: 'Average Rating', value: '4.8', icon: Award, color: 'bg-yellow-100 text-yellow-600' },
    { label: 'Monthly Revenue', value: '₹45,000', icon: TrendingUp, color: 'bg-purple-100 text-purple-600' }
  ];

  const recentActivities = [
    { type: 'enrollment', message: 'Rahul Kumar enrolled in Mathematics 12th', time: '2 hours ago' },
    { type: 'question', message: 'Priya Sharma asked a question in Physics', time: '4 hours ago' },
    { type: 'completion', message: '15 students completed Chapter 5 quiz', time: '6 hours ago' },
    { type: 'review', message: 'New 5-star review from Amit Patel', time: '1 day ago' }
  ];

  const courses = [
    {
      id: 'math-12',
      title: 'Advanced Mathematics for JEE/NEET',
      students: 1250,
      rating: 4.8,
      revenue: '₹25,000',
      status: 'active',
      thumbnail: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 'physics-12',
      title: 'Physics Mastery - Mechanics & Waves',
      students: 980,
      rating: 4.9,
      revenue: '₹20,000',
      status: 'active',
      thumbnail: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts and Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Revenue Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
            Monthly Revenue
          </h3>
          <div className="h-64 bg-gradient-to-t from-blue-50 to-transparent rounded-lg flex items-end justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">₹45,000</div>
              <div className="text-sm text-gray-600">This Month</div>
              <div className="text-xs text-green-600 mt-1">↗ +15% from last month</div>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <MessageCircle className="w-5 h-5 mr-2 text-green-600" />
            Recent Activities
          </h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderCourses = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">My Courses</h2>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Create New Course</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start space-x-4 mb-4">
              <img 
                src={course.thumbnail} 
                alt={course.title}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students} students</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Award className="w-4 h-4" />
                        <span>{course.rating} rating</span>
                      </div>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                    {course.status}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-lg font-bold text-green-600">{course.revenue}</div>
              <div className="flex space-x-2">
                <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-600 hover:text-green-600 transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
                  <BarChart3 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Course Creation Form */}
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Create New Course</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Course Title</label>
            <input
              type="text"
              placeholder="Enter course title"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select Subject</option>
              <option value="mathematics">Mathematics</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              <option value="biology">Biology</option>
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Grade</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select Grade</option>
              <option value="nursery">Nursery</option>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="3rd">3rd</option>
              <option value="4th">4th</option>
              <option value="5th">5th</option>
              <option value="6th">6th</option>
              <option value="7th">7th</option>
              <option value="8th">8th</option>
              <option value="9th">9th</option>
              <option value="10th">10th</option>
              <option value="11th">11th</option>
              <option value="12th">12th</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Stream</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select Stream</option>
              <option value="PCM">PCM</option>
              <option value="PCB">PCB</option>
              <option value="Commerce">Commerce</option>
              <option value="Arts">Arts</option>
              <option value="Nursery">Nursery</option>
              <option value="Primary">Primary</option>
              <option value="Middle">Middle</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Course Description</label>
          <textarea
            rows={3}
            placeholder="Describe your course..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-gray-700">Premium Course</span>
            </label>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
              <input
                type="number"
                placeholder="0"
                className="w-24 px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors">
            Create Course
          </button>
        </div>
      </div>
    </div>
  );

  const renderStudents = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Student Management</h2>
      
      {/* Student Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Total Students</h3>
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <div className="text-3xl font-bold text-blue-600 mb-2">{teacher.studentsCount}</div>
          <div className="text-sm text-green-600">↗ +12% this month</div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Active Learners</h3>
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
          <div className="text-3xl font-bold text-green-600 mb-2">89%</div>
          <div className="text-sm text-gray-600">Weekly engagement</div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Avg. Progress</h3>
            <Award className="w-6 h-6 text-yellow-600" />
          </div>
          <div className="text-3xl font-bold text-yellow-600 mb-2">67%</div>
          <div className="text-sm text-gray-600">Course completion</div>
        </div>
      </div>
      
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Student Progress Tracking</h3>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Export Data</button>
        </div>
        
        <div className="space-y-4">
          {[
            { name: 'Rahul Kumar', course: 'Mathematics 12th', enrolled: '2 days ago', progress: 75, grade: 'A', lastActive: '2 hours ago' },
            { name: 'Priya Sharma', course: 'Physics 12th', enrolled: '3 days ago', progress: 45, grade: 'B+', lastActive: '1 day ago' },
            { name: 'Amit Patel', course: 'Mathematics 12th', enrolled: '5 days ago', progress: 30, grade: 'B', lastActive: '3 hours ago' },
            { name: 'Sneha Gupta', course: 'Physics 12th', enrolled: '1 week ago', progress: 85, grade: 'A+', lastActive: '1 hour ago' },
            { name: 'Vikash Singh', course: 'Mathematics 12th', enrolled: '2 weeks ago', progress: 92, grade: 'A+', lastActive: '30 min ago' }
          ].map((student, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  {student.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{student.name}</p>
                  <p className="text-sm text-gray-600">{student.course}</p>
                  <p className="text-xs text-gray-500">Last active: {student.lastActive}</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-900">{student.progress}%</div>
                  <div className="w-16 bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${student.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-gray-900">Grade</div>
                  <div className={`text-lg font-bold ${
                    student.grade.startsWith('A') ? 'text-green-600' : 
                    student.grade.startsWith('B') ? 'text-blue-600' : 'text-yellow-600'
                  }`}>
                    {student.grade}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-green-600 transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Analytics & Insights</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Course Performance */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Performance</h3>
          <div className="space-y-4">
            {courses.map((course, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{course.title}</p>
                  <p className="text-sm text-gray-600">{course.students} students</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1 mb-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="font-medium text-gray-900">{course.rating}</span>
                  </div>
                  <div className="text-sm text-green-600 font-medium">{course.revenue}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Revenue Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trends</h3>
          <div className="h-48 bg-gradient-to-t from-green-50 to-transparent rounded-lg flex items-end justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">₹45,000</div>
              <div className="text-sm text-gray-600">This Month</div>
              <div className="text-xs text-green-600 mt-1">↗ +15% from last month</div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Analytics */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Detailed Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-1">95%</div>
            <div className="text-sm text-blue-700">Course Completion Rate</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600 mb-1">4.8</div>
            <div className="text-sm text-green-700">Average Rating</div>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600 mb-1">24</div>
            <div className="text-sm text-yellow-700">Hours/Week Teaching</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 mb-1">89%</div>
            <div className="text-sm text-purple-700">Student Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'courses', label: 'My Courses', icon: BookOpen },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'schedule', label: 'Schedule', icon: Calendar }
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
              {teacher.name.charAt(0)}
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Welcome back, {teacher.name}!</h1>
              <p className="text-gray-600">{teacher.subjects.join(', ')} • {teacher.experience} years experience</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              ⭐ Expert Teacher
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Teaching Impact</h2>
              <p className="text-gray-600">You've helped {teacher.studentsCount} students learn and grow!</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">₹45,000</div>
              <div className="text-sm text-gray-600">This month's earnings</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-sm'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'courses' && renderCourses()}
        {activeTab === 'students' && renderStudents()}
        {activeTab === 'analytics' && renderAnalytics()}
        {activeTab === 'schedule' && (
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Schedule Management</h3>
            <p className="text-gray-600">Coming soon - Manage your teaching schedule and appointments</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherDashboard;