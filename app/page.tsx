// /* eslint-disable @typescript-eslint/no-unused-vars */
// "use client";

// import { useState } from "react";
// import { Code, Github, Star } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { CodingQuestion, FilterCriteria } from "@/types";
// import { QuestionService } from "@/services/questionService";
// import { ThemeToggle } from "@/components/ThemeToggle";
// import { QuestionFilters } from "@/components/QuestionFilters";
// import { StatsOverview } from "@/components/StatsOverview";
// import { LoadingSkeleton } from "@/components/LoadingSkeleton";
// import { ErrorMessage } from "@/components/ErrorMessage";
// import { EmptyState } from "@/components/EmptyState";
// import { QuestionCard } from "@/components/QuestionCard";
// import axios from "axios";

// function App() {
//   const [questions, setQuestions] = useState<CodingQuestion[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [lastCriteria, setLastCriteria] = useState<FilterCriteria | null>(null);
//   const [hasSearched, setHasSearched] = useState(false);

//   const handleFilterChange = async (criteria: FilterCriteria) => {
//     setIsLoading(true);
//     setError(null);
//     setLastCriteria(criteria);
//     setHasSearched(true);

//     try {
//       console.log("criteria", criteria);

//       const inputData = {
//         topic: criteria.topic,
//         difficulty_level: criteria.difficulty,
//         num_questions: criteria.count,
//       };

//       // const results = await QuestionService.fetchQuestions(criteria);
//       const results = await axios.post("/api/questions", inputData);
//       setQuestions(results.data);

//       if (results.length === 0) {
//         setError(
//           `No questions found for ${criteria.topic.replace(
//             "-",
//             " "
//           )} topic with ${criteria.difficulty} difficulty.`
//         );
//       }
//     } catch (err) {
//       setError("Failed to fetch questions. Please try again later.");
//       setQuestions([]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleRetry = () => {
//     if (lastCriteria) {
//       handleFilterChange(lastCriteria);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-background transition-colors">
//       {/* Header */}
//       <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/30">
//         <div className="container mx-auto px-4 py-6">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
//                 <Code className="w-6 h-6 text-primary-foreground" />
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold text-foreground">
//                   Coding Question Generator
//                 </h1>
//                 <p className="text-sm text-muted-foreground">
//                   Discover coding problems from multiple platforms
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center gap-3">
//               <ThemeToggle />
//               <Button variant="outline" size="sm" className="hidden sm:flex">
//                 <Star className="w-4 h-4 mr-2" />
//                 Star on GitHub
//               </Button>
//               <Button variant="ghost" size="sm">
//                 <Github className="w-4 h-4" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 py-8">
//         <div className="space-y-8">
//           {/* Filters */}
//           <QuestionFilters
//             onFilterChange={handleFilterChange}
//             isLoading={isLoading}
//           />

//           {/* Results Section */}
//           <div className="space-y-6">
//             {/* Stats Overview */}
//             <StatsOverview questions={questions} />

//             {/* Loading State */}
//             {isLoading && <LoadingSkeleton />}

//             {/* Error State */}
//             {error && !isLoading && (
//               <ErrorMessage
//                 message={error}
//                 onRetry={lastCriteria ? handleRetry : undefined}
//               />
//             )}

//             {/* Empty State - No Search */}
//             {!hasSearched && !isLoading && <EmptyState type="no-search" />}

//             {/* Empty State - No Results */}
//             {hasSearched && questions.length === 0 && !isLoading && !error && (
//               <EmptyState
//                 type="no-results"
//                 topic={lastCriteria?.topic}
//                 difficulty={lastCriteria?.difficulty}
//               />
//             )}

//             {/* Questions Grid */}
//             {questions.length > 0 && !isLoading && (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {questions.map((question) => (
//                   <QuestionCard key={question.id} question={question} />
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="border-t mt-16">
//         <div className="container mx-auto px-4 py-8">
//           <div className="text-center text-sm text-muted-foreground">
//             <p>
//               Built with React, TypeScript, and Shadcn/ui • Data sourced from
//               LeetCode, Codeforces, CodeChef, and GeeksforGeeks
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;

/* eslint-disable @typescript-eslint/no-unused-vars */
// "use client";

// import { useState } from "react";
// import { Code, Github, Star } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { CodingQuestion, FilterCriteria } from "@/types";
// import { ThemeToggle } from "@/components/ThemeToggle";
// import { QuestionFilters } from "@/components/QuestionFilters";
// import { StatsOverview } from "@/components/StatsOverview";
// import { LoadingSkeleton } from "@/components/LoadingSkeleton";
// import { ErrorMessage } from "@/components/ErrorMessage";
// import { EmptyState } from "@/components/EmptyState";
// import { QuestionCard } from "@/components/QuestionCard";
// import axios from "axios";

// function App() {
//   const [questions, setQuestions] = useState<CodingQuestion[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [lastCriteria, setLastCriteria] = useState<FilterCriteria | null>(null);
//   const [hasSearched, setHasSearched] = useState(false);

//   const handleFilterChange = async (criteria: FilterCriteria) => {
//     setIsLoading(true);
//     setError(null);
//     setLastCriteria(criteria);
//     setHasSearched(true);

//     try {
//       const inputData = {
//         topic: criteria.topic,
//         difficulty_level: criteria.difficulty,
//         num_questions: criteria.count,
//       };

//       const response = await axios.post("/api/questions", inputData);
//       // const response = await axios.post<CodingQuestion[]>(
//       //   "/api/questions",
//       //   inputData
//       // );
//       const questionsData = response.data.data.coding_questions;
//       console.log("questionsData", questionsData);

