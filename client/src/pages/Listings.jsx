import { AllListings } from "../components";
import { mainFetch } from "../utils/customFetch";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { useEffect, useHistory, useState } from "react";

export const listingsLoader = async ({ request }) => {
  const county = new URL(request.url).searchParams.get("county");
  const type = new URL(request.url).searchParams.get("type");
  console.log("county", county);
  console.log("type", type);
  let url;
  if (county !== null) {
    if (type !== null) {
      url = `/listings?type=${type}&county=${county}`;
    } else url = `/listings?county=${county}`;
  } else if (type !== null) {
    url = `/listings?type=${type}`;
  } else url = `/listings`;

  try {
    const response = await mainFetch(url);
    console.log(response);
    return response.data;
  } catch (error) {
    return error;
  }
};

const Listings = () => {
  const { listings } = useLoaderData();

  return (
    <div className="wrapper">
      {listings && <AllListings listings={listings} />}
    </div>
  );
};
export default Listings;
