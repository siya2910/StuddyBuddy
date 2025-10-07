import React, { useState } from 'react';
import { Heart, Smile, Clock, Brain, Phone, Play, Pause, RotateCcw, CheckCircle, Calendar, TrendingUp, Save } from 'lucide-react';

interface WellnessToolkitProps {
  userProfile: {
    name: string;
    preferredLanguage: string;
  };
}

const WellnessToolkit: React.FC<WellnessToolkitProps> = ({ userProfile }) => {
  const [activeExercise, setActiveExercise] = useState<string | null>(null);
  const [timerActive, setTimerActive] = useState(false);
  const [seconds, setSeconds] = useState(300); // 5 minutes default
  const [moodEntry, setMoodEntry] = useState('');
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [moodHistory, setMoodHistory] = useState([
    { date: '2024-01-15', mood: 4, note: 'Feeling good about studies' },
    { date: '2024-01-14', mood: 3, note: 'Stressed about exams' },
    { date: '2024-01-13', mood: 5, note: 'Great day with friends' },
  ]);

  const wellnessTools = [
    {
      id: 'breathing',
      title: 'Guided Breathing',
      description: 'Simple breathing exercises to reduce stress and anxiety',
      icon: Heart,
      color: 'bg-blue-100 text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'meditation',
      title: 'Mindfulness Meditation',
      description: '5-minute meditation sessions for mental clarity',
      icon: Brain,
      color: 'bg-purple-100 text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 'affirmations',
      title: 'Daily Affirmations',
      description: 'Positive self-talk to boost confidence and self-esteem',
      icon: Smile,
      color: 'bg-yellow-100 text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      id: 'journal',
      title: 'Mood Journaling',
      description: 'Track your emotions and identify patterns',
      icon: CheckCircle,
      color: 'bg-green-100 text-green-600',
      bgColor: 'bg-green-50'
    }
  ];

  const crisisResources = [
    { name: 'iCall Helpline', number: '9152987821', hours: '10 AM - 8 PM' },
    { name: 'NIMHANS Helpline', number: '080-26995000', hours: '24x7' },
    { name: 'Sneha India', number: '91-44-24640050', hours: '24x7' },
    { name: 'Vandrevala Foundation', number: '18602662345', hours: '24x7' }
  ];

  const affirmations = [
    {
      hi: "मैं capable हूँ और मैं अपने goals achieve कर सकता हूँ",
      en: "I am capable and I can achieve my goals"
    },
    {
      hi: "मैं love और success के लायक हूँ",
      en: "I am worthy of love and success"
    },
    {
      hi: "हर challenge एक opportunity है सीखने की",
      en: "Every challenge is an opportunity to learn"
    },
    {
      hi: "मैं peace choose करता हूँ worry के बजाय",
      en: "I choose peace over worry"
    },
    {
      hi: "मैं strong हूँ और मैं इस tough time से निकल सकूंगा",
      en: "I am strong and I can get through this tough time"
    },
    {
      hi: "मेरी potential limitless है",
      en: "My potential is limitless"
    }
  ];

  const [currentAffirmation, setCurrentAffirmation] = useState(0);
  
  const moodEmojis = ['😢', '😕', '😐', '😊', '😄'];
  const moodLabels = ['Very Sad', 'Sad', 'Neutral', 'Happy', 'Very Happy'];

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timerActive, seconds]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleMoodSave = () => {
    if (selectedMood !== null) {
      const newEntry = {
        date: new Date().toISOString().split('T')[0],
        mood: selectedMood + 1,
        note: moodEntry
      };
      setMoodHistory([newEntry, ...moodHistory]);
      setMoodEntry('');
      setSelectedMood(null);
    }
  };
  const renderExerciseContent = () => {
    switch (activeExercise) {
      case 'breathing':
        return (
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">4-7-8 Breathing Exercise</h3>
            <div className="text-center mb-8">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Heart className="w-16 h-16 text-white animate-pulse" />
              </div>
              <div className="space-y-4 text-lg text-gray-700">
                <p><strong>1.</strong> साँस को 4 seconds तक अंदर लें</p>
                <p><strong>2.</strong> साँस को 7 seconds तक रोकें</p>
                <p><strong>3.</strong> साँस को 8 seconds तक धीरे-धीरे छोड़ें</p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-4">{formatTime(seconds)}</div>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => setTimerActive(!timerActive)}
                  className="bg-blue-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors flex items-center space-x-2"
                >
                  {timerActive ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  <span>{timerActive ? 'Pause' : 'Start'}</span>
                </button>
                <button
                  onClick={() => { setSeconds(300); setTimerActive(false); }}
                  className="bg-gray-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-600 transition-colors flex items-center space-x-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>
          </div>
        );

      case 'affirmations':
        return (
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Daily Affirmations</h3>
            <div className="text-center mb-8">
              <div className="w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Smile className="w-16 h-16 text-white" />
              </div>
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 mb-6">
                <p className="text-xl text-gray-800 font-medium leading-relaxed">
                  "{affirmations[currentAffirmation][userProfile.preferredLanguage as keyof typeof affirmations[0]] || affirmations[currentAffirmation].en}"
                </p>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={() => setCurrentAffirmation((prev) => (prev + 1) % affirmations.length)}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-xl font-medium hover:from-yellow-600 hover:to-orange-600 transition-all duration-200"
              >
                Next Affirmation
              </button>
            </div>
          </div>
        );

      case 'journal':
        return (
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Mood Journal</h3>
            
            {/* Mood Entry */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">How are you feeling today?</h4>
              <div className="flex justify-center space-x-4 mb-6">
                {moodEmojis.map((emoji, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedMood(index)}
                    className={`text-4xl p-3 rounded-full transition-all duration-200 ${
                      selectedMood === index 
                        ? 'bg-blue-100 scale-110 shadow-lg' 
                        : 'hover:bg-gray-100 hover:scale-105'
                    }`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
              {selectedMood !== null && (
                <p className="text-center text-gray-600 mb-4">
                  {moodLabels[selectedMood]}
                </p>
              )}
              
              <textarea
                value={moodEntry}
                onChange={(e) => setMoodEntry(e.target.value)}
                placeholder="What's on your mind? (Optional)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows={3}
              />
              
              <div className="text-center mt-4">
                <button
                  onClick={handleMoodSave}
                  disabled={selectedMood === null}
                  className="bg-green-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2 mx-auto"
                >
                  <Save className="w-5 h-5" />
                  <span>Save Entry</span>
                </button>
              </div>
            </div>
            
            {/* Mood History */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                Your Mood Trends
              </h4>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {moodHistory.map((entry, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{moodEmojis[entry.mood - 1]}</span>
                        <span className="font-medium text-gray-900">{moodLabels[entry.mood - 1]}</span>
                      </div>
                      <span className="text-sm text-gray-500">{entry.date}</span>
                    </div>
                    {entry.note && (
                      <p className="text-sm text-gray-600">{entry.note}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {userProfile.name && `${userProfile.name}'s `}
          Mental Wellness
          <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Toolkit for Students
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Take care of your mental health with scientifically-backed exercises and resources. 
          Remember, seeking help is a sign of strength, not weakness.
        </p>
      </div>

      {/* Daily Check-in */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 mb-12">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Daily Wellness Check-in</h2>
          <p className="text-gray-600">How are you feeling today? Track your mood and build healthy habits.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 text-center">
            <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Today's Date</h3>
            <p className="text-gray-600">{new Date().toLocaleDateString()}</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center">
            <Heart className="w-8 h-8 text-red-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Wellness Streak</h3>
            <p className="text-2xl font-bold text-red-600">7 days</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center">
            <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Average Mood</h3>
            <p className="text-2xl">😊 Happy</p>
          </div>
        </div>
      </div>
      {/* Wellness Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {wellnessTools.map((tool) => {
          const Icon = tool.icon;
          return (
            <div
              key={tool.id}
              className={`${tool.bgColor} rounded-2xl p-6 cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                activeExercise === tool.id ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setActiveExercise(activeExercise === tool.id ? null : tool.id)}
            >
              <div className={`w-12 h-12 ${tool.color} rounded-xl flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tool.title}</h3>
              <p className="text-sm text-gray-600">{tool.description}</p>
            </div>
          );
        })}
      </div>

      {/* Active Exercise */}
      {activeExercise && (
        <div className="mb-12">
          {renderExerciseContent()}
        </div>
      )}

      {/* Crisis Support */}
      <div className="bg-red-50 rounded-3xl p-8 md:p-12 mb-12">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Emergency Mental Health Support
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            If you're experiencing thoughts of self-harm or having a mental health crisis, 
            please reach out to these verified helplines immediately. You are not alone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {crisisResources.map((resource, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">{resource.name}</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-bold text-red-600 mb-1">{resource.number}</p>
                  <p className="text-sm text-gray-600">{resource.hours}</p>
                </div>
                <a 
                  href={`tel:${resource.number}`}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors inline-block"
                >
                  Call Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Self-Care Tips */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          Daily Self-Care Tips for Students
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-3">🌅 Morning Routine</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• 10-minute meditation या prayer</li>
              <li>• Healthy breakfast लें</li>
              <li>• Daily goals set करें</li>
              <li>• Positive affirmation बोलें</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-3">📚 Study Wellness</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• हर hour में 10-minute break</li>
              <li>• Eye exercises करें</li>
              <li>• Study space को clean रखें</li>
              <li>• Realistic targets रखें</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-3">🌙 Evening Care</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Screen time 1 hour before bed</li>
              <li>• Gratitude journal लिखें</li>
              <li>• Light exercise या walk</li>
              <li>• 7-8 hours की नींद लें</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellnessToolkit;