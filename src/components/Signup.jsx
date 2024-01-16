// import {
//   Avatar,
//   Grid,
//   Paper,
//   Typography,
//   TextField,
//   Checkbox,
//   Button,
//   FormControl,
//   FormControlLabel,
//   FormLabel,
//   Radio,
//   RadioGroup,
//   FormHelperText,
// } from "@mui/material";
// import React from "react";
// import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const Signup = () => {
//   const initialValues = {
//     name: "",
//     email: "",
//     gender: "",
//     phoneNumber: "",
//     password: "",
//     confirmPassword: "",
//     termsAndConditions: false,
//   };

//   const validationSchema = Yup.object().shape({
//     name: Yup.string().min(3, "It's too short").required("Required"),
//     email: Yup.string().email("Enetr valid email").required("Required"),
//     gender: Yup.string()
//       .oneOf(["male", "female"], "Required")
//       .required("Required"),
//     phoneNumber: Yup.number()
//       .typeError("Enetr vaild Phone Number")
//       .required("Required"),
//     password: Yup.string()
//       .min(8, "Password minimum length should be 8")
//       .required("Required"),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref("password")], "Password not matched")
//       .required("Required"),
//     termsAndConditions: Yup.boolean()
//       .oneOf([true], "Accept terms & conditions")
//       .required("Required"),
//   });

//   const onSubmit = (values, { resetForm, setSubmitting }) => {
//     console.log("Values", values);
//     setTimeout(() => {
//       resetForm();
//       setSubmitting(false);
//     }, 2000);
//   };

//   return (
//     <Grid>
//       <Paper
//         elevation={20}
//         sx={{ padding: "30px 20px", width: "300px", margin: "0px auto" }}
//       >
//         <Grid align="center">
//           <Avatar sx={{ bgcolor: "#1bbd7e" }}>
//             <AddCircleOutlineOutlinedIcon />
//           </Avatar>
//           <h2>Sign Up</h2>
//           <Typography variant="caption" gutterBottom>
//             Please fill this form to create an account ?
//           </Typography>
//         </Grid>
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={onSubmit}
//         >
//           {(props) => (
//             <Form>
//               <Field
//                 as={TextField}
//                 id="name"
//                 name="name"
//                 label="Name"
//                 placeholder="Enter your name"
//                 helperText={<ErrorMessage name="name" />}
//                 fullWidth
//                 variant="standard"
//               />
//               <Field
//                 as={TextField}
//                 id="email"
//                 name="email"
//                 label="Email"
//                 placeholder="Enter your email"
//                 helperText={<ErrorMessage name="email" />}
//                 fullWidth
//                 variant="standard"
//               />
//               <FormControl>
//                 <FormLabel
//                   name="gender"
//                   id="demo-row-radio-buttons-group-label"
//                   sx={{ marginTop: "10px" }}
//                 >
//                   Gender
//                 </FormLabel>
//                 <Field
//                   as={RadioGroup}
//                   row
//                   aria-labelledby="gender"
//                   name="gender"
//                 >
//                   <FormControlLabel
//                     value="female"
//                     control={<Radio />}
//                     label="Female"
//                   />
//                   <FormControlLabel
//                     value="male"
//                     control={<Radio />}
//                     label="Male"
//                   />
//                 </Field>
//               </FormControl>
//               <ErrorMessage name="gender" component={FormHelperText} />
//               <Field
//                 as={TextField}
//                 id="standard-basic"
//                 name="phoneNumber"
//                 label="Phone Number"
//                 placeholder="Enter your phoneno" // should be "Enter your phone number"
//                 helperText={<ErrorMessage name="phoneNumber" />}
//                 fullWidth
//                 variant="standard"
//               />

