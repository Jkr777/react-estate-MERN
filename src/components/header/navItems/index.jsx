import { NavLink } from "react-router-dom";

function NavItems() {
  return (
    <div>
      <NavLink className={navData => navData.isActive ? "link--active margin-right" : "link margin-right"} to="/properties/buy">Buy</NavLink>
      <NavLink className={navData => navData.isActive ? "link--active margin-right" : "link margin-right"} to="/properties/rent">Rent</NavLink>
      <NavLink className={navData => navData.isActive ? "link--active" : "link"} to="/contact">Contact</NavLink>
    </div>
  );
}

export default NavItems;