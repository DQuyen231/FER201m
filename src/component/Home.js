import React from "react";
import '../css/Home.css';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { Box, Typography } from "@mui/material";
import CarRentalTwoToneIcon from '@mui/icons-material/CarRentalTwoTone';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';


export default function Home() {

    const images = [
        {
            original: 'https://static.danhgiaxe.com/data/201525/the-aventadors-aggressive-lines-and-stealth-fighter-like-edges-make-for-a-menacing-beauty-thats-perfect-for-lambos-attention-hoarding-ethos_2324.jpg',

        },
        {
            original: 'https://vnn-imgs-f.vgcloud.vn/2020/10/21/10/huracan-la-mo-t-trong-nhu-ng-ma-u-xe-de-p-nha-t-cu-a-lamborghini-a-nh-autocar.jpg',

        },
        {
            original: 'https://autobikes.vn/stores/news_dataimages/minhmax/072016/23/22/223933_2.jpg',

        },
        {
            original: 'https://afamilycdn.com/2018/7/2/du-lich-tren-xe-1-1530505914263914495450.jpg',

        },
        {
            original: 'https://cdnimg.vietnamplus.vn/t1200/Uploaded/qrndqxjwp/2022_01_25/960x016175894187251632579825.jpg',

        },
        {
            original: 'https://cdnimg.vietnamplus.vn/uploaded/qrndqxjwp/2022_01_15/5c13378d057c480a8e98c64a413e20613682161636517973.jpg',

        }
    ];

    return (
        <div className="home-container">

            {/* phần header của trang */}
            <Typography variant="h2" sx={{ color: '#00000', paddingTop: '8rem', textAlign: 'center' }}>Self Driving Car</Typography>
            <CarRentalTwoToneIcon sx={{ fontSize: '70px', paddingLeft: '56rem', color: '#D8D8D8' }} />
            <Box><ImageGallery slideDuration={500} items={images} showFullscreenButton={false} showPlayButton={false} /></Box>

            {/* phần body của trang */}
            <div className="body">
                <Box sx={{ width: '25rem', height: '20rem', backgroundColor: '#D8D8D8' }} className="description1">
                    <ThumbUpOutlinedIcon sx={{fontSize:'100px', color:'#EEEEEE', paddingLeft:'9rem'}}/><Typography sx={{color: "black", fontSize:'35px', textAlign:'center'}}>Best price</Typography>
                    <Typography sx={{textAlign:"center"}}>Hem ipsum dolor sit amet, consectetur adipiscinger elit. In mollis erat mattis neque facilisis, sit ameter ultricies erat rutrum. Cras facilisis, nulla vel viver auctor, leo magna sodales felis, quis malesuader</Typography>
                </Box>
                <Box sx={{ width: '25rem', height: '20rem', backgroundColor: '#D8D8D8' }} className="discription2">
                    <WorkOutlineOutlinedIcon sx={{fontSize:'100px', color:'#EEEEEE', paddingLeft:'9rem'}}/><Typography sx={{color: "black", fontSize:'35px', textAlign:'center'}}>Package Delivery</Typography>
                    <Typography sx={{textAlign:'center'}}>Kurem ipsum dolor sit amet, consectetur adipiscinger elit. In mollis erat mattis neque facilisis, sit ameter ultricies erat rutrum. Cras facilisis, nulla vel viver auctor, leo magna sodales felis, quis malesuki</Typography>
                </Box>
            </div>
            <Typography className="header2" variant="h3" sx={{textAlign:'center', background:'#E7B10A', paddingTop:'50px', color:'white'}}>__________SERVICE__________</Typography>
            <div className="body2">
                <Box className="service1">
                    <Typography>XE 4 CHỖ TỰ LÁI</Typography>
                    <Typography></Typography>
                </Box>

                <Box className="service2">
                    <Typography>XE 7 CHỖ TỰ LÁI</Typography>
                    <Typography></Typography>
                </Box>

                <Box className="service3">
                    <Typography>XE CHẠY TOUR</Typography>
                    <Typography></Typography>
                </Box>

                <Box className="service4">
                    <Typography>XE CHẠY THÁNG</Typography>
                    <Typography></Typography>
                </Box>
            </div>
        </div>
    )
}