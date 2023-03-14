import React from "react";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./sliderForServices.css";
import {ourServices, slideImages} from "../data";
import styled from "styled-components";
import {Container} from "@mui/material";
import bgItem from '../images/bg_our_services_item.png'

SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);


const SwipeWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`
const Top = styled.div`
  height: 125px;
  flex: 1;
  display: flex;
  flex-direction: column;
`
const Bottom = styled.div`
  flex: 1;
  width: 100%;
  height: 125px;
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
`

const SwipeImageContainer = styled.div`
  width: 120px;
  height: 120px;
 
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  background-image: url(${bgItem});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
`

const SwipeImage = styled.img`
  margin-top: 30px;
  width: 60px;
  height: 60px;
  direction: rtl;
  right: 0;
  top: 0;
`


const SwipeTextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  
  text-align: center;
  direction: rtl;
  color: black;
`


const SwipeTitle = styled.h3`
  width: 100%;
  margin: 0;
  font-size:  18px;
`


const SwipeDesc = styled.div`
  width: 100%;
  margin-bottom: 3px;
  
`




const SliderForServices = () => {
    return (
        <div className="main-swiper">
            <Swiper
                effect={"coverflow"}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                grabCursor={true}
                style={{ height: '295px', width: '100%' }}
                // spaceBetween={10}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{

                    stretch: 0,
                    depth: 350,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                className="mySwiper"
            >
                {/* using array */}
                {ourServices.map((swipeItem, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <Container>
                                <SwipeWrapper>
                                    <Top>
                                        <SwipeImageContainer>
                                            <SwipeImage src={swipeItem.img} alt={swipeItem.desc} />
                                        </SwipeImageContainer>
                                    </Top>
                                    <Bottom>
                                        <SwipeTextContainer>
                                            <SwipeTitle>
                                                {
                                                    swipeItem.title
                                                }
                                            </SwipeTitle>
                                            <SwipeDesc>
                                                {
                                                    swipeItem.desc
                                                }
                                            </SwipeDesc>
                                        </SwipeTextContainer>
                                    </Bottom>
                                </SwipeWrapper>
                            </Container>
                        </SwiperSlide>
                    );
                })}

            </Swiper>
        </div>
    );
};

export default SliderForServices;