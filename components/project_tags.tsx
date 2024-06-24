import Project from "@/data/project_model";

interface ProjectTagsProps{
    title: string;
    content: string;
}

export const ProjectTags: React.FC<ProjectTagsProps> = ({title, content})=>{
    return (
        <div className='bg-primary rounded-2xl m-1 text-sm'>
            <span className='px-3'>
                {title}
            </span>
            <div className='bg-secondary rounded-xl px-3 py-2'>
                {content}
            </div>
        </div>
    );
}


export const ProjectTagSet = ({project}:{project: Project})=>{
    const profile = project.profile;
    return (
        <div className='flex flex-wrap'>
                    <ProjectTags 
                        title='Sector'
                        content={profile.profileSector.name}/>
                    <ProjectTags 
                        title='Profile Type'
                        content={profile.profileType.name}/>
                    <ProjectTags 
                        title='status'
                        content={profile.profileStatus.name}/>
                        {profile.foundingDate && (<ProjectTags 
                            title='Founding Date'
                            content={profile.foundingDate}/>)}
                </div>
    );
}