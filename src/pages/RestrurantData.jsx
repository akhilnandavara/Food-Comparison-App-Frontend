import React, { useEffect, useState } from "react";
import { Link, Outlet, matchPath, useLocation, useParams } from "react-router-dom";
import { getRestaurantData } from "../Service/operations/RestaurantApi";
import { FaStar } from "react-icons/fa";

const filterButtons = [
  {
    id: 1,
    name: "Overview",
    url: "",
  },
  {
    id: 2,
    name: "Order Online",
    url: "order-online",
  },
  {
    id: 3,
    name: "Offers",
    url: "offers",
  },
  {
    id: 4,
    name: "Reviews",
    url: "reviews",
  },
];

export default function RestrurantDataPage() {
  let { restaurantId } = useParams();
  const [loading, setLoading] = useState(false);
  const [restaurantData, setRestaurantData] = useState([]);
  const location = useLocation();
  restaurantId = restaurantId.split(":")[1];
  const fetchRestruranData = async () => {
    setLoading(true);
    const res = await getRestaurantData(restaurantId);
    setRestaurantData(res);
    setLoading(false);
    console.log("restaurantData",restaurantData)
  };

  const matchRoute=(path)=>{
    if(path===""){
     path=undefined;
      return matchPath({path:"/"+path},"/"+ location.pathname.split("/")[3]);
    }
    return matchPath({path:"/"+path},"/"+location.pathname.split("/")[3]);
  }
  useEffect(() => {
    fetchRestruranData();
  }, []);


  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          <header>
            {/* Images */}
            <div className="header-img d-flex">
              {restaurantData?.images?.map((img) => (
                <img src={img} alt="" className="header-image" />
              ))}
            </div>
            {/* Info */}
            <div className="p-2">
              <div className="d-flex justify-content-between ">
                <h1>{restaurantData?.name}</h1>
                {/* Ratings */}
                <div className="d-flex header-ratings">
                  <div className="d-flex align-items-center justify-content-center gap-1 rating-star">
                    <span>
                      {restaurantData?.googleData?.ratings?.[0]?.rating}{" "}
                    </span>
                    <span>
                      <FaStar className="star-icon" />
                    </span>
                  </div>
                  <div className="d-flex flex-column">
                    <span className="fw-bold">
                      {restaurantData?.googleData?.ratings?.[0]?.review}+
                    </span>
                    <span className="rating-text">Google Ratings</span>
                  </div>
                </div>
              </div>
              {/* Cuisine */}
              <p>{restaurantData?.cuisine?.join(",")}</p>
              {/* Direction button */}
              <button className="d-flex align-items-center gap-1 p-1 rounded ">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-sign-turn-right"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5 8.5A2.5 2.5 0 0 1 7.5 6H9V4.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L9.41 8.658A.25.25 0 0 1 9 8.466V7H7.5A1.5 1.5 0 0 0 6 8.5V11H5z" />
                    <path
                      fill-rule="evenodd"
                      d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134Z"
                    />
                  </svg>
                </span>
                {/* //TODO: updating direction */}
                <span> Direction</span>
              </button>
            </div>
          </header>
          <section>
          {/* Dynamic sections order menu/reviews/ offers  buttons*/}
              <div className="d-flex gap-4 restaurantData-btn  ">
                {filterButtons?.map((button) => (
                  <div key={button.id}  className={` ${ matchRoute(button.url) ? "active-btn":""}   btn `}>
                    <Link to={button.url} >{button.name}</Link>
                    <div className= {`${ matchRoute(button.url) ? "active-btn-bar":""}`}/>
                  </div>
                ))}
              </div>
          {/* Dynamic sections order menu/reviews/ offers */}
          <div className="w-100 h-75">
            <Outlet />
          </div>
          </section>
        </div>
      )}
    </>
  );
}
