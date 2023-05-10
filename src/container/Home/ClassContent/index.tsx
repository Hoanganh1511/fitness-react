import { Styles } from './Styles'

import BgClass1 from '@/assets/images/bg-class.avif'
import BgClass2 from '@/assets/images/bg-class-2.avif'
import BgClass3 from '@/assets/images/bg-class-3.avif'
import BgClass4 from '@/assets/images/bg-class-4.avif'
import RightIcon from '@/assets/icons/arrow-right-icon.svg'
import BgTitle from '@/assets/images/bg-title.svg'
import { STitle } from '../Styles'
function ClassContent() {
  return (
    <Styles id='classes'>
      <div className='container'>
        <div className='wrapper'>
          <div className='content'>
            {/* <h4>
              Our classes <BgTitle />
            </h4> */}
            <STitle mode='red'>
              Our classes <BgTitle />
            </STitle>
            <h3>Fitness & Yoga</h3>
            <div className='class-grids'>
              <div className='class'>
                <img className='class-bg' src={BgClass1} alt='' />
                <div className='class-text'>
                  <div className='class-text__title'>
                    {/* <p>Gym</p> */}
                    <p className='description'>
                      This is our all-rounder. In Interval Training you’ll find complete beginners and marathon winners.
                      The class builds full-body strength and improves cardio. Everyone welcome — the class is as hard
                      as you make it.
                    </p>
                    <h5>Interval Training</h5>
                  </div>
                  <div className='class-text__more-info'>
                    <a href=''>
                      More info <RightIcon />
                    </a>
                  </div>
                </div>
              </div>
              <div className='class'>
                <img className='class-bg' src={BgClass2} alt='' />
                <div className='class-text'>
                  <div className='class-text__title'>
                    {/* <p>Gym</p> */}
                    <p className='description'>
                      Pump is a weights class that builds full-body strength. Each workout is choreographed to keep
                      things fun and it’s easy to track your progress. Everyone welcome. If you’re new to weightlifting
                      then you can start with light weights and build from there.
                    </p>
                    <h5>Pump</h5>
                  </div>
                  <div className='class-text__more-info'>
                    <a href=''>
                      More info <RightIcon />
                    </a>
                  </div>
                </div>
              </div>
              <div className='class'>
                <img className='class-bg' src={BgClass3} alt='' />
                <div className='class-text'>
                  <div className='class-text__title'>
                    {/* <p>Gym</p> */}
                    <p className='description'>
                      High Intensity Interval Training (HIIT) classes are short – you won’t exercise for longer that 30
                      minutes. But if you push yourself hard then you’ll burn fat both during and after the class. Not
                      suitable for beginners – make sure you’re comfortable in an Interval Training class first.
                    </p>
                    <h5>HIIT</h5>
                  </div>
                  <div className='class-text__more-info'>
                    <a href=''>
                      More info <RightIcon />
                    </a>
                  </div>
                </div>
              </div>
              <div className='class'>
                <img className='class-bg' src={BgClass4} alt='' />
                <div className='class-text'>
                  <div className='class-text__title'>
                    {/* <p>Yoga</p> */}
                    <p className='description'>
                      Yoga at The Fitness Village focuses on the physical aspects of improving strength and flexibility.
                      Everyone welcome – but if you’re new to yoga then let your instructor know. You can find more
                      information about each yoga type directly on our booking page.
                    </p>
                    <h5>Yoga</h5>
                  </div>
                  <div className='class-text__more-info'>
                    <a href=''>
                      More info <RightIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  )
}

export default ClassContent
