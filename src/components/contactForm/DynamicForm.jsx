import React from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { inputFormElements } from "./DynamicFormElement";

const DynamicForm = () => {
  return (
    <div>
      <Grid sx={{ padding: "80px 50px 0px 5px" }}>
        <Card
          sx={{ maxWidth: "450px", margin: "0 auto", padding: "20px 20px" }}
        >
          <CardContent>
            <Typography
              align="center"
              variant="h4"
              gutterBottom
              color="primary"
            >
              Create an Account
            </Typography>
            <Typography
              variant="body2"
              component="p"
              color="textSecondary"
              gutterBottom
              align="center"
            >
              Fill all the mandatory fields to create an account.
            </Typography>
            <form>
              <Typography variant="body2" align="left" gutterBottom>
                Personal Info :
              </Typography>
              <Grid container spacing={1}>
                {/* <Grid item xs={12} sm={6}>
                  <TextField
                    label="First Name"
                    placeholder="Enter first name"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last Name"
                    placeholder="Enter last name"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    label="Email"
                    placeholder="Enter email"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="number"
                    label="Phone no"
                    placeholder="Enter phone number"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    placeholder="Type your message here"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                  />
                </Grid> */}
                {inputFormElements.slice(0, 4).map((input) => (
                  <Grid xs={input.xs} sm={input.sm} item>
                    <TextField {...input} />
                  </Grid>
                ))}
              </Grid>
              <Typography variant="body2" align="left" gutterBottom>
                Address :
              </Typography>
              <Grid container spacing={1}>
                {inputFormElements.slice(4, 9).map((input) => (
                  <Grid xs={input.xs} sm={input.sm} item>
                    <TextField {...input} />
                  </Grid>
                ))}
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={12} margin="10px 0px" align="right">
                  <Button
                    type="reset"
                    sx={{ margin: "0px 5px" }}
                    variant="outlined"
                    color="primary"
                  >
                    Reset
                  </Button>
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default DynamicForm;
