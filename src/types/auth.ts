export interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'teacher';
  avatar?: string;
  isPremium: boolean;
  createdAt: Date;
  lastLogin: Date;
}

export interface Student extends User {
  role: 'student';
  grade: string;
  stream: 'PCM' | 'PCB' | 'Commerce' | 'Arts' | 'Nursery' | 'Primary' | 'Middle';
  schoolName: string;
  parentContact: string;
  enrolledCourses: string[];
  progress: {
    courseId: string;
    completedLessons: number;
    totalLessons: number;
    lastAccessed: Date;
  }[];
}

export interface Teacher extends User {
  role: 'teacher';
  subjects: string[];
  qualification: string;
  experience: number;
  schoolName: string;
  createdCourses: string[];
  studentsCount: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  stream: 'PCM' | 'PCB' | 'Commerce' | 'Arts' | 'Nursery' | 'Primary' | 'Middle';
  grade: string;
  subject: string;
  teacherId: string;
  teacherName: string;
  duration: string;
  lessons: Lesson[];
  enrolledStudents: number;
  rating: number;
  isPremium: boolean;
  price: number;
  thumbnail: string;
  createdAt: Date;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  videoUrl?: string;
  content: string;
  duration: number;
  order: number;
  isPremium: boolean;
  quiz?: Quiz;
}

export interface Quiz {
  id: string;
  questions: Question[];
  passingScore: number;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}