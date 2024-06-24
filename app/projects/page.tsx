"use client"

import ProjectItem from "@/components/project_item";
import getProjectsFromApi from "@/data/product_repo";
import Project from "@/data/project_model";
import ProjectContext, { ProjectContextProps } from "@/providers/project_context";
import axios from "axios";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa6";

const ProjectsPage = ()=>{
    const projectContext: ProjectContextProps = useContext(ProjectContext);
    const [projects, setProjects] = useState<Project[] | null>(null);
    const [errorMsg, setErrorMsg] = useState<String>("");
    // const []

    useEffect(()=>{
        try {
            getProjectsFromApi().then(
                (projectsss)=>{
                    setProjects(projectsss);
                }
            );
        } catch (error) {
            setErrorMsg("An error occured while fetching projects");
            console.log(error);
        }
    },[]);
    
    return (
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
        </div>
    );
}

export default ProjectsPage