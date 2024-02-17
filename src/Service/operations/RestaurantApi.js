import { apiConnector } from "../apiConnector";


const getRestaurantListApi=process.env.REACT_APP_BASE_URL +"/restaurant/getRestaurantList";
const getRestaurantDataApi=process.env.REACT_APP_BASE_URL +"/restaurant/getRestaurantData";
const getRestaurantOverViewApi=process.env.REACT_APP_BASE_URL +"/restaurant/getRestaurantOverview";
const getRestaurantMenuApi=process.env.REACT_APP_BASE_URL +"/restaurant/getRestaurantMenu";
const getRestaurantReviewsApi=process.env.REACT_APP_BASE_URL +"/restaurant/getRestaurantReviews";
const getRestaurantOffersApi=process.env.REACT_APP_BASE_URL +"/restaurant/getRestaurantOffers";

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
export const getRestaurantOverview = async (restaurantId) => {
    try {
        const response = await apiConnector('POST',getRestaurantOverViewApi,{restaurantId:restaurantId});
    console.log("GET RESTAURANT OVERVIEW API RESPONSE",response.data);
    if (!response?.data?.success) {
        throw new Error("Could Not Fetch Restaurant Data")
      }
    return response.data.data;
    } catch (error) {
        console.error(error);
    }
}
export const getRestaurantMenu = async (restaurantId) => {
    try {
        const response = await apiConnector('POST',getRestaurantMenuApi,{restaurantId:restaurantId});
    console.log("GET RESTAURANT MENU API RESPONSE",response.data);
    if (!response?.data?.success) {
        throw new Error("Could Not Fetch Restaurant Data")
      }
    return response.data.data;
    } catch (error) {
        console.error(error);
    }
}
export const getRestaurantReviews = async (restaurantId) => {
    try {
        const response = await apiConnector('POST',getRestaurantReviewsApi,{restaurantId:restaurantId});
    console.log("GET RESTAURANT REVIEW API RESPONSE",response.data);
    if (!response?.data?.success) {
        throw new Error("Could Not Fetch Restaurant Data")
      }
    return response.data.data;
    } catch (error) {
        console.error(error);
    }
}
export const getRestaurantOffers = async (restaurantId) => {
    try {
        const response = await apiConnector('POST',getRestaurantOffersApi,{restaurantId:restaurantId});
    console.log("GET RESTAURANT OFFERS API RESPONSE",response.data);
    if (!response?.data?.success) {
        throw new Error("Could Not Fetch Restaurant Data")
      }
    return response.data.data;
    } catch (error) {
        console.error(error);
    }
}