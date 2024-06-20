import ProjectItem from "@/components/project_item";
import Link from "next/link";
import { FaFilter } from "react-icons/fa6";

const ProjectsPage = ()=>{
    return (
        <div className="container my-14">
            <div className='flex mx-14 justify-between my-2'>
                <div>
                    <h1 className='text-2xl'>All Projects</h1><hr className='w-10' />
                </div>
                <FaFilter />
            </div>    
            <div className='grid grid-cols-3 mx-14'>
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
            </div>
        </div>
    );
}

export default ProjectsPage