import { type } from "@testing-library/user-event/dist/type";
import { apiConnector } from "../apiConnector";

const getCuisineDataApi= process.env.REACT_APP_BASE_URL+"/cuisine/getCuisineData";

export const getCuisineData= async (cuisine) => {    
    try {
        const response = await apiConnector('POST',getCuisineDataApi, {cuisineName:cuisine});
    console.log("GET CUISINE DATA API RESPONSE",response);
    if (!response?.data?.success) {
        throw new Error("Could Not Fetch Cuisine Data")
      }
    return response.data.data;
    } catch (error) {
        console.error(error);
    }
}
