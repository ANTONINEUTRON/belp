
interface ProjectTagsProps{
    title: string;
    content: string;
}

const ProjectTags: React.FC<ProjectTagsProps> = ({title, content})=>{
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

export default ProjectTags