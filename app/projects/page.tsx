"use client"

import ProjectItem from "@/components/project_item";
import { useContext, useEffect } from "react";
import { FaFilter } from "react-icons/fa6";
import LoadingUI from "@/components/loading_ui";
import { IoIosArrowDown } from "react-icons/io";
import { ProjectContext, ProjectContextProps } from "@/providers/project_context";


const ProjectsPage = ()=>{
    const projectState: ProjectContextProps = useContext(ProjectContext)!;

    return projectState.projects ? (
        <div className="container my-14">
            <div className='flex md:mx-14 mx-2 justify-start mt-36'>
                <div>
                    <h1 className='text-2xl'>All Projects</h1><hr className='w-10' />
                </div>
                {/* <FaFilter /> */}
            </div>    
            <div className='grid md:grid-cols-3 grid-cols-1 md:mx-14'>
                {
                    projectState.projects === null 
                    ? (
                        <div></div>
                    )
                    : projectState.projects.length === 0 ? (
                        <div>
                            Projects is Empty
                        </div>
                    ) :
                    projectState.projects.map((project, index)=>
                        (
                            <ProjectItem 
                                key={index}
                                project={project}/>
                        )
                    )
                }
            </div>
            <div className="flex justify-center">
                {
                    projectState.isLoadingMore 
                    ? (
                        <div className="w-8 h-8 animate-spin">
                            <LoadingUI />
                        </div>
                    )
                    : (
                        <button type="button" onClick={()=>projectState.loadMore(projectState)} className="bg-primary py-1 px-10 rounded-2xl mt-10 flex items-center justify-evenly">
                            Load More
                            <IoIosArrowDown className="ml-4" />
                        </button>
                    )
                }
            </div>
        </div>
    ) : 
    projectState.errorMessage ?
    (
        <div className="flex items-center justify-center h-screen text-2xl text-red-600">
            {projectState.errorMessage}
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