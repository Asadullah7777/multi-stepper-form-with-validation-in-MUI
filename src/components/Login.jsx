import {
  Avatar,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = ({ handleChange }) => {
  const initialValues = {
    username: "",
    password: "",
    remember: false,
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email("please enter valid email")
      .required("Required"),
    password: Yup.string()
      .min(8, "please enter 8 character")
      .required("Required"),
  });

  const onSubmit = (values, props) => {
    console.log("Values", values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };

  return (
    <Grid>
      <Paper
        elevation={20}
        sx={{
          paddingTop: "50px",
          paddingRight: "20px",
          paddingBottom: "205px",
          paddingLeft: "20px",
          width: "300px",
          margin: "0px auto",
        }}
      >
        <Grid align="center">
          <Avatar sx={{ bgcolor: "#1bbd7e" }}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                id="standard-basic"
                name="username"
                label="Username"
                placeholder="Enter username"
                fullWidth
                variant="standard"
                helperText={<ErrorMessage name="username" />}
              />

              <Field
                as={TextField}
                name="password"
                id="standard-basic"
                label="Password"
                placeholder="Enter password"
                type="password"
                fullWidth
                variant="standard"
                helperText={<ErrorMessage name="password" />}
              />
              <Field
                as={FormControlLabel}
                name="remember"
                control={<Checkbox color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                sx={{ margin: "8px 0" }}
                color="primary"
                variant="contained"
                fullWidth
                disabled={props.isSubmitting}
              >
                {props.isSubmitting ? "Loading" : "Sign in"}
              </Button>
            </Form>
          )}
        </Formik>
        <Typography>
          <Link href="#">Forget Password ?</Link>
        </Typography>
        <Typography>
          Do you have an account ?
          <Link href="#" onClick={() => handleChange("event", 1)}>
            Sign up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
