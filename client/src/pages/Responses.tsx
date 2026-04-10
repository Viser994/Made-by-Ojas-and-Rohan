import { trpc } from "@/lib/trpc";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export default function Responses() {
  const { data: responses, isLoading, error } = trpc.responses.getAll.useQuery();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="p-8 max-w-2xl">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading Responses</h1>
          <p className="text-foreground">{error.message}</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-2">Community Responses</h1>
        <p className="text-foreground mb-8">
          Total responses: <strong>{responses?.length || 0}</strong>
        </p>

        {!responses || responses.length === 0 ? (
          <Card className="p-12 text-center">
            <p className="text-lg text-foreground">No responses yet. Be the first to share your thoughts!</p>
          </Card>
        ) : (
          <div className="grid gap-6">
            {responses.map((response, index) => (
              <Card key={response.id} className="p-6 border-l-4" style={{ borderLeftColor: "#154D57" }}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg" style={{ color: "#154D57" }}>
                      {response.pollAnswer}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {new Date(response.createdAt).toLocaleDateString()} at{" "}
                      {new Date(response.createdAt).toLocaleTimeString()}
                    </p>
                  </div>
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    #{index + 1}
                  </span>
                </div>
                <p className="text-foreground leading-relaxed italic">"{response.userResponse}"</p>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
