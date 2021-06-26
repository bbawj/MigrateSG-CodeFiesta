import React from "react";
import { Formik, Field, Form, useField } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import "./Signup.css";
import Header from "./Header";

const MyTextField = ({ label, type, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <div className="loginformFields">
      <TextField
        label={label}
        fullWidth
        type={type}
        {...field}
        helperText={errorText}
        error={!!errorText}
      />
    </div>
  );
};
function Login() {
  const history = useHistory();

  return (
    <div className="loginContainer">
      <Header />
      <div className="login">
        <div className="card1">
          <div className="qr"></div>
          <Button
            color="primary"
            variant="contained"
            style={{ width: "50%", color: "white" }}
          >
            Sign in with Singpass
          </Button>
        </div>
        <div className="card2">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
              password: Yup.string().required("Required"),
            })}
            onSubmit={async (values, { setSubmitting }) => {
              setSubmitting(true);
              //   const res = await axios.post("/login", values, {
              //     withCredentials: true,
              //   });
              setSubmitting(false);
              return history.push("/dashboard");
              //history.push(res.data.redirectUrl);
            }}
          >
            <Form>
              <h1>Login</h1>
              <Field name="email" type="email" label="Email" as={MyTextField} />
              <Field
                name="password"
                type="password"
                label="Password"
                as={MyTextField}
              />
              <Button
                variant="contained"
                type="submit"
                style={{
                  color: "white",
                  width: "100%",
                  marginTop: "auto",
                }}
                color="primary"
              >
                Sign in
              </Button>
            </Form>
          </Formik>
          <p>
            Don't have an account? <Link to="/signup">Signup.</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
