# AI Buddy for Students - Mental Wellness & Career Platform

## 🎓 Project Overview
Study Buddy for Students is a comprehensive platform designed to support mental wellness and career guidance for students in All Over India. The platform combines empathetic AI chat support with personalized career roadmaps and wellness tools.

## ✨ Features

### Mental Wellness Support
- Interactive AI chat interface with multilingual support
- Guided breathing exercises and meditation tools
- Daily affirmations in regional languages
- Mood journaling and tracking
- Crisis support with verified helpline integration

### Career Guidance
- Personalized career pathway recommendations
- Government job preparation roadmaps (UPSC, Banking, Railway)
- Technical skills development paths
- Healthcare and education career options
- Scholarship and opportunity discovery

### User Experience
- Fully responsive design (mobile-first)
- Voice-first interaction support
- Multilingual interface (Hindi, English, Bengali, Tamil, Telugu, etc.)
- Real-time chat with typing indicators
- Interactive forms and dynamic content

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Extract the zip file to your desired location
2. Navigate to the project directory:
   ```bash
   cd ai-buddy-student-platform
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🛠 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Database**: Supabase (configured for future integration)

## 📱 Responsive Design

The platform is designed with a mobile-first approach and includes:
- Breakpoints for mobile, tablet, and desktop
- Touch-friendly interface elements
- Adaptive layouts and navigation
- Optimized typography and spacing

## 🌐 Multilingual Support

Currently supports:
- English
- हिंदी (Hindi)
- বাংলা (Bengali)
- தமிழ் (Tamil)
- తెలుగు (Telugu)
- ગુજરાતી (Gujarati)
- मराठी (Marathi)
- ಕನ್ನಡ (Kannada)
- മലയാളം (Malayalam)
- ਪੰਜਾਬੀ (Punjabi)
- ଓଡ଼ିଆ (Odia)
- অসমীয়া (Assamese)

## 🎨 Design System

### Colors
- Primary: Blue (#3B82F6)
- Secondary: Green (#10B981)
- Accent: Orange (#F59E0B)
- Success: Green (#22C55E)
- Warning: Yellow (#EAB308)
- Error: Red (#EF4444)

### Typography
- Headings: 120% line height
- Body text: 150% line height
- Maximum 3 font weights

### Spacing
- 8px spacing system
- Consistent alignment and visual balance

## 📂 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation and user context
│   ├── Hero.tsx            # Landing page hero section
│   ├── Features.tsx        # Feature showcase
│   ├── ChatInterface.tsx   # AI chat functionality
│   ├── CareerPathways.tsx  # Career exploration
│   ├── WellnessToolkit.tsx # Mental wellness tools
│   ├── UserProfile.tsx     # User profile management
│   └── Footer.tsx          # Footer with resources
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
└── index.css              # Global styles
```

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Project dependencies and scripts

## 🚀 Deployment

The project is configured for deployment on:
- Bolt Hosting (current deployment)
- Netlify
- Vercel
- Any static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly across devices
5. Submit a pull request

## 📞 Crisis Support Resources

The platform includes integration with verified mental health helplines:
- iCall: 9152987821
- NIMHANS: 080-26995000
- Sneha India: 91-44-24640050
- Vandrevala Foundation: 18602662345

## 📄 License

This project is created for educational and social impact purposes.

## 🌟 Future Enhancements

- OpenAI API integration for advanced AI conversations
- WhatsApp bot integration
- Voice recognition with Whisper API
- Real-time peer support communities
- Advanced analytics and progress tracking
- Offline functionality for low-connectivity areas

## 📧 Support

For technical support or questions about the platform, please refer to the documentation or create an issue in the project repository.

---

**Made with ❤️ for students across India**
