function SearchForm({ cities }) {
  return (
    <form className="searchForm-container">
      <div className="searchForm-container__nav">
        <select className="searchForm-container__nav__input" defaultValue="City" name="city">
          <option value="City" disabled>City</option>
          {cities.map(i => <option value={i.city} key={i.city}>{i.city}</option>) }
        </select>

        <select className="searchForm-container__nav__input" defaultValue="Sale Type" name="saleType"> 
          <option value="Sale Type" disabled>Sale Type</option>
          <option value="buy">Buy</option>
          <option value="rent">Rent</option>
        </select>

        <select className="searchForm-container__nav__input" defaultValue="Order By" name="orderBy">
          <option value="Order By" disabled>Order By</option>
          <option value="price">Price</option>
          <option value="bedrooms">Bedrooms</option>
          <option value="bathrooms">Bathrooms</option>
          <option value="size">Size</option>
        </select>        
        
        <select className="searchForm-container__nav__input" defaultValue="Sort By" name="sortBy">
          <option value="Sort By" disabled>Sort By</option>
          <option value="1">ascending</option>
          <option value="-1">descending</option>
        </select>
      </div>
      <button className="action-btn">Submit</button>
    </form>
  );
}

export default SearchForm;