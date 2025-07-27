import { getDatabaseEngine } from "@/lib/repository/repository";
import ProjectPage from "./projectPage";
import React from "react";
import { getProject } from "@/lib/localStorage/project";


interface ProjectPageProps {
  params: { id: string };
}

export default function ServerProjectPage({params}: ProjectPageProps) {
  const engines = getDatabaseEngine();
  const { id } : { id: string } = React.use(Promise.resolve(params));


  return (
    <ProjectPage id={id} engines={engines} />
  )


}