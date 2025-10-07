import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Student, Teacher } from '../types/auth';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
  upgradeToPremium: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo credentials
const DEMO_USERS = {
  // Students
  'student1@demo.com': {
    id: '1',
    email: 'student1@demo.com',
    password: 'student123',
    name: 'Rahul Kumar',
    role: 'student' as const,
    isPremium: false,
    grade: '12th',
    stream: 'PCM' as const,
    schoolName: 'Delhi Public School',
    parentContact: '+91-9876543210',
    enrolledCourses: ['math-12', 'physics-12'],
    progress: [],
    createdAt: new Date('2024-01-15'),
    lastLogin: new Date()
  },
  'student2@demo.com': {
    id: '2',
    email: 'student2@demo.com',
    password: 'student123',
    name: 'Priya Sharma',
    role: 'student' as const,
    isPremium: true,
    grade: '11th',
    stream: 'Commerce' as const,
    schoolName: 'St. Mary\'s School',
    parentContact: '+91-9876543211',
    enrolledCourses: ['accounts-11', 'economics-11'],
    progress: [],
    createdAt: new Date('2024-01-10'),
    lastLogin: new Date()
  },
  'student3@demo.com': {
    id: '3',
    email: 'student3@demo.com',
    password: 'student123',
    name: 'Amit Patel',
    role: 'student' as const,
    isPremium: false,
    grade: '10th',
    stream: 'PCB' as const,
    schoolName: 'Kendriya Vidyalaya',
    parentContact: '+91-9876543212',
    enrolledCourses: ['biology-10', 'chemistry-10'],
    progress: [],
    createdAt: new Date('2024-01-20'),
    lastLogin: new Date()
  },
  // Teachers
  'teacher1@demo.com': {
    id: '4',
    email: 'teacher1@demo.com',
    password: 'teacher123',
    name: 'Dr. Sunita Verma',
    role: 'teacher' as const,
    isPremium: true,
    subjects: ['Mathematics', 'Physics'],
    qualification: 'M.Sc. Physics, B.Ed',
    experience: 15,
    schoolName: 'Delhi Public School',
    createdCourses: ['math-12', 'physics-12'],
    studentsCount: 150,
    createdAt: new Date('2023-08-01'),
    lastLogin: new Date()
  },
  'teacher2@demo.com': {
    id: '5',
    email: 'teacher2@demo.com',
    password: 'teacher123',
    name: 'Prof. Rajesh Gupta',
    role: 'teacher' as const,
    isPremium: true,
    subjects: ['Accountancy', 'Economics'],
    qualification: 'M.Com, MBA',
    experience: 12,
    schoolName: 'St. Mary\'s School',
    createdCourses: ['accounts-11', 'economics-11'],
    studentsCount: 120,
    createdAt: new Date('2023-09-15'),
    lastLogin: new Date()
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('ai-buddy-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const userData = DEMO_USERS[email as keyof typeof DEMO_USERS];
    
    if (userData && userData.password === password) {
      const { password: _, ...userWithoutPassword } = userData;
      setUser(userWithoutPassword);
      localStorage.setItem('ai-buddy-user', JSON.stringify(userWithoutPassword));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('ai-buddy-user');
  };

  const upgradeToPremium = () => {
    if (user) {
      const updatedUser = { ...user, isPremium: true };
      setUser(updatedUser);
      localStorage.setItem('ai-buddy-user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading, upgradeToPremium }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};