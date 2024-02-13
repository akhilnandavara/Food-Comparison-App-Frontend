import React, { useEffect } from 'react'
import { getRestaurantList } from '../../Service/operations/RestaurantApi';


export default function RestaurantList() {
  useEffect(() => {
    (async () => {
     await getRestaurantList();
    //  console.log(lists)

    })();
  }, [])
  return (
    <div>
      
    </div>
  )
}
