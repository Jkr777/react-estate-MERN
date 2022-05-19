function City({ city, img, properties }) {
  return (
    <div className="city-container">
      <img className="city-container__img" src={img} />
      <div className="city-container__more-info">
        <span className="city-container__more-info__text">{city}</span>
        <span className="city-container__more-info__text">{properties} properties</span>
      </div>
    </div>
  );
}

export default City;