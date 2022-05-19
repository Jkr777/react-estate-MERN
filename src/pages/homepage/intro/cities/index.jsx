import City from "./city";

function Cities({ citiesList }) {
  return (
    <div className="cities-container">
      <span className="cities-container__title">our cities</span>
      {citiesList.map(c => <City key={c.city} {...c} />)}
    </div>
  );
}

export default Cities;