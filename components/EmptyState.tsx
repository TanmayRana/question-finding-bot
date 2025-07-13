import { FileQuestion, Search } from 'lucide-react';

interface EmptyStateProps {
  type: 'no-search' | 'no-results';
  topic?: string;
  difficulty?: string;
}

export function EmptyState({ type, topic, difficulty }: EmptyStateProps) {
  if (type === 'no-search') {
    return (
      <div className="text-center py-12">
        <Search className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Ready to Practice?
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Select your preferred topic, difficulty level, and number of questions to get started with coding practice.
        </p>
      </div>
    );
  }

  return (
    <div className="text-center py-12">
      <FileQuestion className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
      <h3 className="text-xl font-semibold text-foreground mb-2">
        No Questions Found
      </h3>
      <p className="text-muted-foreground max-w-md mx-auto">
        No questions found for{' '}
        <span className="font-medium">{topic?.replace('-', ' ')}</span> topic with{' '}
        <span className="font-medium">{difficulty}</span> difficulty.
        Try adjusting your filters or selecting a different topic.
      </p>
    </div>
  );
}
