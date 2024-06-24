import Project from "@/data/project_model";
import { createContext } from "react"

export interface ProjectContextProps{
    projects: Project[] | null;
    setProjects: (projs: Project[]) => void;
    errorMessage: string | null;
    setErrorMessage: (msg: string)=>void;
    // fetchProject: ((name:string)=>Project) | null;
    // searchForProject: ((value: string)=>Project[]) | null; 
}

const ProjectContext = createContext<ProjectContextProps>({
    projects: null,
    errorMessage: null,
    setProjects: ()=>{},
    setErrorMessage: ()=>{},
    // fetchProject: null,
    // searchForProject: null,
});

export default ProjectContext