import React from 'react'
import { Styles } from './Styles'
import Input from '@/common/components/Input'
import ShadowBMI from '@/assets/images/shadow-bmi.png'
import SliderBg1 from '@/assets/images/img-slider-1.jpg'
import SliderBg2 from '@/assets/images/img-slider-2.jpg'
import SliderBg3 from '@/assets/images/img-slider-3.jpg'
import SliderBg4 from '@/assets/images/img-slider-4.jpg'
import LeftIcon from '@/assets/icons/chevron-left.svg'
import RightIcon from '@/assets/icons/chevron-right.svg'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
function HeroContent() {
  return (
    <Styles>
      <div className='container'>
        <div className='wrapper'>
          <div className='content'>
            <div className='slider-wrapper'>
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: '.new-swiper-button-next',
                  prevEl: '.new-swiper-button-prev'
                }}
                className='mySwiper'
              >
                <SwiperSlide>
                  <img className='img-slider' src={SliderBg1} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='img-slider' src={SliderBg2} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='img-slider' src={SliderBg3} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='img-slider' src={SliderBg4} alt='' />
                </SwiperSlide>
              </Swiper>
              <button className='new-swiper-button-prev'>
                <LeftIcon />
              </button>
              <button className='new-swiper-button-next'>
                <RightIcon />
              </button>
            </div>

            <div className='bmi'>
              <h4>
                Pellentesque turpis <br />
                porttitor <b>CALCULATE BMI</b>
              </h4>
              <div className='form'>
                <div className='group-radio'>
                  <label htmlFor=''>
                    <input type='radio' />
                    Imperial
                  </label>
                  <label htmlFor=''>
                    <input type='radio' />
                    Metric
                  </label>
                </div>
                <div className='group-input'>
                  <div className='item'>
                    <Input placeholder='FIT' />
                    <label>Height</label>
                  </div>
                  <div className='item'>
                    <Input placeholder='IN' />
                  </div>
                  <div className='item'>
                    <Input placeholder='LESS' />
                    <label>Weight</label>
                  </div>
                </div>
              </div>
              <img className='shadow' src={ShadowBMI} alt='' />
            </div>
          </div>
        </div>
      </div>
    </Styles>
  )
}

export default HeroContent
