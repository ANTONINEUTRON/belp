import axios from "axios";
import Project from "./project_model";

interface getProductsProps{
    name:string;
    id:string;
}

const getProjects = async (): Promise<Project[]>=> {
    let idsToFetch = "ID-01,ID-02,ID-03,ID-04,ID-05,ID-06,ID-07,ID-08,ID-09,ID-10";
    const url = "https://fetch.thegrid.id/?ids=" + idsToFetch;
    console.log(url);
    let res: Response = await axios.get(url, AxiosRequestConfig());

    console.log(res);
    // let res = await 
    return []; 
}

export default getProjects