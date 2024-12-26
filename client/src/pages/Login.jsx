import { Form, Link, redirect } from "react-router-dom";
import Wrapper from "../assets/Wrappers/Login";
import { mainFetch } from "../utils/customFetch.js";
import { toast } from "react-toastify";

export async function loginAction({ request }) {
  console.log("login action started");
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await mainFetch.post("/auth/login", data);
    toast.success("Signed in", { position: "top-center" });
    return redirect("/");
  } catch (error) {
    toast.error(error?.response?.data?.msg, { position: "top-center" });
    return error;
  }
}

const Login = () => {
  return (
    <Wrapper>
      {" "}
      <div className="container">
        <div className="form-container">
          <Form method="post">
            <h3 className="title">bla bla blu blu</h3>
            <div className="input-item">
              <label htmlFor="email">email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="input-item">
              <label htmlFor="password">Parola</label>
              <input
                type="password "
                id="password"
                // placeholder="parola"
                name="password"
              />
              <p>
                <Link to="reset-password">Ai uitat parola?</Link>
              </p>
            </div>
            <button type="submit" className="submit-btn">
              Continuă
            </button>
            <p>
              {" "}
              Nu ai cont? <Link to="/register">Înregistrează-te</Link>
            </p>
          </Form>
        </div>
      </div>
    </Wrapper>
  );
};
export default Login;
