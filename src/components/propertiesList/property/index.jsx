import { GoKey } from "react-icons/go";
import numeral from "numeral";
import { BsFillPersonFill } from "react-icons/bs";
import { BiBath, BiMapPin } from "react-icons/bi";

function Property({ city, price, bedrooms, size, bathrooms, img }) {
  return (
    <div className="property-container">
      <div className="property-container__top">
        <img className="property-container__top__img" src={img} />
        <span className="property-container__top__city">{city}</span>
      </div>
      <div className="property-container__bottom">
        <span className="property-container__bottom__info"><BiBath /> <span className="margin-left1_5">{bathrooms}bathrooms</span></span>
        <span className="property-container__bottom__info"><BsFillPersonFill /> <span className="margin-left1_5">{bedrooms} bedrooms</span></span>
        <span className="property-container__bottom__info"><BiMapPin /> <span className="margin-left1_5">{size} m<sup>2</sup></span></span>
        <span className="property-container__bottom__info"><GoKey /> <span className="margin-left1_5">€ {price >= 1000000 ? numeral(price).format('0.00a') : numeral(price).format('0,0')}</span></span>
      </div>
      <button className="properties-btn">READ MORE</button>
    </div>
  );
}

export default Property;