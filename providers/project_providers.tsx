"use client"

import getProjectsFromApi from "@/data/project_repo";
import Project from "@/data/project_model";
import { createContext, ReactNode, useEffect, useLayoutEffect, useState } from "react";
import { ProjectContext, ProjectContextProps } from "./project_context";


interface ProjectProvidersProps{
    children: ReactNode;
}

const ProjectProviders: React.FC<ProjectProvidersProps> = ({children})=>{


    const [projectState, setProjectState] = useState<ProjectContextProps>({
        projects: null,
        errorMessage: "",
        loadMore: loadMore,
        isLoadingMore: false,
    });

    function loadMore(prevState: ProjectContextProps){
        
        setProjectState({
            ...prevState,
            isLoadingMore: true,
        });
            
        // load more and append to the list of projects
        getProjectsFromApi([],(prevState.projects?.length ?? 1)).then(
            (projectsss)=>{
                // let proj: Project[] = projects!;
                
                setProjectState({
                    ...prevState,
                    projects: [
                        ...prevState.projects!,
                        ...projectsss
                    ],
                    isLoadingMore:false,
                });
            },
            (reason)=>{
                setProjectState({
                    ...prevState,
                    isLoadingMore: false,
                });
                
                console.log(reason);
            }
        );
    }


    useEffect(()=>{
        getProjectsFromApi().then(
            (projectsss)=>{
                
                const newState = {
                    ...projectState,
                    projects: projectsss,
                    
                };
                setProjectState(newState);
            },
            (reason)=>{
                // setErrorMsg();
                setProjectState({
                    ...projectState,
                    errorMessage: "An error occured while fetching projects",
                });
                console.log(reason);
            }
        );
    },
    []);

    return (
        <ProjectContext.Provider value={projectState}>
            {children}
        </ProjectContext.Provider>
    );
}

export default ProjectProviders