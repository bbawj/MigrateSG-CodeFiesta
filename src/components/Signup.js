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
function Signup() {
  const history = useHistory();

  return (
    <div className="loginContainer">
      <Header />
      <div className="login">
        <div className="card1">
          <h1>NTU Carpool</h1>
          <h2>Never be late again.</h2>
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
              history.push("/questionnaire");
              //history.push(res.data.redirectUrl);
            }}
          >
            <Form>
              <h1>Signup</h1>
              <Field name="email" type="email" label="Email" as={MyTextField} />
              <Field
                name="password"
                type="password"
                label="Password"
                as={MyTextField}
              />
              <Button
                type="submit"
                variant="contained"
                style={{ color: "white" }}
                color="primary"
              >
                Create
              </Button>
            </Form>
          </Formik>
          <p>
            Have an account? <Link to="/login">Login.</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
