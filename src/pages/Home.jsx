import React from "react";
import FoodSlider from "../components/core/FoodSlider";
import cuisineUrls from "../data/cuisineUrls";
import  topBrandsUrls  from "../data/topBrandsUrls";
import RestaurantList from "../components/core/RestaurantList";



const Home = () => {

  return (
    <div  className="px-2">
      <h2 className="my-2">Explore the Deliciousness</h2>
    <FoodSlider Urls={cuisineUrls.cuisineUrls}/>
    <h2 className="my-2">Top Brands in Bangalore</h2>
    <FoodSlider Urls={topBrandsUrls.topBrandsUrls}/>
    <p>Order food from your favourite restaurants in Bangalore</p>
    <RestaurantList/>
    </div>
  
  );
};

export default Home;
