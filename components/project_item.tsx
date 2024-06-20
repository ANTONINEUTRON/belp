import Image from 'next/image'
import Link from 'next/link';
import ProjectTags from './project_tags';

const ProjectItem = ()=>{
    return (
        <Link href='/projects/uu'>
            <div className='border rounded-lg m-2 my-4 p-4'>
                <Image
                    src="/bitcoin_img.svg"
                    alt="Bitcoin Logo"
                    // className={styles.vercelLogo}
                    width={200}
                    height={30}
                    priority
                    className='mb-5 m-1'
                    />

                <div className='flex md:justify-between'>
                    <span className='font-semibold text-lg'>
                        Bitcoin
                    </span>
                    <span  className='font-light text-sm'>BTC</span>
                </div>

                <div className='line-clamp-2 my-2'>
                    The tagline which can be usually semi long but shouldn't exceed two lines but if it do it'll be clamped
                </div>

                <div className='flex flex-wrap'>
                    <ProjectTags 
                        title='Sector'
                        content='Fiannce'/>
                    <ProjectTags 
                        title='Profile Type'
                        content='project'/>
                    <ProjectTags 
                        title='status'
                        content='Active'/>
                    <ProjectTags 
                        title='Main Product Type'
                        content='Internet of things'/>
                </div>
                

            </div>
        </Link>
        
    );
}

export default ProjectItem;