export interface CodingQuestion {
  id: string;
  title: string;
  difficulty: 'easy' | 'medium' | 'hard';
  platform: 'leetcode' | 'codeforces' | 'codechef' | 'geeksforgeeks';
  topic: string;
  url: string;
  description?: string;
}

export interface FilterCriteria {
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  count: number;
}

export interface Platform {
  id: string;
  name: string;
  logo: string;
  baseUrl: string;
  color: string;
}
