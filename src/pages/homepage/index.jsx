import Intro from "./intro";
import MoreInfo from "./moreInfo";
import Reviews from "./reviews";
import PropertiesSection from "./propertiesSection";
import Gallery from "./gallery";

function Homepage() {
  return (
    <section>
      <Intro />
      <MoreInfo />
      <Reviews />
      <PropertiesSection />
      <Gallery />
    </section>
  );
}

export default Homepage;