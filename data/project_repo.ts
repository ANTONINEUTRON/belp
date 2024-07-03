"use client"

import axios from "axios";
import Project, { SearchResult } from "./project_model";


const BASE_URL = "https://cors-anywhere.herokuapp.com/https://fetch.thegrid.id";

const getProjectsFromApi = async(projectIDS: String[] = [], startIndex: number = 1,): Promise<Project[]> => {
    let idsToFetch = generateIdList(startIndex); 

    const url = BASE_URL+"/?ids="+idsToFetch;
    
    let res = await axios.get(url);

    return res.data.body;
}

export const getAProject = async(projectId: String) : Promise<Project[]>=>{
    const url = BASE_URL+"/?ids="+projectId;
    let res = await axios.get(url);

    return res.data.body;
}

export const searchForProject = async (query: string): Promise<SearchResult>=>{
    //
    //
    const url = BASE_URL+"/?q="+query;

    let res = await axios.get(url);
    
    return res.data.body.search_result;
}

function generateIdList(startIndex: number): string {
    // Initialize an empty array to store IDs
    const idList: string[] = [];
  
    // Loop 10 times to generate 10 IDs
    for (let i = 0; i < 12; i++) {
      // Create the ID string with padding for single-digit numbers
      const id = `ID-${startIndex + i}`;
      // Add the ID to the list
      idList.push(id);
    }
  
    // Join the IDs in the list with commas and return the final string
    return idList.join(',');
  }

export default getProjectsFromApi