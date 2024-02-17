import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getRestaurantOverview } from '../../../Service/operations/RestaurantApi';

export default function OverView() {
  let { restaurantId } = useParams();
  restaurantId = restaurantId.split(":")[1];


  useEffect(() => {
    (
      async()=>{

          const response = await getRestaurantOverview(restaurantId);
          // console.log(response)
      }
    )();
    
  }, [])
  return (
    <div>
      This is overview page
    </div>
  )
}
