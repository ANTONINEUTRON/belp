import Project from "@/data/project_model";
import { createContext } from "react";


export interface ProjectContextProps{
    projects: Project[] | null;
    errorMessage: string;
    isLoadingMore: boolean;
    loadMore: ((prevState: ProjectContextProps)=>void);
}

export const ProjectContext = createContext<ProjectContextProps | null>(null);

