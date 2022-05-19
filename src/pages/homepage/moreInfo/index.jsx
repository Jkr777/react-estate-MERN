import Feature from "./feature";
import { AiOutlineCompass, AiOutlineHome, AiOutlineMail, AiOutlineLike } from 'react-icons/ai';

function MoreInfo() {
  return (
    <div className="moreInfo-container margin-bottom3">
      <h2 className="moreInfo-container__title">BUYING, SELLING, RENTING OR LETTING?</h2>
      <div className="moreInfo-container__features">
        <Feature
          icon={<AiOutlineCompass />}
          title="Landlord Information"
          text="Thinking of becoming a landlord? Our guide will help you navigate your way to renting your home."
        />
        <Feature
          icon={<AiOutlineHome />}
          title="Free Valuations"
          text="If you are considering selling or letting your property, please contact us for an accurate and realistic free valuation of your property."
        />      
        <Feature
          icon={<AiOutlineMail />}
          title="Contact Us"
          text="We are here to help so if you have a question please contact us."
        />      
        <Feature
          icon={<AiOutlineLike />}
          title="Dream Home"
          text="Look for properties in specific areas and find your dream home."
        />
      </div>
    </div>
  );
}

export default MoreInfo;