import { CodingQuestion, FilterCriteria } from '../types';
import { mockQuestions } from '../data/mockData';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export class QuestionService {
  static async fetchQuestions(criteria: FilterCriteria): Promise<CodingQuestion[]> {
    // Simulate network delay
    await delay(1000 + Math.random() * 1000);

    // Filter questions based on criteria
    const filtered = mockQuestions.filter(question => {
      // Flexible topic matching - check if the question topic contains the search term or vice versa
      const searchTopic = criteria.topic.toLowerCase().replace(/\s+/g, '-');
      const questionTopic = question.topic.toLowerCase();
      
      const topicMatch = questionTopic.includes(searchTopic) || 
                        searchTopic.includes(questionTopic) ||
                        questionTopic === searchTopic;
      
      const difficultyMatch = question.difficulty === criteria.difficulty;
      return topicMatch && difficultyMatch;
    });

    // If no exact matches found, try broader matching
    if (filtered.length === 0) {
      const broaderFiltered = mockQuestions.filter(question => {
        const searchWords = criteria.topic.toLowerCase().split(/[\s-]+/);
        const questionWords = question.topic.toLowerCase().split(/[\s-]+/);
        
        const hasCommonWord = searchWords.some(word => 
          questionWords.some(qWord => qWord.includes(word) || word.includes(qWord))
        );
        
        const difficultyMatch = question.difficulty === criteria.difficulty;
        return hasCommonWord && difficultyMatch;
      });
      
      // Shuffle and return requested count
      const shuffled = this.shuffleArray([...broaderFiltered]);
      return shuffled.slice(0, Math.min(criteria.count, shuffled.length));
    }

    // Shuffle and return requested count
    const shuffled = this.shuffleArray([...filtered]);
    return shuffled.slice(0, Math.min(criteria.count, shuffled.length));
  }

  private static shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  static async searchQuestions(query: string): Promise<CodingQuestion[]> {
    await delay(500);
    
    const searchResults = mockQuestions.filter(question =>
      question.title.toLowerCase().includes(query.toLowerCase()) ||
      question.topic.toLowerCase().includes(query.toLowerCase()) ||
      question.description?.toLowerCase().includes(query.toLowerCase())
    );

    return searchResults.slice(0, 10);
  }
}
