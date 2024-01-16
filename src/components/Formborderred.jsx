import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { Formik, Form, Field } from "formik";
const validationSchema = Yup.object().shape({
  username: Yup.string()
    .email("Please enter a valid email")
    .required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const Border = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values, props) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // const handleBlur = (event) => {
  //   formik.handleBlur(event);
  //   if (
  //     formik.touched[event.target.name] &&
  //     !formik.errors[event.target.name]
  //   ) {
  //     event.target.classList.remove("error");
  //   } else {
  //     event.target.classList.add("error");
  //   }
  // };

  return (
    <Formik>
      {(props) => (
        <Form onSubmit={formik.handleSubmit}>
          <Field
            as={TextField}
            id="username"
            name="username"
            label="Username"
            variant="outlined"
            fullWidth
            value={formik.values.username}
            onChange={formik.handleChange}
            // onBlur={handleBlur}
            error={
              formik.touched.username && formik.errors.username ? true : false
            }
            helperText={formik.touched.username && formik.errors.username}
            className={
              formik.touched.username && !formik.values.username ? "error" : ""
            }
          />

          <Field
            as={TextField}
            id="password"
            name="password"
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            // onBlur={handleBlur}
            error={
              formik.touched.password && formik.errors.password ? true : false
            }
            helperText={formik.touched.password && formik.errors.password}
            className={
              formik.touched.password && !formik.values.password ? "error" : ""
            }
          />

          <Box mt={2}>
            <Button
              type="submit"
              variant="contained"
              color={!formik.isValid ? "secondary" : "primary"}
              disabled={!formik.isValid}
            >
              Submit
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default Border;
