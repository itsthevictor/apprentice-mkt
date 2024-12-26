import { redirect } from "react-router-dom";
import diacritics from "js-romanian-diacritics";

export const searchAction = async ({ request }) => {
  console.log("starting search action");
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  let { county, type } = data;
  type = diacritics.without(type);
  if (county !== "") {
    if (type !== "") {
      return redirect(`/list?type=${type}&county=${county}`);
    } else return redirect(`/list?county=${county}`);
  }
  if (type !== "") {
    return redirect(`/list?type=${type}`);
  } else return redirect(`/list`);
};
