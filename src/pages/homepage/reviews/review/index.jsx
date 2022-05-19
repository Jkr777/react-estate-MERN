function Review({ review, name, city }) {
  return (
    <div className="review-container">
      <p className="review-container__text"><q>{review}</q></p>
      <cite className="review-container__personal">{name}, {city}</cite>
    </div>
  );
}

export default Review;