import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getCuisineData } from '../Service/operations/CuisineApi';
import RestaurantList from '../components/core/RestaurantList';

export default function CuisineData() {
    const {cuisineName} = useParams();
    const [cuisineData, setCuisineData] = useState([])
    const [loading, setLoading] = useState(false)

    

    useEffect(() => {
        ( (async () => {
            const getCuisineBasedRestaurants = await getCuisineData(cuisineName);
            setCuisineData(getCuisineBasedRestaurants);
        })
        )();
    }, []);

  return (
    <div>
      { loading && <div>Loading</div>}
        <RestaurantList lists={cuisineData} />
    </div>
  )
}
