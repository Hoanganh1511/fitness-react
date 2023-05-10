import { Styles } from './Styles'
import { STitle } from '../Styles'
import BgTitle from '@/assets/images/bg-title.svg'
import Avatar from '@/assets/images/bg-class-2.avif'
import StarIcon from '@/assets/icons/star-icon.svg'
import LeftIcon from '@/assets/icons/arrow-left-special-icon.svg'
import RightIcon from '@/assets/icons/arrow-right-special-icon.svg'
function TestimonialContent() {
  return (
    <Styles id='testimonial'>
      <div className='container'>
        <div className='wrapper'>
          <div className='content'>
            <div className='left'>
              <STitle mode='white'>
                Testimonial <BgTitle />
              </STitle>
              <h3>
                WHAT PEOPLE <br />
                say about us & <br />
                Our classes
              </h3>
            </div>
            <div className='right'>
              <div className='reviewers'>
                <div className='reviewer-title'>
                  <div className='reviewer-avatar'>
                    <img src={Avatar} alt='' />
                  </div>
                  <div className='reviewer-info'>
                    <p>Alex Morgan</p>
                    <div className='rates'>
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                  </div>
                </div>
                <p className='reviewer-description'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                  et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                </p>
              </div>
              <div className='group-button'>
                <p>02</p>
                <LeftIcon />
                <RightIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  )
}

export default TestimonialContent
