export interface NewsItem {
  id: number;
  title: string;
  date: string;
  content: string;
}

export interface Achievement {
  id: number;
  student: string;
  achievement: string;
  date: string;
  image: string;
}

export interface Birthday {
  id: number;
  name: string;
  class: string;
  date: string;
  type: 'student' | 'staff';
}

export interface House {
  name: string;
  color: string;
  points: number;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  type: 'academic' | 'cultural' | 'sports';
}