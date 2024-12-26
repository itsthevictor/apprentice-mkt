import { useLoaderData } from "react-router-dom";
import { SingleListing } from "../components";
import { mainFetch } from "../utils/customFetch";
import Wrapper from "../assets/Wrappers/ListingPage";

export const singleListingLoader = async ({ params }) => {
  console.log(params);
  try {
    const response = await mainFetch(`/listings/${params.id}`);
    console.log(response);
    return response.data;
  } catch (error) {
    return error;
  }
};

const ListingPage = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <Wrapper>
      {" "}
      <div className="container">
        {<SingleListing listing={data.listing} />}
      </div>
    </Wrapper>
  );
};
export default ListingPage;
