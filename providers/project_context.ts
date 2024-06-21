import Project from "@/data/project_model";
import { createContext } from "react"

export interface ProjectContextProps{
    projects: Project[] | null;
    errorMessage: string | null;
    fetchProject: ((name:string)=>Project) | null;
    searchForProject: ((value: string)=>Project[]) | null; 
}

const ProjectContext = createContext<ProjectContextProps>({
    projects: null,
    errorMessage: null,
    fetchProject: null,
    searchForProject: null,
});

export default ProjectContext