import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Properties from "../../../components/properties";

function PropertiesSection() {
  const properties = useSelector(state => state.properties.list);

  return (
    <div className="propertiesSection-container">
      <span className="propertiesSection-container__title margin-bottom3">Latest Properties</span>
      <Properties list={properties} />
      <Link className="more-link" to="/properties">see more</Link>
    </div>
  );
}

export default PropertiesSection;