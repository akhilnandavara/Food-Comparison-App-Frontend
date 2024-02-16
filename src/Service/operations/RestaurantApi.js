import { apiConnector } from "../apiConnector";


const getRestaurantListApi=process.env.REACT_APP_BASE_URL +"/restaurant/getRestaurantList";
const getRestaurantDataApi=process.env.REACT_APP_BASE_URL +"/restaurant/getRestaurantData";

export const getRestaurantList = async () => {
    try {
        const response = await apiConnector('GET', getRestaurantListApi);
    console.log("GET RESTAURANT LIST API RESPONSE",response);
    if (!response?.data?.success) {
        throw new Error("Could Not Fetch Restaurant List")
      }
    return response.data.data;
    } catch (error) {
        console.error(error);
    }
}

export const getRestaurantData = async (restaurantId) => {
    try {
        const response = await apiConnector('POST',getRestaurantDataApi,{restaurantId:restaurantId});
    console.log("GET RESTAURANT DATA API RESPONSE",response.data);
    if (!response?.data?.success) {
        throw new Error("Could Not Fetch Restaurant Data")
      }
    return response.data.data;
    } catch (error) {
        console.error(error);
    }
}