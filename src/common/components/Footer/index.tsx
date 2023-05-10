import React from 'react'
import { Styles } from './Styles'
import DumbbellIcon from '@/assets/icons/dumbbell-footer-icon.svg'
import Input from '../Input'
function Footer() {
  return (
    <Styles>
      <div className='container'>
        <div className='wrapper'>
          <div className='content'>
            <div className='content-top'>
              <div className='content-top__left'>
                <div className='content-top__left-title'>
                  <DumbbellIcon />
                  <h3>ANGEL FIT</h3>
                </div>
                <p className='content-top__left-description'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                  et ea
                </p>
              </div>
              <div className='content-top__right'>
                <div className='content-top__right-routes'>
                  <div className='routes'>
                    <h4>Information</h4>
                    <ul>
                      <li>
                        <a href=''>ABOUT US</a>
                      </li>
                      <li>
                        <a href=''>CUSTOMERS</a>
                      </li>
                      <li>
                        <a href=''>CLIENTS</a>
                      </li>
                      <li>
                        <a href=''>PORTFOLIO</a>
                      </li>
                    </ul>
                  </div>
                  <div className='routes'>
                    <h4>SERVICES</h4>
                    <ul>
                      {' '}
                      <li>
                        <a href=''>TRAINING AT HOME</a>
                      </li>
                      <li>
                        <a href=''>FITNESS FOR KIDS</a>
                      </li>
                      <li>
                        <a href=''>ONLINE COACH</a>
                      </li>
                      <li>
                        <a href=''>CHAMPIONS</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='content-top__right-form'>
                  <h4>SUBSCRIBE TO NEWSLETTER</h4>
                  <Input placeholder='EMAIl' />
                  <div className='more-article'>
                    <a href=''>Subscribe</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='content-bottom'></div>
          </div>
        </div>
      </div>
    </Styles>
  )
}

export default Footer
