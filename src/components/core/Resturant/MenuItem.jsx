import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurantMenu } from "../../../Service/operations/RestaurantApi";
import { useDispatch} from "react-redux";
import { addToCart } from "../../../slices/cartSlice";

export default function MenuItem() {
  let { restaurantId } = useParams();
  restaurantId = restaurantId.split(":")[1];
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();



  useEffect(() => {
    const fetchRestaurantMenu=async () => {
      setLoading(true);
      const response = await getRestaurantMenu(restaurantId);
      setMenu(response);
      setLoading(false);
    }
    if(!menu.length){

      fetchRestaurantMenu()
    }
  }, []);

  

  const handleAddToCart = (restaurantId,data) => {
    dispatch(addToCart({restaurantId,name:menu.name ,item:data}))
  }
  
 
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="accordion" id="accordionPanelsStayOpenExample">
          {menu?.menu?.map((section, sectionIndex) => (
            <div key={sectionIndex} className="accordion-item">
              {/* Section Heading */}
              <h2 className="accordion-header" id={`heading${sectionIndex}`}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${sectionIndex}`}
                  aria-expanded="true"
                  aria-controls={`collapse${sectionIndex}`}
                  aria-haspopup="true"
                  data-bs-parent="#accordionPanelsStayOpenExample"
                >
                  {section.sectionHeading}
                </button>
              </h2>
              {/* Menu Items */}
              <div
                id={`collapse${sectionIndex}`}
                className="accordion-collapse collapse show"
                aria-labelledby={`heading${sectionIndex}`}
              >
                <div className="accordion-body">
                  {section.menuItems?.map((menuItem, menuItemIndex) => (
                    <div
                      key={menuItemIndex}
                      className="d-flex justify-content-between"
                    >
                      {/* Info div */}
                      <div>
                        <h4>{menuItem.name}</h4>
                        <p>{menuItem.swiggyPrice}</p>
                        <p>{menuItem.description}</p>
                      </div>
                      {/* Image */}
                        {menuItem.image && (
                          <div className="menuItem-right">
                            <img src={menuItem.image} alt={menuItem.name} className="menuItem-img" />
                            <button onClick={()=>handleAddToCart(restaurantId,{ItemName:menuItem.name,price:menuItem.swiggyPrice,_id:menuItem._id})}>Add to cart</button>
                          </div>

                        )}
                      
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
