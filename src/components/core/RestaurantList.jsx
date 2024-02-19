import React from 'react'
import { Link } from 'react-router-dom';

export default function RestaurantList({lists}) {
  
  return (
    <div>
      <div className="row">
        {lists?.map((list) => {
         
          return (
            <div className="col-6">
              <div className="card mb-2">
                <Link to={`/restrurant/:${list._id}`}>
                <img src={list.images} className="card-img-top" alt="..." /></Link>
                <div className="card-body">
                  <h5 className="card-title">{list.name}</h5>
                  <p className="card-text">{list.cuisine.join(",")}</p>
                  <p className="card-text">{list.googleData.ratings?.[0]?.rating} ratings</p>
                  <p className="card-text">{list.googleData.ratings?.[0]?.reviews} reviews</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  )
}
