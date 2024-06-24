import Project from '@/data/project_model';
import Link from 'next/link';
import { ProjectTagSet } from './project_tags';

interface ProjectItemProps{
    project: Project,
}

const ProjectItem: React.FC<ProjectItemProps> = ({project})=>{
    const profile = project.profile;

    return (
        <Link href={"/projects/"+project.id}>
            <div className='border rounded-lg m-2 my-4 p-4'>
                <div className='w-32 h-32 flex justify-center items-center'>
                    <img
                        src={profile.logo}
                        alt={profile.name+" Logo"}
                        width={120}
                        height={120}
                        className='mb-5 m-1 '
                        />
                </div>
                <div className='flex md:justify-between'>
                    <span className='font-semibold text-lg'>
                        {profile?.name}
                    </span>
                    <span  className='font-light text-sm'>BTC</span>
                </div>

                <div className='line-clamp-2 my-2'>
                    {profile?.descriptionShort}
                </div>

                <ProjectTagSet project={project} />
                

            </div>
        </Link>
        
    );
}


export default ProjectItem;