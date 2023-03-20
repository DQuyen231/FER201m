import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { object, string, bool } from "yup";
import styles from "../css/car.module.css";
import NotificationContainer from "react-notifications/lib/NotificationContainer";
function Booking() {
  const [users, setUsers] = useState({
    name: "",
    email: "",
    from: "",
    to: "",
    time: "",
    date: "",
    comfort: "",
    time: "",
    adults: "",
    children: "",
    message: "",
    status: "save",
  });

  const handleSubmit = (values, formikHelpers) => {
    alert(JSON.stringify(values));
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.register}
        style={{ marginTop: "100px", marginBottom: "20px" }}
      >
        <div className={styles.formRegisterEmail}>
          <div className={styles.title}>
            <h1>BOOKING FORM</h1>
          </div>
          <div className="MaterialForm">
            <Formik
              initialValues={users}
              enableReinitialize
              validationSchema={object({
                name: string()
                  .required("Please enter name")
                  .min(2, "Name too short"),
                year: string()
                  .required("Please enter year")
                  .min(2, "cost too short"),
                clip: string().required("Please enter clip"),
                info: string().required("Please enter info"),
                nation: string().required("Please enter message"),
                famous: bool().oneOf([true], "You need to accept the famous"),
                status: string(),
              })}
              onSubmit={(values, formikHelpers) => {
                handleSubmit(values, formikHelpers);
              }}
            >
              {({ errors, isValid, touched, dirty }) => (
                <Form>
                  <div style={{ display: "flex" }}>
                    <Field
                      name="name"
                      type="name"
                      as={TextField}
                      variant="outlined"
                      color="primary"
                      label="name"
                      fullWidth
                      style={{ marginBottom: "20px" }}
                      error={Boolean(errors.name) && Boolean(touched.name)}
                      helperText={Boolean(touched.name) && errors.name}
                    />
                    <div style={{ padding: "10px" }}></div>
                    <Field
                      name="email"
                      type="email"
                      as={TextField}
                      variant="outlined"
                      color="primary"
                      label="email"
                      fullWidth
                      style={{ marginBottom: "20px" }}
                      error={Boolean(errors.email) && Boolean(touched.email)}
                      helperText={Boolean(touched.email) && errors.email}
                    />
                  </div>
                  <div style={{ display: "flex" }}>
                    <Field
                      name="from"
                      type="text"
                      as={TextField}
                      variant="outlined"
                      color="primary"
                      label="From"
                      fullWidth
                      style={{ marginBottom: "20px" }}
                      error={Boolean(errors.from) && Boolean(touched.from)}
                      helperText={Boolean(touched.from) && errors.from}
                    />
                    <div style={{ padding: "10px" }}></div>
                    <Field
                      name="to"
                      type="text"
                      as={TextField}
                      variant="outlined"
                      color="primary"
                      label="To"
                      fullWidth
                      style={{ marginBottom: "20px" }}
                      error={Boolean(errors.to) && Boolean(touched.to)}
                      helperText={Boolean(touched.to) && errors.to}
                    />
                  </div>
                  <Field
                    name="time"
                    type="time"
                    as={TextField}
                    variant="outlined"
                    color="primary"
                    label="Time"
                    fullWidth
                    style={{ marginBottom: "20px" }}
                    error={Boolean(errors.time) && Boolean(touched.time)}
                    helperText={Boolean(touched.time) && errors.time}
                  />
                  <Field
                    name="date"
                    type="date"
                    as={TextField}
                    variant="outlined"
                    color="primary"
                    label="Date"
                    fullWidth
                    style={{ marginBottom: "20px" }}
                    error={Boolean(errors.date) && Boolean(touched.date)}
                    helperText={Boolean(touched.date) && errors.date}
                  />
                  <Field
                    name="nation"
                    type="name"
                    as={TextField}
                    variant="outlined"
                    color="primary"
                    label="Nation"
                    fullWidth
                    style={{ marginBottom: "20px" }}
                    error={Boolean(errors.nation) && Boolean(touched.nation)}
                    helperText={Boolean(touched.nation) && errors.nation}
                  />
                  <div style={{ display: "flex" }}>
                    <Field
                      name="adults"
                      type="number"
                      as={TextField}
                      variant="outlined"
                      color="primary"
                      label="Adults"
                      fullWidth
                      style={{ marginBottom: "20px" }}
                      error={Boolean(errors.adults) && Boolean(touched.adults)}
                      helperText={Boolean(touched.adults) && errors.adults}
                    />
                    <div style={{ padding: "10px" }}></div>
                    <Field
                      name="children"
                      type="number"
                      as={TextField}
                      variant="outlined"
                      color="primary"
                      label="children"
                      fullWidth
                      style={{ marginBottom: "20px" }}
                      error={
                        Boolean(errors.children) && Boolean(touched.children)
                      }
                      helperText={Boolean(touched.children) && errors.children}
                    />
                  </div>
                  <Field
                    name="message"
                    type="name"
                    as={TextField}
                    variant="outlined"
                    color="primary"
                    label="Message"
                    fullWidth
                    style={{ marginBottom: "20px" }}
                    error={Boolean(errors.message) && Boolean(touched.message)}
                    helperText={Boolean(touched.message) && errors.message}
                  />
                  <div className={styles.recap} style={{ display: "flex" }}>
                    <Field
                      name="famous"
                      type="checkbox"
                      color="primary"
                      style={{
                        zIndex: "10",
                        pointerEvents: "all",
                        width: "155px",
                        height: "23px",
                      }}
                    />
                    <span>I agree</span>
                  </div>
                  <div style={{ display: "flex", color: " #f44336" }}>
                    {errors.famous && <span>{errors.famous}</span>}
                  </div>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    disabled={!isValid || !dirty}
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
}

export default Booking;