//       setQuestions(questionsData);

//       // if (questionsData.length === 0) {
//       //   setError(
//       //     `No questions found for ${criteria.topic.replace(
//       //       "-",
//       //       " "
//       //     )} topic with ${criteria.difficulty} difficulty.`
//       //   );
//       // }
//     } catch (err) {
//       console.error(err);
//       setError("Failed to fetch questions. Please try again later.");
//       setQuestions([]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleRetry = () => {
//     if (lastCriteria) {
//       handleFilterChange(lastCriteria);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-background transition-colors">
//       {/* Header */}
//       <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/30">
//         <div className="container mx-auto px-4 py-6">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
//                 <Code className="w-6 h-6 text-primary-foreground" />
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold text-foreground">
//                   Coding Question Generator
//                 </h1>
//                 <p className="text-sm text-muted-foreground">
//                   Discover coding problems from multiple platforms
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center gap-3">
//               <ThemeToggle />
//               <Button variant="outline" size="sm" className="hidden sm:flex">
//                 <Star className="w-4 h-4 mr-2" />
//                 Star on GitHub
//               </Button>
//               <Button variant="ghost" size="sm">
//                 <Github className="w-4 h-4" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 py-8">
//         <div className="space-y-8">
//           {/* Filters */}
//           <QuestionFilters
//             onFilterChange={handleFilterChange}
//             isLoading={isLoading}
//           />

//           {/* Results Section */}
//           <div className="space-y-6">
//             {/* Stats Overview */}
//             <StatsOverview questions={questions} />

//             {/* Loading State */}
//             {isLoading && <LoadingSkeleton />}

//             {/* Error State */}
//             {error && !isLoading && (
//               <ErrorMessage
//                 message={error}
//                 onRetry={lastCriteria ? handleRetry : undefined}
//               />
//             )}

//             {/* Empty State - No Search Yet */}
//             {!hasSearched && !isLoading && <EmptyState type="no-search" />}

//             {/* Empty State - No Results */}
//             {hasSearched && questions.length === 0 && !isLoading && !error && (
//               <EmptyState
//                 type="no-results"
//                 topic={lastCriteria?.topic}
//                 difficulty={lastCriteria?.difficulty}
//               />
//             )}

//             {/* Questions Grid */}
//             {questions.length > 0 && !isLoading && (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {questions.map((question, index) => (
//                   <QuestionCard key={index} question={question} />
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="border-t mt-16">
//         <div className="container mx-auto px-4 py-8">
//           <div className="text-center text-sm text-muted-foreground">
//             <p>
//               Built with React, TypeScript, and Shadcn/ui • Data sourced from
//               LeetCode, Codeforces, CodeChef, and GeeksforGeeks
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;

"use client";

import { useState } from "react";
import { Code, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CodingQuestion, FilterCriteria } from "@/types";
import { ThemeToggle } from "@/components/ThemeToggle";
import { QuestionFilters } from "@/components/QuestionFilters";
import { StatsOverview } from "@/components/StatsOverview";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import { ErrorMessage } from "@/components/ErrorMessage";
import { EmptyState } from "@/components/EmptyState";
import { QuestionCard } from "@/components/QuestionCard";
import axios from "axios";

function App() {
  const [questions, setQuestions] = useState<CodingQuestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastCriteria, setLastCriteria] = useState<FilterCriteria | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [topic, setTopic] = useState();

  const handleFilterChange = async (criteria: FilterCriteria) => {
    setIsLoading(true);
    setError(null);
    setLastCriteria(criteria);
    setHasSearched(true);

    try {
      const inputData = {
        topic: criteria.topic,
        difficulty_level: criteria.difficulty,
        num_questions: criteria.count,
      };

      const response = await axios.post("/api/questions", inputData);
      console.log("response in handleFilterChange", response);

      const questionsData: CodingQuestion[] =
        response.data.data.coding_questions;
      const questionTopic = response.data.data.search_criteria.topic;
      setTopic(questionTopic);

      setQuestions(questionsData);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch questions. Please try again later.");
      setQuestions([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    if (lastCriteria) {
      handleFilterChange(lastCriteria);
    }
  };

  return (
    <div className="min-h-screen bg-background transition-colors">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <Code className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  Coding Question Generator
                </h1>
                <p className="text-sm text-muted-foreground">
                  Discover coding problems from multiple platforms
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <Star className="w-4 h-4 mr-2" />
                Star on GitHub
              </Button>
              <Button variant="ghost" size="sm">
                <Github className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Filters */}
          <QuestionFilters
            onFilterChange={handleFilterChange}
            isLoading={isLoading}
          />

          {/* Results Section */}
          <div className="space-y-6">
            <StatsOverview questions={questions} />
            {isLoading && <LoadingSkeleton />}

            {error && !isLoading && (
              <ErrorMessage
                message={error}
                onRetry={lastCriteria ? handleRetry : undefined}
              />
            )}

            {!hasSearched && !isLoading && <EmptyState type="no-search" />}

            {hasSearched && questions.length === 0 && !isLoading && !error && (
              <EmptyState
                type="no-results"
                topic={lastCriteria?.topic}
                difficulty={lastCriteria?.difficulty}
              />
            )}

            {questions.length > 0 && !isLoading && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {questions.map((question, idx) => (
                  <QuestionCard
                    key={question.id ?? `question-${idx}`}
                    question={question}
                    topic={topic}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>
              Built with React, TypeScript, and Shadcn/ui • Data sourced from
              LeetCode, Codeforces, CodeChef, and GeeksforGeeks
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
