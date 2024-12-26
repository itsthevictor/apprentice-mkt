import SingleListing from "./SingleListing";
import Wrapper from "../assets/Wrappers/AllListings";
import { FilterBar } from "../components";
const AllListings = ({ listings }) => {
  return (
    <Wrapper>
      {" "}
      <div className="container">
        <FilterBar />
        <div className="listings-container">
          {listings.map((item, _id) => (
            <SingleListing key={_id} listing={item} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
export default AllListings;
