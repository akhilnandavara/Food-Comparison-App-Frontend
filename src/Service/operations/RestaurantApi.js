import { apiConnector } from "../apiConnector";


const getRestaurantListApi=process.env.REACT_APP_BASE_URL +"/restaurant/getRestaurantList";
const getRestaurantDataApi=process.env.REACT_APP_BASE_URL +"/restaurant/getRestaurantData";

export const getRestaurantList = async () => {
    try {
        const response = await apiConnector('POST', getRestaurantListApi);
    console.log("GET RESTAURANT LIST API RESPONSE",response);
    if (!response?.data?.success) {
        throw new Error("Could Not Fetch Restaurant List")
      }
    return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getRestaurantData = async (id) => {
    try {
        const response = await apiConnector('GET', getRestaurantDataApi, id);
    console.log("GET RESTAURANT DATA API RESPONSE",response.data);
    if (!response?.data?.success) {
        throw new Error("Could Not Fetch Restaurant Data")
      }
    return response.data;
    } catch (error) {
        console.error(error);
    }
}