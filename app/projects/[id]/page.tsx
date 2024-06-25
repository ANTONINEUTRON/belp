"use client"
import FloatingActionButton from "@/components/floating_action_button";
import ReviewItem from "@/components/review_item";
import Image from 'next/image'
import { FaGlobe } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import Link from "next/link";
import { useEffect, useState } from "react";
import Project from "@/data/project_model";
import { getAProject } from "@/data/product_repo";
import { ProjectTagSet } from "@/components/project_tags";
import { MdRateReview } from "react-icons/md";

const OpenProjects = ({ params }: { params: { id: string } })=>{
    const [project, setProject] = useState<Project | null>(null);

    useEffect(()=>{
        try {
            getAProject(params.id).then((projet)=>{
                setProject(projet);
            });
        } catch (error) {
            console.log(error);
        }
    },[]);

    return (
        <div className=" m-14">
            {/* Overview of the project */}

            <div>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <div className="w-36 h-36 flex justify-center">
                            <img
                                src={project?.profile.logo}
                                alt="Project Logo"
                                />
                        </div>
                        
                        <div className=" ml-5">
                            <div className="font-bold text-2xl">{project?.profile.name}</div>
                            <div className="font-sm line-clamp-1 text-sm">{project?.profile.descriptionShort}</div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-evenly">
                        {/* Website url*/}
                        <Link href={""+project?.profile.urlMain}>
                            <button><FaGlobe size={24}/></button>
                        </Link>
                        {/* Whitepaer url */}
                        <Link href={""+project?.profile.urlWhitepaper}>
                            <button><GrDocumentText  size={24}/></button>
                        </Link>
                    </div>
                </div>
                <div className="p-5 ">
                    <div>
                        {
                            project && (
                                <ProjectTagSet 
                                    project={project!} />
                            )
                        }
                    </div>
                    <div className="mt-5">
                        {project?.profile.descriptionLong}
                    </div>
                    {/* <span className="font-semibold text-lg">Products</span> */}
                </div>
            </div>

            {/* Reviews here */}
            <div className="mt-8">
                <div>
                    <div className="font-bold text-2xl">
                        Reviews
                    </div>
                    <div>
                        <MdRateReview />
                    </div>
                </div>
                <div>
                    <ReviewItem />
                    <ReviewItem />
                    <ReviewItem />
                </div>
            </div>

            <FloatingActionButton/>
                
            {/* </FloatingActionButton> */}
        </div>
    );
}

export default OpenProjects