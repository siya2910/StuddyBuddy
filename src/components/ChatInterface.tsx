import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, MicOff, User, Bot, Heart, Book, Phone, Smile, ThumbsUp, ThumbsDown, Copy, Share } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  type?: 'text' | 'crisis' | 'career' | 'wellness';
  liked?: boolean;
  disliked?: boolean;
}

interface ChatInterfaceProps {
  userProfile: {
    name: string;
    preferredLanguage: string;
  };
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ userProfile }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: userProfile.name 
        ? `नमस्ते ${userProfile.name}! मैं आपका AI Buddy हूँ। मैं यहाँ आपकी mental wellness और career guidance में मदद करने के लिए हूँ। आप अपनी भाषा में बात कर सकते हैं। आज आप कैसा महसूस कर रहे हैं?`
        : "नमस्ते! मैं आपका AI Buddy हूँ। मैं यहाँ आपकी mental wellness और career guidance में मदद करने के लिए हूँ। आप अपनी भाषा में बात कर सकते हैं। आज आप कैसा महसूस कर रहे हैं?",
      sender: 'ai',
      timestamp: new Date(),
      type: 'text'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        {
          content: `मैं समझ सकता हूँ कि यह challenging time हो सकता है। आप अकेले नहीं हैं। ${userProfile.name ? userProfile.name + ', ' : ''}क्या आप मुझे बता सकते हैं कि खासकर कौन सी बात आपको परेशान कर रही है?`,
          type: 'wellness' as const
        },
        {
          content: "UPSC preparation एक बेहतरीन choice है! मैं आपके लिए एक personalized roadmap बना सकता हूँ। पहले बताइए कि आप कौन से background से हैं और कितना time dedicate कर सकते हैं?",
          type: 'career' as const
        },
        {
          content: "Engineering के बाद बहुत सारे options हैं! Software development, government jobs, higher studies, या entrepreneurship - सभी good paths हैं। आपकी interests क्या हैं?",
          type: 'career' as const
        }
      ];

      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: randomResponse.content,
        sender: 'ai',
        timestamp: new Date(),
        type: randomResponse.type
      };

      setIsTyping(false);
      setMessages(prev => [...prev, aiMessage]);
    }, 1500);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Simulate recording functionality
    if (!isRecording) {
      setTimeout(() => {
        setIsRecording(false);
        setInputMessage("मुझे exams को लेकर बहुत stress हो रहा है");
      }, 2000);
    }
  };

  const handleMessageAction = (messageId: string, action: 'like' | 'dislike' | 'copy' | 'share') => {
    setMessages(prev => prev.map(msg => {
      if (msg.id === messageId) {
        if (action === 'like') {
          return { ...msg, liked: !msg.liked, disliked: false };
        } else if (action === 'dislike') {
          return { ...msg, disliked: !msg.disliked, liked: false };
        } else if (action === 'copy') {
          navigator.clipboard.writeText(msg.content);
        } else if (action === 'share') {
          if (navigator.share) {
            navigator.share({ text: msg.content });
          }
        }
      }
      return msg;
    }));
  };
  const quickActions = [
    { label: 'Career Guidance', icon: Book, action: () => setInputMessage('I need career guidance') },
    { label: 'Feeling Stressed', icon: Heart, action: () => setInputMessage('मैं stress feel कर रहा हूँ') },
    { label: 'Emergency Help', icon: Phone, action: () => setInputMessage('I need immediate help') }
  ];

  const getMessageIcon = (type?: string) => {
    switch (type) {
      case 'crisis':
        return <Phone className="w-4 h-4 text-red-500" />;
      case 'career':
        return <Book className="w-4 h-4 text-blue-500" />;
      case 'wellness':
        return <Heart className="w-4 h-4 text-green-500" />;
      default:
        return null;
    }
  };

  const languageOptions = {
    'en': 'English',
    'hi': 'हिंदी',
    'bn': 'বাংলা',
    'ta': 'தமিழ்',
    'te': 'తెలుగు'
  };
  return (
    <div className="max-w-6xl mx-auto p-4 min-h-screen flex flex-col">
      <div className="bg-white rounded-2xl shadow-lg flex flex-col h-full">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">AI Buddy Chat</h2>
                <p className="text-blue-100 text-sm">Your personal wellness & career companion</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className="text-sm font-medium">{languageOptions[userProfile.preferredLanguage as keyof typeof languageOptions]}</p>
                <p className="text-xs text-blue-100">Active Language</p>
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">
                  {userProfile.name ? userProfile.name.charAt(0).toUpperCase() : 'U'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 max-h-96 lg:max-h-[500px]">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-lg px-4 py-3 rounded-2xl relative group ${
                  message.sender === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <div className="flex items-start space-x-2">
                  {message.sender === 'ai' && (
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      {getMessageIcon(message.type)}
                    </div>
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                  {message.sender === 'user' && (
                    <User className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  )}
                </div>
                
                {/* Message Actions */}
                {message.sender === 'ai' && (
                  <div className="absolute -bottom-8 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center space-x-2 bg-white rounded-lg shadow-lg px-3 py-1">
                    <button
                      onClick={() => handleMessageAction(message.id, 'like')}
                      className={`p-1 rounded transition-colors ${message.liked ? 'text-green-600' : 'text-gray-400 hover:text-green-600'}`}
                    >
                      <ThumbsUp className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => handleMessageAction(message.id, 'dislike')}
                      className={`p-1 rounded transition-colors ${message.disliked ? 'text-red-600' : 'text-gray-400 hover:text-red-600'}`}
                    >
                      <ThumbsDown className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => handleMessageAction(message.id, 'copy')}
                      className="p-1 rounded text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <Copy className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => handleMessageAction(message.id, 'share')}
                      className="p-1 rounded text-gray-400 hover:text-purple-600 transition-colors"
                    >
                      <Share className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 px-4 py-3 rounded-2xl flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-green-400 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions */}
        {messages.length <= 1 && (
          <div className="px-6 py-4 border-t border-gray-100">
            <p className="text-sm text-gray-600 mb-3">Quick Actions:</p>
            <div className="flex flex-wrap gap-2">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <button
                    key={index}
                    onClick={action.action}
                    className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{action.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-6 border-t border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={`Type your message in ${languageOptions[userProfile.preferredLanguage as keyof typeof languageOptions]}...`}
                className="w-full bg-gray-100 border border-gray-200 rounded-2xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={toggleRecording}
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-colors ${
                  isRecording 
                    ? 'bg-red-500 text-white animate-pulse' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </button>
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim()}
              className="bg-blue-500 text-white p-3 rounded-2xl hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
            <span>🔒 Your conversations are private and secure</span>
            {isRecording && <span className="text-red-500 animate-pulse">● Recording...</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;