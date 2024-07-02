"use client"

import getProjectsFromApi from "@/data/project_repo";
import Project from "@/data/project_model";
import { ReactNode, useLayoutEffect, useState } from "react";
import ProjectContext, { ProjectContextProps } from "./project_context";

interface ProjectProvidersProps{
    children: ReactNode;
}

const ProjectProviders: React.FC<ProjectProvidersProps> = ({children})=>{
    const [projects, setProjects] = useState<Project[] | null>(null)
    const [error, setErrorMessage] = useState<string | null>(null);
    const stateData: ProjectContextProps = {
        projects: projects,
        errorMessage: error,
        setErrorMessage: setErrorMessage,
        setProjects: setProjects,
    };

    const fetchInitialProjects = async()=>{
        try {
            let projects: Project[] = await getProjectsFromApi();
            console.log("PROJECTS gotten");
            console.log(projects);
            let upda = {
                ...stateData,
                projects: projects,
                errorMessage: null,
            };
            setProjects(projects);
            // setStateData({
            //     ...stateData,
            //     projects: projects,
            //     errorMessage: null,
            // });
            console.log(upda);
        } catch (err) {
            setErrorMessage("An error occured while fetching projects");
            // setStateData({
            //     ...stateData,
            //     errorMessage: "An error occured while fetching projects",
            // });
            console.error(err);
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