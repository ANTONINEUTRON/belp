import { GoogleGenerativeAI } from "@google/generative-ai";
import Project from "./project_model";

export interface AIInsightModel{
    title: string;
    query: string;
}


export const AIInsightData = (project: Project | null): AIInsightModel[] => {
    const reusedPartOfQuery = "this blockchain project called "+
        project?.profile.name+" based on this description: " + project?.profile.descriptionLong
        + " and other information you can add. \n response should be in article format";

    return !project 
    ? []
    : [
        {
            title: "Project Summary",
            query: "Summarize in clear terms the key features and functionalities of "+reusedPartOfQuery
        },
        {
            title: "Potential risks of this project",
            query: "Provide potential risks and response in clear simple terms of "+reusedPartOfQuery
        },
        {
            title: "Tokenomics breakdown",
            query: "Provide tokenomics breakdown and simplication of "+reusedPartOfQuery
            +" the project white paper is accessible via "+project.profile.urlWhitepaper
        },
        {
            title: "How does this project standout & what they aim to solve",
            query: "How does this project stand out and What challenges does this project aim to solve? " + reusedPartOfQuery
                + " the project white paper is accessible via " + project.profile.urlWhitepaper
        },
        {
            title: "Insight into the project's long-term goals and vision?",
            query: "Provide insight into this project's long-term goals and vision of " + reusedPartOfQuery
                + " the project white paper is accessible via " + project.profile.urlWhitepaper
        },
        {
            title: "Regulatory and Security Compliance",
            query: "Provide insights on the Regulatory and Security Compliance of " + reusedPartOfQuery
                + " the project white paper is accessible via " + project.profile.urlWhitepaper
        }
    ];

}

export const queryGeminiForResponse = async (aiInsight: AIInsightModel): Promise<string>=>{
    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY ?? "");

    console.log(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
    

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = aiInsight.query;

    console.log(prompt);
    

    const result = await model.generateContent(prompt);
    const response = await result.response;

    return response.text();
}