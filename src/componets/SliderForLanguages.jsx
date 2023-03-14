import React from "react";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./sliderForLanguages.css";
import {languages, ourServices, slideImages} from "../data";
import styled from "styled-components";
import {Container} from "@mui/material";
import bgItem from '../images/bg_our_services_item.png'

SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);



const SwipeImageContainer = styled.div`
  width: 70px;
  height: 70px;
 
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`

const SwipeImage = styled.img`
  width: 60px;
  height: 60px;
`







const SliderForServices = () => {
    return (
        <div className="main-swiper">
            <Swiper
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                grabCursor={true}
                style={{ height: '70px', width: '100%' }}
                // spaceBetween={10}
                centeredSlides={true}
                slidesPerView={"auto"}


            >
                {/* using array */}
                {languages.map((swipeItem, i) => {
                    return (
                        <SwiperSlide key={i}>

                                        <SwipeImage src={swipeItem.img} alt={swipeItem.desc} />
                        </SwiperSlide>
                    );
                })}

            </Swiper>
        </div>
    );
};

export default SliderForServices;