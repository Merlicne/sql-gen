import type { Project } from "@/lib/model/project";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ProjectListProps {
  projects: Project[];
  onClearProjects: () => void;
}

export function ProjectList({ projects, onClearProjects }: ProjectListProps) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <div className="gap-4 md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
        {projects.map((project) => (
          <Link key={project.id} href={`/${project.id}`}>
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">ID: Created: {new Date(project.createdAt).toLocaleDateString()}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <Button onClick={onClearProjects} className="mt-4 w-fit mx-auto">Clear All Projects</Button>
    </div>
  );
}
