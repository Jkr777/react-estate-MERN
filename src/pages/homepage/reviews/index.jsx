import { useSelector } from "react-redux";
import Review from "./review";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Reviews() {
  const reviews = useSelector(state => state.reviews.list);

  return (
    <div className="reviews-container margin-bottom3">
      <div className="reviews-container__left">
        <button className="action-btn">CONTACT US</button>
      </div>
      <div className="reviews-container__right">
        <span className="reviews-container__right__title">WHAT OUR CUSTOMERS SAY</span>
        <Carousel 
          responsive={responsive} 
          autoPlay
          arrows={false}
          centerMode={false} 
          swipeable 
          customTransition="all .5" 
          transitionDuration={1000}
          autoPlaySpeed={5000}
          containerClass="carousel-container"
        >
          {reviews.map(r => <Review key={r.name} {...r} />)}
        </Carousel>
      </div>
    </div>
  );
}

export default Reviews;