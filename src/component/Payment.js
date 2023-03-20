import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'
import '../css/PaymentCSS.css'
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import PaymentIcon from '@mui/icons-material/Payment';


export default function PayMent() {

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const [month, setMonth] = useState('');

    const handleMonthChange = (event) => {
        setMonth(event.target.value);
    };

    const formik = useFormik({
        initialValues: {
            fullname: '',
            city: '',
            address: '',
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
        <div className="payment">
            <PaymentIcon sx={{marginTop:'70px', fontSize:'6rem', marginLeft:'875px', color:'#B2B2B2'}}/>
            <Typography sx={{textAlign:'center', fontSize:'30px', fontWeight:'bold', color:'#B2B2B2'}}>Payment</Typography>
            <Typography sx={{textAlign:'center'}}>vui lòng kiểm tra kĩ thông tin chi tiết đơn hàng trước khi xác nhận thanh toán.</Typography>
        <div className="container">
            <form className="form" action="" onSubmit={formik.handleSubmit}>
                <Box className="col1">
                    <h3 className="title">billing address</h3>
                    <Stack>
                        <TextField
                            label="Full name"
                            variant="outlined"
                            placeholder="Nguyen Van A"
                            name="fullname"
                            value={formik.values.fullname}
                            onChange={formik.handleChange}
                            error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                            helperText={formik.touched.fullname && formik.errors.fullname}
                        /><br />

                        <TextField
                            label="City"
                            variant="outlined"
                            placeholder="TP. Hồ Chí Minh"
                            name="City"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            error={formik.touched.city && Boolean(formik.errors.city)}
                            helperText={formik.touched.city && formik.errors.city}
                        /><br />

                        <TextField
                            label="Address"
                            variant="outlined"
                            placeholder="Address"
                            name="Address"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            error={formik.touched.address && Boolean(formik.errors.address)}
                            helperText={formik.touched.address && formik.errors.address}
                        /><br />
                    </Stack>

                </Box>
                <div className="col2">
                <h3 className="title">payment</h3>

                <Stack>
                    <TextField
                        id="nameOnCard"
                        name="nameOnCard"
                        label="Name on Card"
                        placeholder="Nguyen Van A"
                        value={formik.values.nameOnCard}
                        onChange={formik.handleChange}
                        error={formik.touched.nameOnCard && Boolean(formik.errors.nameOnCard)}
                        helperText={formik.touched.nameOnCard && formik.errors.nameOnCard}
                    /><br />

                    <TextField
                        label="Credit Card Number"
                        placeholder="1111-2222-3333-4444"
                        name="cardNumber"
                        value={formik.values.cardNumber}
                        onChange={formik.handleChange}
                        error={formik.errors.cardNumber && formik.touched.cardNumber}
                        helperText={formik.errors.cardNumber && formik.touched.cardNumber ? formik.errors.cardNumber : ''}
                        type="number"
                    /><br />
                </Stack>

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth>
                            <InputLabel>Exp month</InputLabel>
                            <Select value={month} onChange={handleMonthChange}>
                                {months.map((month) => (
                                    <MenuItem key={month} value={month}>
                                        {month}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="Exp year"
                            type="number"
                            placeholder="2022"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="CVV"
                            type="text"
                            placeholder="1234"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                </Grid>
                <Button sx={{ marginTop: '30px', marginBottom: '80px', marginLeft: '13rem', background: '#E7B10A', color: 'white' }} type="submit">Thanh Toán</Button>
                </div>
            </form>
        </div>
        </div>
    )
}