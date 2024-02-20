import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurantOverview } from "../../../Service/operations/RestaurantApi";
import OffersSection from "./OffersSection";

export default function OverView() {
  let { restaurantId } = useParams();
  restaurantId = restaurantId.split(":")[1];
  const [restaurantOverview, setRestaurantOverview] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getRestaurantOverview(restaurantId);
        setRestaurantOverview(response);
      } catch (error) {
        console.error("Error fetching restaurant overview:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [restaurantId]);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="overView-content">
          <h2>About This place</h2>
          <div className="d-flex gap-2 align-items-center">
            <h3>Known For</h3>
            <span>{restaurantOverview.googleData.cuisine}</span>
          </div>
          {/* Offers section */}
          <div>
            <OffersSection
              zomatoOffers={restaurantOverview?.zomatoOffers}
              swiggyOffers={restaurantOverview?.swiggyOffers}
              magicPinOffers={restaurantOverview?.magicPinOffers}
            />
          </div>
          {/* Timings */}
          <div>
            <h3>Timings</h3>
            <p>
              {restaurantOverview.googleData.formattedOpeningHours.map(
                (day, index) => (
                  <div key={index}>{day}</div>
                )
              )}
            </p>
          </div>
          {/* Facilities */}
          <div>
            <h3>Facilities</h3>
            <p className="d-flex gap-2">
              {restaurantOverview.googleData.restoOptions.map(
                (facility, index) => (
                  <div key={index}>{facility}</div>
                )
              )}
            </p>
          </div>
          {/* Map Div */}
          <div
            className="restoLocation-card"
          >
            <div>{restaurantOverview.googleData?.url}</div>
            <div>{restaurantOverview.googleData?.phone}</div>
            <div>{restaurantOverview.googleData?.address}</div>
          </div>
        </div>
      )}
    </>
  );
}
