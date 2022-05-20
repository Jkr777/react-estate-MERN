import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PropertiesList from "../../components/propertiesList";
import SearchForm from "./searchForm";

function Properties() {
  const list = useSelector(state => state.properties.list);
  const cities = useSelector(state => state.cities.list);

  return (
    <section className="properties-container">
      <h1 className="properties-container__title">search filters</h1>
      <SearchForm cities={cities} />
      <PropertiesList list={list} />
      <Link className="more-link" to="/properties">see more</Link>
    </section>
  );
}

export default Properties;