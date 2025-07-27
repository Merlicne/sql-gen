import { getDatabaseEngine } from "@/lib/repository/repository";
import ProjectPage from "./projectPage";
import React from "react";


interface ProjectPageProps {
  params: { id: string };
}

export default function ServerProjectPage({params}: ProjectPageProps) {
  const engines = getDatabaseEngine();
  const { id } : { id: string } = React.use(params);

  return (
    <ProjectPage id={id} engines={engines} />
  )


}