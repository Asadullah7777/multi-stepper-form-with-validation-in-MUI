import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { saveFormData } from "../../Redux/Stepper1Slice/Stepper1Slice";
import Table from "../multiStepperForm/Table";

const steps = [
  {
    label: "Select campaign settings",
    fields: ["firstName", "lastName", "email"],
  },
  {
    label: "Create an ad group",
    fields: ["password", "confirmPassword", "mediaFile"],
  },
  { label: "Create an ad", fields: ["notes"] },
];

const Stepper1 = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    mediaFile: Yup.mixed().required("Media File is required"),
    notes: Yup.string().required("Notes is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      mediaFile: null,
      notes: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, props) => {
      console.log("Props", props);
      console.log(values);
      dispatch(saveFormData(values));
      handleNext();
    },
  });

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return false;
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    formik.resetForm();
    setSubmitted(false);
  };

  const handleSubmit = () => {
    if (activeStep === steps.length - 1) {
      setSubmitted(true);
      formik.handleSubmit(); // Perform final submission
    } else {
      formik.handleSubmit(); // Proceed to the next step
      handleNext();
    }
  };

  const renderFormFields = () => {
    const currentStep = steps[activeStep];
    const fields = currentStep.fields;

    return fields.map((field) => {
      if (field === "mediaFile") {
        return (
          <React.Fragment key={field}>
            <input
              id={field}
              name={field}
              type="file"
              onChange={(event) => {
                formik.setFieldValue(field, event.currentTarget.files[0]);
              }}
            />
            {formik.values[field] && (
              <div>
                <strong>File:</strong> {formik.values[field].name}
              </div>
            )}
            {formik.touched[field] && formik.errors[field] && (
              <div>{formik.errors[field]}</div>
            )}
          </React.Fragment>
        );
      }

      return (
        <TextField
          key={field}
          id={field}
          name={field}
          label={field}
          type={
            field === "password" || field === "confirmPassword"
              ? "password"
              : "text"
          }
          variant="outlined"
          fullWidth
          margin="normal"
          value={formik.values[field] || ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched[field] && formik.errors[field] ? true : false}
          helperText={formik.touched[field] && formik.errors[field]}
        />
      );
    });
  };

  const isNextButtonDisabled = () => {
    const currentStep = steps[activeStep];
    const fields = currentStep.fields;

    return fields.some(
      (field) => !formik.values[field] || formik.errors[field]
    );
  };

  return (
    <>
      <Box
        sx={{
          width: "93%",
          paddingTop: "100px",
          paddingRight: "50px",
          paddingBottom: "100px",
          paddingLeft: "50px",
        }}
      >
        <Stepper activeStep={activeStep}>
          {steps.map((step, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={step.label} {...stepProps}>
                <StepLabel {...labelProps}>{step.label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {submitted ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: "flex", flexDirection: "column", pt: 2 }}>
              {renderFormFields()}
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mt: 2 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                {isStepOptional(activeStep) && (
                  <Button
                    color="inherit"
                    onClick={handleSkip}
                    sx={{ mt: 2, mr: 1 }}
                  >
                    Skip
                  </Button>
                )}

                <Button
                  onClick={handleSubmit}
                  disabled={isNextButtonDisabled()}
                  sx={{ mt: 2 }}
                >
                  {activeStep === steps.length - 1 ? "Submit" : "Next"}
                </Button>
              </Box>
            </Box>
          </React.Fragment>
        )}
      </Box>
      <Box sx={{ margin: "100px" }}>
        <Table />
      </Box>
    </>
  );
};

export default Stepper1;
