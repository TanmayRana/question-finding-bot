import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
import { CodingQuestion } from "../types";
// import { platforms } from "../data/mockData";

interface StatsOverviewProps {
  questions: CodingQuestion[];
}

export function StatsOverview({ questions }: StatsOverviewProps) {
  if (questions.length === 0) return null;

  // const platformCounts = questions.reduce((acc, question) => {
  //   acc[question.platform] = (acc[question.platform] || 0) + 1;
  //   return acc;
  // }, {} as Record<string, number>);

  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">
              Found {questions.length} question
              {questions.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">
              Sources:
            </span>
            {Object.entries(platformCounts).map(([platformId, count]) => {
              const platform = platforms.find(p => p.id === platformId);
              return (
                <Badge key={platformId} variant="secondary" className="text-xs">
                  {platform?.logo} {platform?.name} ({count})
                </Badge>
              );
            })}
          </div> */}
        </div>
      </CardContent>
    </Card>
  );
}
