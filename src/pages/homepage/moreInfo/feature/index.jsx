function Feature({ icon, title, text }) {
  return (
    <div className="feature-container">
      <span className="feature-container__icon">{icon}</span>
      <div className="feature-container__info">
        <span className="feature-container__info__title">{title}</span>
        <span className="feature-container__info__text">{text}</span>
      </div>
    </div>
  );
}

export default Feature;