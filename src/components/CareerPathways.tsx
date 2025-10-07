import React, { useState } from 'react';
import { BookOpen, Award, Users, Clock, ArrowRight, Star, MapPin, DollarSign, Filter, Search, Heart } from 'lucide-react';

interface CareerPathwaysProps {
  userProfile: {
    location: string;
    education: string;
    interests: string[];
  };
}

const CareerPathways: React.FC<CareerPathwaysProps> = ({ userProfile }) => {
  const [selectedCategory, setSelectedCategory] = useState('government');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedPathway, setSelectedPathway] = useState<string | null>(null);

  const categories = [
    { id: 'government', label: 'Government Jobs', icon: Award },
    { id: 'technical', label: 'Technical Skills', icon: BookOpen },
    { id: 'healthcare', label: 'Healthcare', icon: Users },
    { id: 'education', label: 'Education', icon: Star }
  ];

  const pathways = {
    government: [
      {
        id: 'upsc',
        title: 'UPSC Civil Services',
        description: 'Join the Indian Administrative Service and make a difference',
        duration: '12-18 months',
        difficulty: 'High',
        salary: '₹56,100 - ₹2,50,000/month',
        eligibility: 'Graduation in any stream',
        steps: ['Prelims Preparation', 'Mains Preparation', 'Interview Training'],
        scholarships: 'Minority scholarship, Merit scholarships available',
        locations: ['All India'],
        trending: true
      },
      {
        id: 'banking',
        title: 'Banking (IBPS/SBI)',
        description: 'Secure career in public sector banks',
        duration: '6-12 months',
        difficulty: 'Medium',
        salary: '₹23,700 - ₹69,600/month',
        eligibility: 'Graduation in any field',
        steps: ['Basic Math & English', 'Banking Awareness', 'Interview Prep'],
        scholarships: 'IBPS fee waiver for SC/ST/PWD',
        locations: ['All India'],
        trending: false
      },
      {
        id: 'railway',
        title: 'Railway Jobs (RRB)',
        description: 'Join Indian Railways in technical or non-technical roles',
        duration: '4-8 months',
        difficulty: 'Medium',
        salary: '₹18,000 - ₹65,000/month',
        eligibility: '10th/12th/ITI/Graduation',
        steps: ['Trade-specific preparation', 'Physical fitness', 'Document verification'],
        scholarships: 'Fee concession for reserved categories',
        locations: ['All India'],
        trending: true
      }
    ],
    technical: [
      {
        id: 'software',
        title: 'Software Development',
        description: 'Build applications and websites for global companies',
        duration: '6-12 months',
        difficulty: 'Medium',
        salary: '₹25,000 - ₹1,00,000/month',
        eligibility: 'Any background (self-learnable)',
        steps: ['Programming basics', 'Framework learning', 'Portfolio building'],
        scholarships: 'Many free courses available on Coursera, edX',
        locations: ['Major cities', 'Remote work'],
        trending: true
      },
      {
        id: 'digital-marketing',
        title: 'Digital Marketing',
        description: 'Help businesses grow their online presence',
        duration: '3-6 months',
        difficulty: 'Low',
        salary: '₹20,000 - ₹75,000/month',
        eligibility: 'Basic computer knowledge',
        steps: ['Digital marketing basics', 'Tool mastery', 'Certification'],
        scholarships: 'Google Digital Skills scholarship available',
        locations: ['All cities'],
        trending: false
      }
    ],
    healthcare: [
      {
        id: 'nursing',
        title: 'ANM/GNM Nursing',
        description: 'Healthcare support with good job security',
        duration: '18 months - 3 years',
        difficulty: 'Medium',
        salary: '₹15,000 - ₹45,000/month',
        eligibility: '10th/12th pass',
        steps: ['Course admission', 'Practical training', 'Registration'],
        scholarships: 'Central/State nursing scholarships available',
        locations: ['All cities'],
        trending: false
      },
      {
        id: 'pharmacy',
        title: 'Pharmacy',
        description: 'Work in pharmaceutical industry or start your own shop',
        duration: '2-4 years',
        difficulty: 'Medium',
        salary: '₹18,000 - ₹60,000/month',
        eligibility: '12th with PCM/PCB',
        steps: ['D.Pharma/B.Pharma', 'Internship', 'License acquisition'],
        scholarships: 'Merit-based pharmacy scholarships',
        locations: ['All cities'],
        trending: false
      }
    ],
    education: [
      {
        id: 'teaching',
        title: 'Teaching (TET/CTET)',
        description: 'Shape young minds as a government school teacher',
        duration: '2-4 years',
        difficulty: 'Medium',
        salary: '₹25,000 - ₹80,000/month',
        eligibility: 'Graduation + B.Ed',
        steps: ['B.Ed completion', 'TET qualification', 'Job application'],
        scholarships: 'Teacher training scholarships available',
        locations: ['All states'],
        trending: false
      }
    ]
  };

  const currentPathways = pathways[selectedCategory as keyof typeof pathways] || [];
  
  const filteredPathways = currentPathways.filter(pathway =>
    pathway.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pathway.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRecommendationScore = (pathway: any) => {
    let score = 0;
    
    // Check if pathway matches user interests
    if (userProfile.interests.some(interest => 
      pathway.title.toLowerCase().includes(interest.toLowerCase()) ||
      pathway.description.toLowerCase().includes(interest.toLowerCase())
    )) {
      score += 3;
    }
    
    // Check education compatibility
    if (pathway.eligibility.toLowerCase().includes(userProfile.education.toLowerCase())) {
      score += 2;
    }
    
    // Trending pathways get bonus
    if (pathway.trending) {
      score += 1;
    }
    
    return score;
  };

  const sortedPathways = filteredPathways.sort((a, b) => 
    getRecommendationScore(b) - getRecommendationScore(a)
  );

  return (
    <div className="max-w-7xl mx-auto p-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Career Pathways
          <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Designed for Your Success
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore personalized roadmaps, salary expectations, and scholarship opportunities 
          for careers that suit your background and location.
        </p>
        
        {userProfile.location && (
          <div className="mt-4 inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">
            <MapPin className="w-4 h-4" />
            <span>Showing opportunities for {userProfile.location}</span>
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
              placeholder="Search career paths..."
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">All Levels</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Any Duration</option>
                  <option value="short">Less than 6 months</option>
                  <option value="medium">6-12 months</option>
                  <option value="long">More than 1 year</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Salary Range</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Any Salary</option>
                  <option value="low">Below ₹25,000</option>
                  <option value="medium">₹25,000 - ₹50,000</option>
                  <option value="high">Above ₹50,000</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-sm'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{category.label}</span>
            </button>
          );
        })}
      </div>

      {/* Pathways Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {sortedPathways.map((pathway, index) => {
          const recommendationScore = getRecommendationScore(pathway);
          const isRecommended = recommendationScore >= 2;
          
          return (
          <div key={pathway.id} className={`bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 relative ${isRecommended ? 'ring-2 ring-blue-200' : ''}`}>
            {isRecommended && (
              <div className="absolute -top-2 -right-2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                <Heart className="w-3 h-3" />
                <span>Recommended</span>
              </div>
            )}
            
            {pathway.trending && (
              <div className="absolute top-4 right-4 bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium">
                🔥 Trending
              </div>
            )}
            
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pathway.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{pathway.description}</p>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                pathway.difficulty === 'High' 
                  ? 'bg-red-100 text-red-600' 
                  : pathway.difficulty === 'Medium'
                  ? 'bg-yellow-100 text-yellow-600'
                  : 'bg-green-100 text-green-600'
              }`}>
                {pathway.difficulty}
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="text-sm text-gray-700">Duration: {pathway.duration}</span>
              </div>
              <div className="flex items-center space-x-3">
                <DollarSign className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-700">Salary: {pathway.salary}</span>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-purple-500 mt-0.5" />
                <span className="text-sm text-gray-700">Eligibility: {pathway.eligibility}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-0.5" />
                <span className="text-sm text-gray-700">Locations: {pathway.locations.join(', ')}</span>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Roadmap Steps:</h4>
              <div className="space-y-2">
                {pathway.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
                      {stepIndex + 1}
                    </div>
                    <span className="text-sm text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-4 mb-6">
              <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                <Star className="w-4 h-4 mr-2" />
                Scholarships Available
              </h4>
              <p className="text-sm text-green-700">{pathway.scholarships}</p>
            </div>

            <div className="flex space-x-3">
              <button 
                onClick={() => setSelectedPathway(pathway.id)}
                className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Get Roadmap</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-4 py-3 border border-gray-300 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors">
                <Heart className="w-4 h-4" />
              </button>
            </div>
          </div>
          );
        })}
      </div>
      
      {sortedPathways.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No pathways found</h3>
          <p className="text-gray-600">Try adjusting your search or filters to find more opportunities.</p>
        </div>
      )}

      {/* Detailed Pathway Modal */}
      {selectedPathway && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Detailed Roadmap</h2>
                <button
                  onClick={() => setSelectedPathway(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Week-by-Week Plan</h3>
                  <div className="space-y-3">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-medium text-blue-900">Weeks 1-4: Foundation</h4>
                      <p className="text-blue-700 text-sm mt-1">Build basic knowledge and understanding</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-medium text-green-900">Weeks 5-12: Skill Development</h4>
                      <p className="text-green-700 text-sm mt-1">Develop core competencies and practical skills</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="font-medium text-purple-900">Weeks 13+: Application & Practice</h4>
                      <p className="text-purple-700 text-sm mt-1">Apply knowledge and prepare for opportunities</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Resources & Links</h3>
                  <div className="space-y-2">
                    <a href="#" className="block text-blue-600 hover:text-blue-800 text-sm">📚 Free study materials</a>
                    <a href="#" className="block text-blue-600 hover:text-blue-800 text-sm">🎥 Video tutorials</a>
                    <a href="#" className="block text-blue-600 hover:text-blue-800 text-sm">💰 Scholarship applications</a>
                    <a href="#" className="block text-blue-600 hover:text-blue-800 text-sm">👥 Community support groups</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200">
              <button
                onClick={() => setSelectedPathway(null)}
                className="w-full bg-blue-500 text-white py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors"
              >
                Start This Pathway
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Additional Resources */}
      <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 md:p-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Need More Guidance?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI companion can create a completely personalized roadmap based on your 
            location, background, interests, and available time.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors">
            Chat with AI Buddy
          </button>
          <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors">
            Browse All Opportunities
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerPathways;