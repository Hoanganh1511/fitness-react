import { Styles } from './Styles'
import { STitle } from '../Styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import BgTitle from '@/assets/images/bg-title.svg'
import CoachImage1 from '@/assets/images/coach-1.avif'
import CoachImage2 from '@/assets/images/coach-2.avif'
import CoachImage3 from '@/assets/images/coach-3.avif'
import CoachImage4 from '@/assets/images/coach-4.avif'
import CoachImage5 from '@/assets/images/coach-5.avif'
import CoachImage6 from '@/assets/images/coach-6.avif'
import CoachImage7 from '@/assets/images/coach-7.avif'
import CoachImage8 from '@/assets/images/coach-8.avif'
import CoachImage9 from '@/assets/images/coach-9.avif'

import StickerIcon from '@/assets/icons/sticker-icon.svg'
import RunningIcon from '@/assets/icons/running-person-icon.svg'
import UserIcon from '@/assets/icons/user-icon.svg'
import DumbbellIcon from '@/assets/icons/dumbbell-icon.svg'
function CoachesContent() {
  return (
    <Styles id='coaches'>
      <div className='content'>
        <STitle>
          Coaches
          <BgTitle />
        </STitle>
        <h3>
          BUILD YOUR BODY WITH
          <br /> OUR BEST TRAINERS
        </h3>
        <p className=''>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna
        </p>
        <div className='slider-wrapper'>
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            centeredSlides={true}
            loop={true}
            pagination={{
              clickable: true
            }}
            modules={[Pagination]}
            className='mySwiper'
          >
            <SwiperSlide>
              <div className='coach'>
                <h4>Alex Phoenix</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et
                </p>
                <img className='coach-img' src={CoachImage1} alt='' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='coach'>
                <h4>Alex Phoenix</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et
                </p>
                <img className='coach-img' src={CoachImage2} alt='' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='coach'>
                <h4>Alex Phoenix</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et
                </p>
                <img className='coach-img' src={CoachImage3} alt='' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='coach'>
                <h4>Alex Phoenix</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et
                </p>
                <img className='coach-img' src={CoachImage4} alt='' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='coach'>
                <h4>Alex Phoenix</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et
                </p>
                <img className='coach-img' src={CoachImage5} alt='' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='coach'>
                <h4>Alex Phoenix</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et
                </p>
                <img className='coach-img' src={CoachImage6} alt='' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='coach'>
                <h4>Alex Phoenix</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et
                </p>
                <img className='coach-img' src={CoachImage7} alt='' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='coach'>
                <h4>Alex Phoenix</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et
                </p>
                <img className='coach-img' src={CoachImage8} alt='' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='coach'>
                <h4>Alex Phoenix</h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et
                </p>
                <img className='coach-img' src={CoachImage9} alt='' />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className='measure-list'>
          <div className='measure-list__item'>
            <StickerIcon />
            <p>437</p>
          </div>
          <div className='measure-list__item'>
            <RunningIcon />
            <p>235</p>
          </div>
          <div className='measure-list__item'>
            <UserIcon />
            <p>44</p>
          </div>
          <div className='measure-list__item'>
            <DumbbellIcon />
            <p>135</p>
          </div>
        </div>
      </div>
    </Styles>
  )
}

export default CoachesContent
