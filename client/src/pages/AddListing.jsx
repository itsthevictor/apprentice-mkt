import { AddListingForm } from "../components";
import AddListingContextProvider from "../contexts/addListingContext";
import { mainFetch } from "../utils/customFetch";

// export const addListingAction = async (e) => {
//   const formData = await request.formData();
//   const data = Object.fromEntries(formData);
//   e.preventDefault();
//   var data = new FormData(e.currentTarget);
//   let formObject = Object.fromEntries(data);
//   console.log(formObject);
//   try {
//     const response = await mainFetch.post("/listings", data);
//     console.log(response);
//     return response;
//   } catch (error) {
//     return error;
//   }
//   console.log(data);
//   return null;
// };

const AddListing = () => {
  return <AddListingForm />;
};
export default AddListing;
