import { useSelector } from "react-redux";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import ImageGallery from 'react-image-gallery';
import numeral from "numeral";
import RequestForm from "../../components/requestForm";

function Property() {
  const { _id, price, bedrooms, bathrooms, size, city, address, coordinates, description, img, features } = useSelector(state => state.property);

  return (
    <section className="propertyPage-container">
      <div className="propertyPage-container__intro">
        <address className="propertyPage-container__intro__address">{address}, {city}</address>
        <hr className="propertyPage-container__hLine" />
        <span className="propertyPage-container__intro__price margin-right_2_5">€ {price >= 1000000 ? numeral(price).format('0.00a') : numeral(price).format('0,0')}</span>
        <span className="margin-right_2_5">bedrooms {bedrooms}</span>
        <span className="margin-right_2_5">bathrooms {bathrooms}</span>
        <span>surface {size} m<sup>2</sup></span>
      </div>
      <div className="propertyPage-container__contact">
        <div className="propertyPage-container__contact__gallery--container">
          <ImageGallery
            items={img}
            lazyLoad={true}            
            infinite={true}
            showNav={false}
            autoPlay={false}
            showBullets={false}
            showFullscreenButton={false}
            showGalleryFullscreenButton={false}
            showPlayButton={false}
            showGalleryPlayButton={false}
            additionalClass="propertyPage-container__contact__gallery"
          />
        </div>
        <RequestForm propertyId={_id} />
      </div>
      <div className="propertyPage-container__description">
        <span className="propertyPage-container__description__title">Description</span>
        <hr className="propertyPage-container__hLine" />
        <p>{description}</p>
      </div>
      <div className="propertyPage-container__features">
        <span className="propertyPage-container__features__title">Features</span>
        <hr className="propertyPage-container__hLine" />
        {features.map(f => <span className="propertyPage-container__features__feature" key={f}>{f}</span>)}
      </div>
      <MapContainer center={coordinates} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates}>
          <Popup>
            address: {address}
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}

export default Property; 