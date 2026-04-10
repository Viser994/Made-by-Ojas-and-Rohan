import { trpc } from "@/lib/trpc";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const ADMIN_PASSWORD = "admin123"; // Change this to your preferred password

export default function AdminResponses() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { data: responses, isLoading } = trpc.responses.getAll.useQuery(
    undefined,
    { enabled: isAuthenticated }
  );

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
      setPassword("");
    } else {
      setError("Incorrect password");
      setPassword("");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="p-8 max-w-md w-full">
          <h1 className="text-2xl font-bold text-primary mb-6 text-center">Admin Access</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button type="submit" className="w-full bg-primary text-white">
              Login
            </Button>
          </form>
          <p className="text-xs text-gray-500 mt-4 text-center">
            This page is for admin use only
          </p>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-2">Admin Dashboard</h1>
            <p className="text-foreground">
              Total responses: <strong>{responses?.length || 0}</strong>
            </p>
          </div>
          <Button
            onClick={() => setIsAuthenticated(false)}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            Logout
          </Button>
        </div>

        {!responses || responses.length === 0 ? (
          <Card className="p-12 text-center">
            <p className="text-lg text-foreground">No responses yet.</p>
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
