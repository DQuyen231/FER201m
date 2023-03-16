import React from "react";
import { UserAuth } from "../context/AuthContext";
import { useFormik } from "formik";
import * as Yup from 'yup'
import '../css/ContactCSS.css'
import { Typography } from "@mui/material";
import { Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Link } from "react-router-dom";

export default function Contact() {

    const {user} = UserAuth();

    const listOfType =
        [
            'About time',
            'About location',
            'About service',
            'About car',
        ]

    const formik = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            phone: '',
            typeApplication: '',
            text: ''
        },

        onSubmit: values => {
            console.log(values);
        },

        validationSchema: Yup.object({
            fullname: Yup.string().required('Fullname is required').min(5, 'At least 5 characters').max(50, 'Fullname is too long!'),
            email: Yup.string().required('Email required').email('Invalid email address').min(11, 'At least 5 characters').max(70, 'Email is too long!'),
            phone: Yup.number().required('Phone is required').integer('Invalid phone!').min(10000, 'Min 5 digits!').max(999999999999, 'Max 12 digits!'),
            typeApplication: Yup.string().oneOf(listOfType, "Invalid! Please try again."),
            text: Yup.string().required('Text is required').min(10, 'At least 10 characters').max(250, 'Text is too long!'),
        })
    })




    return (
        <div className="contact">
            <Typography variant="h2" sx={{ color: 'red', paddingTop: '60px', textAlign: 'center' }}>Contact Us</Typography>
            <Typography sx={{ color: 'red', paddingTop: '10px', textAlign: 'center' }}>Hãy cho chúng tôi biết ý kiến của bạn bằng cách phản hồi hoặc liên hệ qua các thông tin của chúng tôi để giúp chúng tôi phát triển hơn trong tương lai</Typography>
            <div className="container">

                {/* thông tin liên hệ */}
                <div className="contactInfo">

                    <Typography variant="h5">Address:</Typography>
                    <Typography>99 Nguyễn Huệ, phường Bến Nghé, Quận 1, TP. Hồ Chí Minh</Typography><br />

                    <Typography variant="h5">Phone:</Typography>
                    <Typography>0123-456-789</Typography><br />

                    <Typography variant="h5">Email:</Typography>
                    <Typography>RentCar@gmail.com</Typography><br />

                </div>


                {/* Form gửi đơn liên hệ  */}
                <div className="contactForm">
                    <form onSubmit={formik.handleSubmit}>
                        <h2>Send Message</h2>

                        <div className="inputBox">
                            <TextField
                                name="fullname"
                                value={formik.values.fullname}
                                onChange={formik.handleChange}
                                label="Full Name"
                                error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                                helperText={formik.touched.fullname && formik.errors.fullname}
                            />
                        </div><br />
                        <div className="inputBox">
                            <TextField
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                label="Email"
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                        </div><br />
                        <div className="inputBox">
                            <TextField
                                name="phone"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                label="Phone"
                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                helperText={formik.touched.phone && formik.errors.phone}
                            />
                        </div><br />
                        <div className="inputBox">
                            <FormControl fullWidth>
                                <InputLabel id="format-label">Choose one</InputLabel>
                                <Select

                                    style={{ width: 400 }}
                                    multiple={false}
                                    placeholder="type application"
                                    label="Choose type application"
                                    name="typeApplication"
                                    value={formik.values.typeApplication}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}

                                >
                                    <MenuItem
                                        disabled
                                        value='0'
                                    >
                                        Please select
                                    </MenuItem>
                                    {listOfType.map((typeApplication, index) =>
                                        <MenuItem key={index} value={typeApplication} >{typeApplication}</MenuItem>
                                    )}
                                </Select>
                                {formik.errors.typeApplication && (
                                    <p className='contact-error'>{formik.errors.typeApplication}</p>
                                )}
                            </FormControl>
                        </div><br />
                        <div className="inputBox">
                            <TextField
                                name="text"
                                value={formik.values.text}
                                onChange={formik.handleChange}
                                label="Type your Message"
                                multiline
                                rows={4}
                                error={formik.touched.text && Boolean(formik.errors.text)}
                                helperText={formik.touched.text && formik.errors.text}
                            />
                        </div><br />
      
                        {user?.displayName ?  <Button type="submit">Send</Button> : <Button><Link to='/loginpage' style={{textDecoration:'none'}}>Send</Link></Button>}
                    
                    </form>
                </div>
            </div>
        </div>

    )
}