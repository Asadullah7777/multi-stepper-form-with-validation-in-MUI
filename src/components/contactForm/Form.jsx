import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

const Form1 = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    phoneno: "",
    message: "",
  };
  const validationSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(3, "Enter first name full")
      .required("Required"),
    lastname: Yup.string().min(3, "Enter last name full").required("Required"),
    email: Yup.string().email("please enter valid email").required("Required"),
    phoneno: Yup.number().typeError("Enter vaild number").required("Required"),
    message: Yup.string()
      .min(100, "Please enter minimum 100 letters")
      .required("Reuired"),
  });

  const onSubmit = (values, props) => {
    console.log("Vlaue", values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };
  return (
    <div>
      <Typography gutterBottom variant="h3" align="center">
        React-App
      </Typography>
      <Card sx={{ maxWidth: "450px", margin: "0 auto", padding: "20px 5px" }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Contact US
          </Typography>
          <Typography
            variant="body2"
            component="p"
            color="textSecondary"
            gutterBottom
          >
            Fill up the form and our team will get back to you within 24 hours.
          </Typography>
          <Formik
            onSubmit={onSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {(props) => (
              <Form>
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      name="firstname"
                      label="First Name"
                      placeholder="Enter first name"
                      variant="outlined"
                      fullWidth
                      helperText={<ErrorMessage name="firstname" />}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      name="lastname"
                      label="Last Name"
                      placeholder="Enter last name"
                      variant="outlined"
                      fullWidth
                      helperText={<ErrorMessage name="lastname" />}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="email"
                      type="email"
                      label="Email"
                      placeholder="Enter email"
                      variant="outlined"
                      fullWidth
                      helperText={<ErrorMessage name="email" />}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="phoneno"
                      //   type="number"
                      label="Phone no"
                      placeholder="Enter phone number"
                      variant="outlined"
                      fullWidth
                      helperText={<ErrorMessage name="phoneno" />}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="message"
                      label="Message"
                      placeholder="Type your message here"
                      multiline
                      rows={4}
                      variant="outlined"
                      fullWidth
                      helperText={<ErrorMessage name="message" />}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      disabled={props.isSubmitting}
                    >
                      {props.isSubmitting ? "Loading" : " Submit"}
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
};

export default Form1;
