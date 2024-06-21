"use client"

import getProjects from "@/data/product_repo";
import Project from "@/data/project_model";
import { ReactNode, useLayoutEffect, useState } from "react";
import ProjectContext, { ProjectContextProps } from "./project_context";

interface ProjectProvidersProps{
    children: ReactNode;
}

const ProjectProviders: React.FC<ProjectProvidersProps> = ({children})=>{
    // const [projects, setProjects] = useState<Project[] | null>(null)
    // const [error, setErrorMessage] = useState<string | null>(null);
    const [stateData, setStateData] = useState<ProjectContextProps>({
        projects: null,
        errorMessage: null,
        fetchProject: null,
        searchForProject: null,
    });

    const fetchInitialProjects = ()=>{
        try {
            getProjects();
        } catch (error) {
            console.error(error);
        }
    }

    useLayoutEffect(()=>{
        fetchInitialProjects();
    },[]);

    return (
        <ProjectContext.Provider value={stateData}>
            {children}
        </ProjectContext.Provider>
    );
}

export default ProjectProviders