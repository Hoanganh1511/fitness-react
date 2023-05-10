import React from 'react'
import { Styles } from './Styles'
import TaIcon from '@/assets/icons/ta.svg'
import LocationIcon from '@/assets/icons/location-icon.svg'
import PhoneIcon from '@/assets/icons/phone-icon.svg'
import MailIcon from '@/assets/icons/mail-icon.svg'

import FacebookIcon from '@/assets/icons/facebook-icon.svg'
import InstagramIcon from '@/assets/icons/instagram-icon.svg'
import LinkedInIcon from '@/assets/icons/linkedin-icon.svg'
import TwitterIcon from '@/assets/icons/twitter-icon.svg'
import YoutubeIcon from '@/assets/icons/youtube-icon.svg'
function Header() {
  return (
    <Styles>
      <div className='container'>
        <div className='wrapper'>
          <div className='contact-social-content'>
            <div className='contact'>
              <ul>
                <li>
                  <LocationIcon />
                  <p>
                    Address: <b>Hanoi, Vietnam</b>
                  </p>
                </li>
                <li>
                  <PhoneIcon />
                  <p>
                    Call: <b>+969 704 215</b>
                  </p>
                </li>
                <li>
                  <MailIcon />
                  <p>
                    Email: <b>anhht.fe@gmail.com</b>
                  </p>
                </li>
              </ul>
            </div>
            <div className='social'>
              <ul>
                <li>
                  <a href=''>
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a href=''>
                    <InstagramIcon />
                  </a>
                </li>
                <li>
                  <a href=''>
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a href=''>
                    <TwitterIcon />
                  </a>
                </li>
                <li>
                  <a href=''>
                    <YoutubeIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='wrapper'>
          <div className='content'>
            <div className='left'>
              <TaIcon />
              <p>Angel fit</p>
            </div>
            <nav>
              <ul>
                <li>
                  <a href=''>Home</a>
                </li>
                <li>
                  <a href=''>Pages</a>
                </li>
                <li>
                  <a href=''>Portfolio</a>
                </li>
                <li>
                  <a href=''>Classes</a>
                </li>
                <li>
                  <a href=''>Blog</a>
                </li>
                <li>
                  <a href=''>Contacts</a>
                </li>
              </ul>
            </nav>
            <div className='right'>
              <p>Start for free</p>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  )
}

export default Header
