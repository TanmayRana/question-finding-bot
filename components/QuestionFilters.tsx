import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FilterCriteria } from "../types";
// import { difficulties } from "../data/mockData";

interface QuestionFiltersProps {
  onFilterChange: (criteria: FilterCriteria) => void;
  isLoading: boolean;
}

export const difficulties = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
  { value: "Easy-Medium", label: "Easy-Medium" },
  { value: "Medium-Hard", label: "Medium-Hard" },
  { value: "all", label: "All" },
];

export function QuestionFilters({
  onFilterChange,
  isLoading,
}: QuestionFiltersProps) {
  const [topic, setTopic] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("");
  const [count, setCount] = useState<string>("5");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!topic.trim() || !difficulty) {
      return;
    }

    // Convert topic to lowercase and replace spaces with hyphens for consistency
    const formattedTopic = topic.trim().toLowerCase().replace(/\s+/g, "-");

    onFilterChange({
      topic: formattedTopic,
      difficulty: difficulty as "easy" | "medium" | "hard",
      count: parseInt(count),
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Search className="w-5 h-5" />
          Generate Coding Questions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label htmlFor="topic" className="text-sm font-medium">
                Topic
              </label>
              <Input
                id="topic"
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., arrays, trees, dynamic programming"
                className="w-full"
              />
              <p className="text-xs text-muted-foreground">
                Enter any programming topic
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="difficulty" className="text-sm font-medium">
                Difficulty
              </label>
              <Select value={difficulty} onValueChange={setDifficulty}>
                <SelectTrigger>
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent>
                  {difficulties.map((diff) => (
                    <SelectItem key={diff.value} value={diff.value}>
                      {diff.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="count" className="text-sm font-medium">
                Number of Questions
              </label>
              <Input
                id="count"
                type="number"
                min="1"
                max="20"
                value={count}
                onChange={(e) => setCount(e.target.value)}
                placeholder="Enter count"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-transparent">
                Action
              </label>
              <Button
                type="submit"
                className="w-full"
                disabled={isLoading || !topic.trim() || !difficulty}
              >
                {isLoading ? "Generating..." : "Generate Questions"}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
