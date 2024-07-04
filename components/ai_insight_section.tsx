import { AIInsightData, AIInsightModel, queryGeminiForResponse } from "@/data/ai_insight_repo";
import Project from "@/data/project_model";
import { Collapse, CollapseProps } from "antd";
import Markdown from 'react-markdown'
import { useState } from "react";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";



const AIInsightSection = ({project}:{project: Project | null})=>{
    const data: AIInsightModel[] = AIInsightData(project);

    // const []

    return (
        <div>
            {
                data.map((value,index)=>(
                    <AIInsightItem
                        key={index}
                        aiInsightModel={value} />
                ))
            }
        </div>
    )
}

const AIInsightItem = ({aiInsightModel}: {aiInsightModel: AIInsightModel})=>{
    const [isOpened, setIsOpened] = useState(false);
    const [aiResponse, setAIResponse] = useState<string | null>(null);
    const [errorMsg, setErrorMsg] = useState<String>("");
    
    const toggleView = async ()=>{
        setIsOpened(!isOpened);



        if(isOpened === false && aiResponse === null){
            try {
                
                let response = await queryGeminiForResponse(aiInsightModel);
                setAIResponse(response);
                
            } catch (error) {
                setErrorMsg("An error occured while getting insights from AI");

                setIsOpened(false);

                setTimeout(()=>{
                    setErrorMsg("");
                },15000)
            }
        }
    }

    return (
        <div>
            <div onClick={(e)=>toggleView()} className="flex text-white justify-between items-center md:text-xl bg-tertiary p-2 rounded-md">
                <div>
                    {aiInsightModel.title}
                </div>
                {
                    isOpened
                    ? (
                            <IoIosArrowUp />
                    ):(
                            <IoIosArrowDown />
                    )
                }
            </div>
            <div className="flex justify-between text-red-600 mt-2">
                {errorMsg}
            </div>
            {
                isOpened && aiResponse && (
                        <div className="m-2 pl-8">
                            <Markdown className="">
                                {aiResponse}
                            </Markdown>
                        </div>
                )
            }
            {
                isOpened && !aiResponse && (
                    <div className=" flex justify-center items-center">
                        <div className="w-8 h-8 text-secondary m-8 animate-spin">
                            <GiArtificialIntelligence size={40} />
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default AIInsightSection