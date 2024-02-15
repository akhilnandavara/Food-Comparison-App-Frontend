import React, { useEffect, useState } from "react";
import FoodSlider from "../components/core/FoodSlider";
import cuisineUrls from "../data/cuisineUrls";
import topBrandsUrls from "../data/topBrandsUrls";
import RestaurantList from "../components/core/RestaurantList";
import { getRestaurantList } from "../Service/operations/RestaurantApi";

const Home = () => {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const fetchRestaurantList=async () => {
    const res = await getRestaurantList();
     setLists(res);
    }
    useEffect(() => {
    setLoading(true)
    if(!lists.length){
      fetchRestaurantList()
    }
    setLoading(false);
  }, []);

  return (
    <>
    {loading && <div>Loading</div>}
      <div className="px-2">
        <h2 className="my-2">Explore the Deliciousness</h2>
        <FoodSlider Urls={cuisineUrls.cuisineUrls} />
        <h2 className="my-2">Top Brands in Bangalore</h2>
        <FoodSlider Urls={topBrandsUrls.topBrandsUrls} />
        <p>Order food from your favourite restaurants in Bangalore</p>
        {!loading && <RestaurantList lists={lists} />}
      </div>
    </>
  );
};

export default Home;
