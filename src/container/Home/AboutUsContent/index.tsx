import { Styles } from './Styles'
import RunningPersonIcon from '@/assets/icons/running-person-icon.svg'
import RightIcon from '@/assets/icons/arrow-right-icon.svg'
import RunningPersonImage from '@/assets/images/bg-practice.png'
import { STitle } from '../Styles'
import BgTitle from '@/assets/images/bg-title.svg'
function AboutUsContent() {
  return (
    <Styles id='aboutus'>
      <div className='content'>
        <div className='left-content'>
          <STitle mode='white'>
            About Us <BgTitle />
          </STitle>
          {/* <h4>About Us</h4> */}
          <h3>
            NuLLA ID <br />
            ACCUMSAN ERAT
          </h3>
          <p className='description'>Lorem ipsum dolor sit amet, consetetur .</p>
          <div className='classes'>
            <div className='class'>
              <div className='class-title'>
                <p className='class-title__icon'>
                  <RunningPersonIcon />
                </p>
                <div className='class-title__text'>
                  <h4>GYM</h4>
                  <h3>MORBI SODALES</h3>
                </div>
              </div>
              <div className='class-description'>
                <p className='class-description__text'>consetetur sadipscing elitr, sed diam nonumy eirmod </p>
                <button>
                  Read <br />
                  more
                </button>
              </div>
            </div>
            <div className='class'>
              <div className='class-title'>
                <p className='class-title__icon'>
                  <RunningPersonIcon />
                </p>
                <div className='class-title__text'>
                  <h4>GYM</h4>
                  <h3>MORBI SODALES</h3>
                </div>
              </div>
              <div className='class-description'>
                <p className='class-description__text'>consetetur sadipscing elitr, sed diam nonumy eirmod </p>
                <button>
                  Read <br />
                  more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='right-content'>
          <div className='bg-content'>
            <div className='after'>{/* <BgAfter /> */}</div>
            <img className='bg-running' src={RunningPersonImage} alt='' />
          </div>
          <div className='practice-title'>
            <h3 className='practice-title__text'>
              Wany to practice <br /> at home ?
            </h3>
            <a href='' className='practice-title__link'>
              Click here
              <RightIcon />
            </a>
          </div>
        </div>
      </div>
    </Styles>
  )
}

export default AboutUsContent
