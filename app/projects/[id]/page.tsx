"use client"

import { GiArtificialIntelligence } from "react-icons/gi";
import { FaGlobe } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import Link from "next/link";
import { useEffect, useState } from "react";
import Project from "@/data/project_model";
import { getAProject } from "@/data/project_repo";
import { ProjectTagSet } from "@/components/project_tags";
import { MdRateReview } from "react-icons/md";
import { AddCommentButton } from "@/components/comment_box";
import ReviewSection from "@/components/review_section";
import ReviewProvider from "@/providers/review_provider";
import { Tabs } from "antd";
import AIInsightSection from "@/components/ai_insight_section";
import LoadingUI from "@/components/loading_ui";

const OpenProjects = ({ params }: { params: { id: string } })=>{
    const [project, setProject] = useState<Project | null>(null);
    const [errorMsg, setErrorMsg] = useState<string>("");

    useEffect(()=>{
        getAProject(params.id).then((projet)=>{
            setProject(projet[0]);
        },
        (reason)=>{
            setErrorMsg("Couldn't fetch project! Might be a connection. Try refreshing the page");
        });
    },[]);

    return !project ?
    (
        <div className="h-[78vh] w-full flex flex-col justify-center items-center">
        {
            errorMsg ?
            (
                <div className="flex justify-center flex-col items-center text-lg text-red-600">
                    {errorMsg}
                </div>
            ):(
                <div className="">
                    <div className="w-16 h-16">
                        <LoadingUI />
                    </div>
                </div>
            )
        }
        </div>
    )
    : (
        <div className="md:m-14 mx-2 mt-24">
            {/* Overview of the project */}
            <div>
                <div className="flex justify-between">
                    <div className="flex flex-col items-start">
                        <div className="w-36 h-36 flex justify-center items-center">
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
                </div>
            </div>

            <div className="mt-8 z-0">
                <div className="font-bold text-2xl">
                    <Tabs
                        type="card"
                        tabBarStyle={{textDecorationColor: `#ff5656`}}
                        items={
                            [
                                {
                                    label: (<div className="text-tertiary flex justify-between items-center"><GiArtificialIntelligence size={30} /> A.I Insights</div>),
                                    key: "ai",
                                    children: (
                                        <AIInsightSection project={project} />
                                    ),
                                },
                                {
                                    label: (<div className="text-tertiary flex justify-between items-center"><MdRateReview size={30} />Reviews</div>),
                                    key: "review",
                                    children: (
                                        <ReviewProvider>
                                            <ReviewSection
                                                projectId={params.id} />
                                        </ReviewProvider>
                                    ),
                                },
                            ]
                        }
                    />
                </div>

                
                
            </div>

            <AddCommentButton
                projectId={params.id} />
        </div>
    );
}

export default OpenProjects