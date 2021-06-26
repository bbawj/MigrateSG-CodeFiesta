import React from "react";
import { Formik, Field, Form, useField } from "formik";
import * as Yup from "yup";
import { Button, MenuItem } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Select } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { FormHelperText } from "@material-ui/core";
import "./Questionnaire.css";

const MySelectField = ({ label, helperText, items, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <div className="formFields">
      <InputLabel id={label}>{label}</InputLabel>
      <Select labelId={label} {...field} autoWidth>
        {items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText error={!!errorText}>
        {!!errorText ? errorText : helperText}
      </FormHelperText>
    </div>
  );
};

export default function Questionnaire() {
  const history = useHistory();

  return (
    <div className="questionnaire">
      <h1>Tell us about yourself.</h1>
      <Formik
        initialValues={{ type: "", duration: "" }}
        validationSchema={Yup.object({
          type: Yup.string().required("Required"),
          duration: Yup.string().required("Required"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          //   const res = await axios.post("/login", values, {
          //     withCredentials: true,
          //   });
          setSubmitting(false);
          //history.push(res.data.redirectUrl);
        }}
      >
        <Form>
          <MySelectField
            label="Type"
            items={[
              { value: "returning", label: "Returning" },
              { value: "expat", label: "Expat" },
            ]}
            name="type"
            type="select"
            as={Select}
          ></MySelectField>
          <MySelectField
            label="How long will you be staying?"
            items={[
              { value: "longTerm", label: "Long Term" },
              { value: "shortTerm", label: "Short Term" },
            ]}
            name="duration"
            type="select"
            as={Select}
          ></MySelectField>
        </Form>
      </Formik>
    </div>
  );
}
