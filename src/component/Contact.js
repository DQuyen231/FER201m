import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'
import '../css/ContactCSS.css'

export default function Contact() {
    const formik = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            phone: '',
            text: ''
        },

        onSubmit: values => {
            console.log(values);
        },

        validationSchema: Yup.object({
            fullname: Yup.string().required('Fullname is required').min(5, 'At least 5 characters').max(50, 'Fullname is too long!'),
            email: Yup.string().required('Email required').email('Invalid email address').min(11, 'At least 5 characters').max(70, 'Email is too long!'),
            phone: Yup.number('you need to input an number').required('Phone number is required').min(6, 'At least 6 characters').max(15, 'Phone number is too long!'),
            text: Yup.string().required('Text is required').min(10, 'At least 10 characters').max(250, 'Text is too long!'),
        })
    })




    return (
        <section className="contact">
            <div className="content">
                <h2>Contact Us</h2>
                <p>Hãy cho chúng tôi biết ý kiến của bạn bằng cách phản hồi hoặc liên hệ qua các thông tin của chúng tôi để giúp chúng tôi phát triển hơn trong tương lai</p>
            </div>
            <div className="container">
                <div className="contactInfo">
                    <div className="box">
                        <div className="icon"><i className='bx bx-current-location'></i></div>
                        <div className="text">
                            <h3>Address</h3>
                            <p>99 Nguyễn Huệ,<br />phường Bến Nghé, Quận 1,<br />TP. Hồ Chí Minh</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"><i className='bx bxs-phone'></i></div>
                        <div className="text">
                            <h3>Phone</h3>
                            <p>0123-456-789</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"><i className='bx bxs-envelope'></i></div>
                        <div className="text">
                            <h3>Email</h3>
                            <p>RentCar@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="contactForm">
                    <form onSubmit={formik.handleSubmit}>
                        <h2>Send Message</h2>
                        <div className="inputBox">
                            <input type="text" name="fullname" value={formik.values.fullname} onChange={formik.handleChange} />
                            <span>Full Name</span>
                            {formik.errors.fullname && formik.touched.fullname ? (<div className="show-error">{formik.errors.fullname}</div>) : null}
                        </div>
                        <div className="inputBox">
                            <input type="text" name="email" value={formik.values.email} onChange={formik.handleChange} />
                            <span>Email</span>
                            {formik.errors.email && formik.touched.email ? (<div className="show-error">{formik.errors.email}</div>) : null}
                        </div>
                        <div className="inputBox">
                            <input type="text" name="phone" value={formik.values.phone} onChange={formik.handleChange} />
                            <span>Phone</span>
                            {formik.errors.phone && formik.touched.phone ? (<div className="show-error">{formik.errors.phone}</div>) : null}
                        </div>
                        <div className="inputBox">
                            <select name="format" id="format" >
                                <option selected disabled>Choose one</option>
                                <option value="time">About time</option>
                                <option value="location">About location</option>
                                <option value="service">About service</option>
                                <option value="car">About car</option>
                            </select>
                        </div>
                        <div className="inputBox">
                            <textarea name="text" value={formik.values.text} onChange={formik.handleChange}></textarea>
                            <span>Type your Message</span>
                            {formik.errors.text && formik.touched.text ? (<div className="show-error">{formik.errors.text}</div>) : null}
                        </div>
                        <div className="inputBox">
                            <input type="submit" name="" value="Send" />
                        </div>
                    </form>
                </div>
            </div>
        </section>

    )
}