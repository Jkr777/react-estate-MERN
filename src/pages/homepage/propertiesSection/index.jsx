import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PropertiesList from "../../../components/propertiesList";

function PropertiesSection() {
  const list = useSelector(state => state.properties.list);

  return (
    <div className="propertiesSection-container">
      <span className="propertiesSection-container__title margin-bottom3">Latest Properties</span>
      <PropertiesList list={list} />
      <Link className="more-link" to="/properties">see more</Link>
    </div>
  );
}

export default PropertiesSection;