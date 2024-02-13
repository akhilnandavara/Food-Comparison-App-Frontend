import { apiConnector } from "../apiConnector";

const getCuisineDataApi=process.env.BASE_API_URL+"/cuisine/getCuisineData";

export const getCuisineData= async (cuisine) => {    
    try {
        const response = await apiConnector('GET', getCuisineDataApi, null, null, cuisine);
    console.log("GET CUISINE DATA API RESPONSE",response.data);
    if (!response?.data?.success) {
        throw new Error("Could Not Fetch Cuisine Data")
      }
    return response.data;
    } catch (error) {
        console.error(error);
    }
}
