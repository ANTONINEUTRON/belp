"use client"

import ProjectItem from "@/components/project_item";
import getProjectsFromApi from "@/data/project_repo";
import Project from "@/data/project_model";
import ProjectContext, { ProjectContextProps } from "@/providers/project_context";
import axios from "axios";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa6";
import LoadingUI from "@/components/loading_ui";
import { IoIosArrowDown } from "react-icons/io";
import useScrollPosition from "@/hooks/usePosition";

const ProjectsPage = ()=>{
    // const projectContext: ProjectContextProps = useContext(ProjectContext);
    const [projects, setProjects] = useState<Project[] | null>(null);
    const [errorMsg, setErrorMsg] = useState<String>("");
    const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
    // const []

    useEffect(()=>{
        getProjectsFromApi().then(
            (projectsss)=>{
                setProjects(projectsss);

                // setCurrentStartValue(currentStartValue + (projects!.length));
            },
            (reason)=>{

                setErrorMsg("An error occured while fetching projects");
                console.log(reason);
            }
        );
    },
    []);

    const loadMore = ()=>{
        setIsLoadingMore(true);
        // if (scrollPosition > 80) {
            console.log(projects?.length);
            
        // load more and append to the list of projects
        getProjectsFromApi([],projects?.length).then(
            (projectsss)=>{
                let proj: Project[] = projects!;
                setProjects([...proj, ...projectsss]);

                setIsLoadingMore(false);
                // setCurrentStartValue(currentStartValue + (projectsss!.length));
            },
            (reason)=>{
                setIsLoadingMore(false);
                // setErrorMsg("An error occured while fetching projects");
                console.log(reason);
            }
        );
        // }
    }

    // useEffect(() => {
    
    // }, [scrollPosition]);
    
    
    return projects ? (
        <div className="container my-14">
            <div className='flex mx-14 justify-between my-2'>
                <div>
                    <h1 className='text-2xl'>All Projects</h1><hr className='w-10' />
                </div>
                <FaFilter />
            </div>    
            <div className='grid grid-cols-3 mx-14'>
                {
                    projects === null 
                    ? (
                        <div></div>
                    )
                    : projects!.length === 0 ? (
                        <div>
                            Projects is Empty
                        </div>
                    ) :
                    projects?.map((project, index)=>
                        (
                            <ProjectItem 
                                project={project}/>
                        )
                    )
                }
            </div>
            <div className="flex justify-center">
                {
                    isLoadingMore 
                    ? (
                        <div className="w-8 h-8 animate-spin">
                            <LoadingUI />
                        </div>
                    )
                    : (
                        <button onClick={()=>loadMore()} className="bg-primary py-1 px-10 rounded-2xl mt-10 flex items-center justify-evenly">
                            Load More
                            <IoIosArrowDown className="ml-4" />
                        </button>
                    )
                }
            </div>
        </div>
    ) : 
    errorMsg ?
    (
        <div className="flex items-center justify-center h-screen text-2xl text-red-600">
            {errorMsg}
        </div>
    )
    : (
        <div className="flex items-center justify-center h-screen">
            <div className="h-10 w-10">
                <LoadingUI />
            </div>
        </div>
    );
}

export default ProjectsPage