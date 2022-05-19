import { useSelector } from "react-redux";
import About from "./about";
import Cities from "./cities";

function Intro() {
  const cities = useSelector(state => state.cities.list);

  return (
    <div className="intro-container margin-bottom3">
      <About />
      <Cities citiesList={cities} />
    </div>
  );
}

export default Intro;