import { Form, Link, redirect } from "react-router-dom";
import Wrapper from "../assets/Wrappers/Login";
import { mainFetch } from "../utils/customFetch.js";
import { toast } from "react-toastify";

export async function registerAction({ request }) {
  console.log("login action started");
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  try {
    await mainFetch.post("/auth/register", data);
    toast.success("Signed up successfully");
    return redirect("/");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
}

const Register = () => {
  return (
    <Wrapper>
      {" "}
      <div className="container">
        <div className="form-container">
          <Form method="post">
            <h3 className="title">bla bla blu blu</h3>
            <div className="input-item">
              <label htmlFor="firstName">Prenume</label>
              <input
                type="text"
                id="firstName"
                placeholder="first name"
                name="firstName"
              />
            </div>
            <div className="input-item">
              <label htmlFor="lastName">Nume</label>
              <input
                type="text"
                id="lastName"
                placeholder="last name"
                name="lastName"
              />
            </div>
            <div className="input-item">
              <label htmlFor="email">email </label>
              <input type="email" id="email" placeholder="email" name="email" />
            </div>
            <div className="input-item">
              <label htmlFor="password">parola</label>
              <input
                type="password "
                id="password"
                placeholder="password"
                name="password"
              />
              <p></p>
            </div>
            <button type="submit" className="submit-btn">
              Continuă
            </button>
            <p>
              {" "}
              Ai deja cont? <Link to="/login"> Intră în cont</Link>
            </p>
          </Form>
        </div>
      </div>
    </Wrapper>
  );
};
export default Register;
