import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { mainFetch } from "../utils/customFetch";

export const initialLoader = async () => {
  let authData = {};
  try {
    const response = await mainFetch("/users/current-user");
    authData = { ...authData, response };
    return response.data;
  } catch (error) {
    return authData;
  }
};

const Main = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <>
      {<Navbar authData={data} />}
      {/* {if user then 'loggedNav' else <Navbar/>} */}
      <main>
        <Outlet context={{ data }} />
        {/* <Outlet /> */}
      </main>
      <Footer />
    </>
  );
};
export default Main;
