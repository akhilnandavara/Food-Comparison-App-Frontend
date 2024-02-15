import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurantData } from "../Service/operations/RestaurantApi";
import { FaStar } from "react-icons/fa";

export default function RestrurantDataPage() {
  let { restrurantId } = useParams();
  const [loading, setLoading] = useState(false);
  const [restrurantData, setRestrurantData] = useState([]);

  restrurantId = restrurantId.split(":")[1];
  const fetchRestruranData = async () => {
    const res = await getRestaurantData(restrurantId);
    setRestrurantData(res);
  };

  useEffect(() => {
    fetchRestruranData();
  }, []);
  return (
    <div>
      <header>
        {/* Images */}
        <div className="header-img d-flex">
          {restrurantData?.images?.map((img) => (
            <img src={img} alt="" className="header-image" />
          ))}
        </div>
        {/* Info  */}
        <div className="p-2">
          <div className="d-flex justify-content-between ">
            <h1>{restrurantData?.name}</h1>
            {/* Ratings */}
            <div className="d-flex header-ratings">
              <div className="d-flex align-items-center justify-content-center gap-1 rating-star">
                <span>{restrurantData?.googleData?.ratings?.[0].rating} </span>
                <span>
                  <FaStar className="star-icon" />
                </span>
              </div>
              <div className="d-flex flex-column">
                <span className="fw-bold">{restrurantData?.googleData?.ratings?.[0].review}+</span>
                <span className="rating-text">Google Ratings</span>
              </div>
            </div>
          </div>
          {/* Cuisine */}
          <p className="">{restrurantData.cuisine.join(', ')}</p>
          {/* Cost */}
        </div>
      </header>

      <section>
        {/* side bar */}
        {/* Offers */}
        <div></div>
        {/* Menu items */}
        <div>
          <div>
            {/*item name */}
            <p></p>
            {/* item price */}
            <p></p>
            {/* item Description */}
            <p></p>
          </div>
          <div>
            <img src="" alt="" />
            <div>ADD</div>
          </div>
        </div>
      </section>
    </div>
  );
}
