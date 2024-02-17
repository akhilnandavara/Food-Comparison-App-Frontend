import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getRestaurantReviews } from '../../../Service/operations/RestaurantApi';

export default function Reviews() {
  let { restaurantId } = useParams();
  restaurantId = restaurantId.split(":")[1];
  const [reviews, setReviews] = useState([]);


  useEffect(() => {
    (
      async()=>{

          const response = await getRestaurantReviews(restaurantId);
          setReviews(response);
          console.log(response)
      }
    )();
    
  }, [])
  return (
    <div className='mt-3'>
      <h2 >{reviews?.googleData?.name} Reviews</h2>
      {
        reviews?.googleData?.reviews.map((review,index)=>(
          <div key={index}>
            {/* profile  */}
            <div className='d-flex gap-2 '>
              <img src={review.profileImg} alt="Img" />
              <div>
                <h6>{review.name}</h6>
                <p>{review.intro}</p>
              </div>
              </div>
          
              <div>
                {/* star */}
                <div>
                  <p>{review.star}</p>
                  <p>{review?.postedTime}</p>
                </div>
                {/* description */}
                <p>{review.reviewDesc}</p>
              </div>
           
          </div>
        ))
      }
    </div>
  )
}
