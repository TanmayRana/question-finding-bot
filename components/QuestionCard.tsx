/* eslint-disable @typescript-eslint/no-explicit-any */
// import { ExternalLink } from "lucide-react";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// // import { CodingQuestion } from "../types";
// import { platforms } from "../data/mockData";

// // interface QuestionCardProps {
// //   question: CodingQuestion;
// // }

// export function QuestionCard({ question }: any) {
//   console.log("question", question);

//   const platform = platforms.find((p) => p.id === question.platform);

//   const getDifficultyColor = (difficulty: string) => {
//     switch (difficulty) {
//       case "easy":
//         return "bg-green-100 text-green-800 hover:bg-green-200";
//       case "medium":
//         return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
//       case "hard":
//         return "bg-red-100 text-red-800 hover:bg-red-200";
//       default:
//         return "bg-gray-100 text-gray-800 hover:bg-gray-200";
//     }
//   };

//   return (
//     <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
//       <CardHeader className="pb-3">
//         <div className="flex items-start justify-between gap-3">
//           <h3 className="font-semibold text-lg leading-tight text-foreground">
//             {question.title}
//           </h3>
//           <div className="flex items-center gap-2 flex-shrink-0">
//             <Badge
//               variant="secondary"
//               className={`${platform?.color} text-white font-medium`}
//             >
//               {platform?.logo} {platform?.name}
//             </Badge>
//           </div>
//         </div>
//         <div className="flex items-center gap-2 mt-2">
//           <Badge
//             variant="secondary"
//             className={getDifficultyColor(question.difficulty)}
//           >
//             {question.difficulty.charAt(0).toUpperCase() +
//               question.difficulty.slice(1)}
//           </Badge>
//           <Badge variant="outline" className="text-muted-foreground">
//             {question.topic.replace("-", " ")}
//           </Badge>
//         </div>
//       </CardHeader>

//       <CardContent className="pt-0">
//         {question.description && (
//           <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
//             {question.description}
//           </p>
//         )}

//         <Button
//           variant="outline"
//           size="sm"
//           className="w-full group"
//           onClick={() => window.open(question.url, "_blank")}
//         >
//           <span>Solve Problem</span>
//           <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//         </Button>
//       </CardContent>
//     </Card>
//   );
// }

// import { ExternalLink } from "lucide-react";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";

// export function QuestionCard({ question, topic }: any) {
//   console.log("question in QuestionCard", question);

//   const getDifficultyColor = (difficulty: string) => {
//     switch (difficulty) {
//       case "easy":
//         return "bg-green-100 text-green-800 hover:bg-green-200";
//       case "medium":
//         return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
//       case "hard":
//         return "bg-red-100 text-red-800 hover:bg-red-200";
//       default:
//         return "bg-gray-100 text-gray-800 hover:bg-gray-200";
//     }
//   };

//   return (
//     <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
//       <CardHeader className="pb-3">
//         <div className="flex items-start justify-between gap-3">
//           <h3 className="font-semibold text-lg leading-tight text-foreground">
//             {question.title}
//           </h3>
//           <div className="flex items-center gap-2 flex-shrink-0">
//             {question.platform && (
//               <Badge variant="secondary" className={` text-white font-medium`}>
//                 {question.platform.name}
//               </Badge>
//             )}
//           </div>
//         </div>
//         <div className="flex items-center gap-2 mt-2">
//           <Badge
//             variant="secondary"
//             className={getDifficultyColor(question.difficulty)}
//           >
//             {question.difficulty.charAt(0).toUpperCase() +
//               question.difficulty.slice(1)}
//           </Badge>
//           <Badge variant="outline" className="text-muted-foreground">
//             {topic ? topic.replace("-", " ") : "Unknown Topic"}
//           </Badge>
//         </div>
//       </CardHeader>

//       <CardContent className="pt-0">
//         {question.description && (
//           <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
//             {question.description}
//           </p>
//         )}

//         <Button
//           variant="outline"
//           size="sm"
//           className="w-full group"
//           onClick={() => window.open(question.url, "_blank")}
//         >
//           <span>Solve Problem</span>
//           <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//         </Button>
//       </CardContent>
//     </Card>
//   );
// }

import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// type Platform = {
//   name: string;
// };

type Question = {
  title: string;
  description?: string;
  difficulty?: "easy" | "medium" | "hard" | string;
  platform?: string;
  url?: string;
};

interface QuestionCardProps {
  question: Question;
  topic?: string;
}

export function QuestionCard({ question, topic }: QuestionCardProps) {
  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
      case "hard":
        return "bg-red-100 text-red-800 hover:bg-red-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-lg leading-tight text-foreground">
            {question?.title ?? "Untitled"}
          </h3>
          <div className="flex items-center gap-2 flex-shrink-0">
            {question?.platform && (
              <Badge variant="secondary" className="font-medium">
                {question.platform}
              </Badge>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <Badge
            variant="secondary"
            className={getDifficultyColor(question?.difficulty)}
          >
            {question?.difficulty
              ? question.difficulty.charAt(0).toUpperCase() +
                question.difficulty.slice(1)
              : "Unknown"}
          </Badge>
          <Badge variant="outline" className="text-muted-foreground">
            {topic ? topic.replace("-", " ") : "Unknown Topic"}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {question?.description && (
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {question.description}
          </p>
        )}

        <Button
          variant="outline"
          size="sm"
          className="w-full group"
          disabled={!question?.url}
          onClick={() => {
            if (question?.url) window.open(question.url, "_blank");
          }}
        >
          <span>Solve Problem</span>
          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
}