//               <Field
//                 as={TextField}
//                 id="password"
//                 name="password"
//                 type="password"
//                 label="Password"
//                 placeholder="Enter your password"
//                 helperText={<ErrorMessage name="password" />}
//                 fullWidth
//                 variant="standard"
//               />
//               <Field
//                 as={TextField}
//                 id="confirmPassword"
//                 type="password"
//                 name="confirmPassword"
//                 label="Confirm Password"
//                 placeholder="Enter your confirm password"
//                 helperText={<ErrorMessage name="confirmPassword" />}
//                 fullWidth
//                 variant="standard"
//               />
//               <FormControlLabel
//                 control={<Field as={Checkbox} name="termsAndConditions" />}
//                 label="I accept the terms and conditions."
//               />
//               <FormHelperText>
//                 <ErrorMessage name="termsAndConditions" />
//               </FormHelperText>
//               <Button
//                 type="submit"
//                 sx={{ margin: "8px 0" }}
//                 color="primary"
//                 variant="contained"
//                 disabled={props.isSubmitting}
//               >
//                 {props.isSubmitting ? "Loading" : "Sign up"}
//               </Button>
//             </Form>
//           )}
//         </Formik>
//       </Paper>
//     </Grid>
//   );
// };

// export default Signup;

import {
  Avatar,
  Grid,
  Paper,
  Typography,
  TextField,
  Checkbox,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  FormHelperText,
} from "@mui/material";
import React from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Signup = () => {
  const initialValues = {
    name: "",
    email: "",
    gender: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    termsAndConditions: false,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "It's too short").required("Required"),
    email: Yup.string().email("Enter valid email").required("Required"),
    gender: Yup.string()
      .oneOf(["male", "female"], "Required")
      .required("Required"),
    phoneNumber: Yup.number()
      .typeError("Enter valid Phone Number")
      .required("Required"),
    password: Yup.string()
      .min(8, "Password minimum length should be 8")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password not matched")
      .required("Required"),
    termsAndConditions: Yup.boolean()
      .oneOf([true], "Accept terms & conditions")
      .required("Required"),
  });

  const onSubmit = (values, { resetForm, setSubmitting }) => {
    console.log("Values", values);
    setTimeout(() => {
      resetForm();
      setSubmitting(false);
    }, 2000);
  };

  return (
    <Grid>
      <Paper
        elevation={20}
        sx={{ padding: "30px 20px", width: "300px", margin: "0px auto" }}
      >
        <Grid align="center">
          <Avatar sx={{ bgcolor: "#1bbd7e" }}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account
          </Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                id="name"
                name="name"
                label="Name"
                placeholder="Enter your name"
                helperText={<ErrorMessage name="name" />}
                fullWidth
                variant="standard"
              />
              <Field
                as={TextField}
                id="email"
                name="email"
                label="Email"
                placeholder="Enter your email"
                helperText={<ErrorMessage name="email" />}
                fullWidth
                variant="standard"
              />
              <FormControl component="fieldset" sx={{ marginTop: "10px" }}>
                <FormLabel component="legend">Gender</FormLabel>
                <Field row as={RadioGroup} name="gender">
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </Field>
              </FormControl>
              <ErrorMessage name="gender" component={FormHelperText} />
              <Field
                as={TextField}
                id="phoneNumber"
                name="phoneNumber"
                label="Phone Number"
                placeholder="Enter your phone number"
                helperText={<ErrorMessage name="phoneNumber" />}
                fullWidth
                variant="standard"
              />
              <Field
                as={TextField}
                id="password"
                type="password"
                name="password"
                label="Password"
                placeholder="Enter your password"
                helperText={<ErrorMessage name="password" />}
                fullWidth
                variant="standard"
              />
              <Field
                as={TextField}
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                placeholder="Enter your confirm password"
                helperText={<ErrorMessage name="confirmPassword" />}
                fullWidth
                variant="standard"
              />
              <FormControlLabel
                control={<Field as={Checkbox} name="termsAndConditions" />}
                label="I accept the terms and conditions."
              />
              <ErrorMessage
                name="termsAndConditions"
                component={FormHelperText}
              />
              <Button
                type="submit"
                sx={{ margin: "8px 0" }}
                color="primary"
                variant="contained"
                disabled={props.isSubmitting}
              >
                {props.isSubmitting ? "Loading" : "Sign up"}
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default Signup;
