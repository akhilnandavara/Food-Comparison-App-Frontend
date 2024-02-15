import React from 'react'
import { Link } from 'react-router-dom';
import { topBrandsUrls } from '../../data/topBrandsUrls';


export default function RestaurantList({lists}) {
  
  return (
    <div>
      <div className="row">
        {lists?.map((list) => {
           const restrurantUrl=topBrandsUrls?.find((brand) => brand.name.toLowerCase() === list.name.toLowerCase())?.url 
           console.log("restrurantUrl",restrurantUrl)
          return (
            <div className="col-6">
              <div className="card mb-2">
                <Link to={restrurantUrl}>
                <img src={list.images} className="card-img-top" alt="..." /></Link>
                <div className="card-body">
                  <h5 className="card-title">{list.name}</h5>
                  <p className="card-text">{list.cuisine}</p>
                  <p className="card-text">{list.googleData[0].ratings[0].rating} ratings</p>
                  <p className="card-text">{list.googleData[0].ratings[0].review} reviews</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  )
}
