import React,{useState,useEffect} from 'react'
import Swiper from 'swiper'
import './Banner.css'
import 'swiper/css/swiper.min.css'
function Banner(props){
    const {picList}=props
    const [picstate,setPicstate]=useState(null)

    useEffect (() => {
        if (picList.length && !picstate){
            let newSliderSwiper = new Swiper(".slider-container", {
              loop: true,
              autoplay: {
                delay: 3000,
                disableOnInteraction: false,
              },
              pagination: {el:'.swiper-pagination'},
            })
            setPicstate(newSliderSwiper)
        }
      }, [picList.length, picstate])

    return(
        <div className='bannerbox'>
            <div className="swiper-bg"></div>
            <div className='banner'>
                <div className="slider-container">
                    <div className="swiper-wrapper">
                    {
                        picList.map ((slider,index) => {
                        return (
                            <div className="swiper-slide" key={slider+index}>
                            <div className="slider-nav">
                                <img src={slider.imageUrl} width="100%" height="100%" alt="推荐" />
                            </div>
                            </div>
                        );
                        })
                    }
                    </div>
                <div className="swiper-pagination"></div>
                </div> 
                </div>
        </div>
    )
}
export default React.memo(Banner)