import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'
import '../css/PaymentCSS.css'
export default function PayMent() {

    const formik = useFormik({
        initialValues: {
            fullname: '',
            city: '',
            state: '',
            nameOnCard: '',
            cardNumber: '',
        },

        onSubmit: (values) => {
            console.log(values)
        },

        validateSchema: Yup.object({
            fullname: Yup.string().min(5, 'At least 5 characters').max(50, 'Fullname is too long!'),
            city: Yup.string().min(5, 'At least 5 characters').max(30, `City's name is too long`),
            state: Yup.string().min(5, 'At least 5 characters').max(30, `State's name is too long!`),
            nameOnCard: Yup.string().min(5, 'At least 5 characters').max(30, `Name on card is too long!`),
            cardNumber: Yup.number().min(5, 'At least 5 characters').max(30, `number is too long!`)
        })


    })


    return (
        <div className="container">
            <form action="" onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col">
                        <h3 className="title">billing address</h3>
                        <div className="inputBox">
                            <span>Full name :</span>
                            <input type="text" placeholder="Nguyen Van A" name="fullname" value={formik.values.fullname} onChange={formik.handleChange} />
                            {formik.errors.fullname && formik.touched.fullname ? (<div>{formik.errors.fullname}</div>) : null}
                        </div>

                        <div className="inputBox">
                            <span>city :</span>
                            <input type="text" placeholder="Ho Chi Minh City" name="city" value={formik.values.city} onChange={formik.handleChange} />
                            {formik.errors.city && formik.touched.city ? (<div>{formik.errors.city}</div>) : null}
                        </div>
                        <div className="inputBox">
                            <span>state :</span>
                            <input type="text" placeholder="Vietnam" name="state" value={formik.values.state} onChange={formik.handleChange} />
                            {formik.errors.state && formik.touched.state ? (<div>{formik.errors.state}</div>) : null}
                        </div>
                    </div>
                    <div className="col">
                        <h3 className="title">payment</h3>
                        <div className="inputBox">
                            <span>cards accepted :</span>
                            <img src="../public/assets/image/z4180635447934_7d5ca5ab50d6cc046df96c8a885561b2.jpg" alt=""></img>
                        </div>
                        <div className="inputBox">
                            <span>name on card :</span>
                            <input type="text" placeholder="Nguyen Van A" name="nameOnCard" value={formik.values.nameOnCard} onChange={formik.handleChange} />
                            {formik.errors.nameOnCard && formik.touched.nameOnCard ? (<div>{formik.errors.nameOnCard}</div>) : null}

                        </div>
                        <div className="inputBox">
                            <span>credit card number :</span>
                            <input type="number" placeholder="1111-2222-3333-4444" name="cardNumber" value={formik.values.cardNumber} onChange={formik.handleChange} />
                            {formik.errors.cardNumber && formik.touched.cardNumber ? (<div>{formik.errors.cardNumber}</div>) : null}
                        </div>
                        <div className="flex">
                            <div className="inputBox">
                                <span>exp month :</span>
                                <input type="text" placeholder="January" />
                            </div>
                            <div className="inputBox">
                                <span>exp year :</span>
                                <input type="number" placeholder="2022" />
                            </div>
                            <div className="inputBox">
                                <span>CVV :</span>
                                <input type="text" placeholder="1234" />
                            </div>
                        </div>
                    </div>
                </div>
                <input type="submit" value="proceed to checkout" className="submit-btn" />
            </form>
        </div>
    )
}