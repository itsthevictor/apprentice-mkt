import Wrapper from "../assets/Wrappers/SingleListing";
import { FaLocationDot, FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SingleListing = ({ listing }) => {
  const {
    type,
    info,
    createdBy,
    authorFirstName,
    authorLastName,
    county,
    city,
    gallery,
    _id,
  } = listing;

  return (
    <Wrapper>
      <div className="listing-container">
        <div
          className="thumbnail"
          style={{ backgroundImage: `url(${gallery[0]})` }}
        >
          {/* <img src={thumbnail} alt="" className="list-card-thumb"/> */}
        </div>
        <div className="details">
          <div className="info">
            <div className="title">{info}</div>
            <div className="type">{type}</div>
          </div>

          <div className="location">
            {" "}
            <FaLocationDot className="location-pin" />
            {city}
          </div>
          <div className="created-by">
            {/* <p>Organizat de:&nbsp;</p> */}
            <span>
              {authorFirstName} {authorLastName}
            </span>{" "}
            <Link to={`/listing/${_id}`}>
              <button className="btn">
                <p>detalii</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default SingleListing;
