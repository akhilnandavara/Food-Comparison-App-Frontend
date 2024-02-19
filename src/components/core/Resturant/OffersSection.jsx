import React, { useState } from 'react';

const OffersSection = ({ zomatoOffers, swiggyOffers, magicPinOffers }) => {
  const [activeCard, setActiveCard] = useState('');
  return (
    <>
    <div className='offers-card'>
      <button onClick={()=>setActiveCard('swiggy')}>Swiggy Offers</button>
      <button onClick={()=>setActiveCard('zomato')}>Zomato  Offers</button>
      <button onClick={()=>setActiveCard('magicPin')}>MagicPin Offers</button>
    </div>

    <div className={` ${activeCard === "swiggy"?"show":"collapse"} collapse offers-section`}>
      <h2>Special Offers</h2>
      <div className="offers-list">
        <h3>Swiggy Offers</h3>
        <div className="offers-list">
          {swiggyOffers?.map((offer, index) => (
            <div className="offer-item" key={`zomato-${index}`}>
              <h4>{offer.title}</h4>
              <p>{offer.description}</p>
              <p>Code: {offer.code}</p>
              <p>Discount: {offer.discount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className={` ${activeCard === "zomato"?"show":"collapse"} collapse offers-section`}>
      <h2>Special Offers</h2>
      <div className="offers-list">
        <h3>Zomato Offers</h3>
        <div className="offers-list">
          {zomatoOffers?.map((offer, index) => (
            <div className="offer-item" key={`zomato-${index}`}>
              <h4>{offer.title}</h4>
              <p>{offer.description}</p>
              <p>Code: {offer.code}</p>
              <p>Discount: {offer.discount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className={` ${activeCard === "magicPin"?"show":"collapse"} collapse offers-section`}>
      <h2>Special Offers</h2>
      <div className="offers-list">
        <h3>MagicPin Offers</h3>
        <div className="offers-list">
          {magicPinOffers?.map((offer, index) => (
            <div className="offer-item" key={`magicPin-${index}`}>
              <p>Discount: {offer} on Overall Bill amount</p>
            </div>
          ))}
        </div>
      </div>
    </div>
          </>
  );
};

export default OffersSection;
