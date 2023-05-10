import React from 'react'
import { Styles } from './Styles'
import { STitle } from '../Styles'
import BgTitle from '@/assets/images/bg-title.svg'
import CheckIcon from '@/assets/icons/check-icon.svg'
function PriceContent() {
  return (
    <Styles>
      <div className='container'>
        <div className='wrapper'>
          <div className='content'>
            {/* <STitle mode='white'>
              Price Content <BgTitle />
            </STitle> */}
            <h3>BEST PRICING TABLES</h3>
            <div className='options-price'>
              <div className='option'>
                <h4 className='option-name'>Basic Plan</h4>
                <p className='option-description'>Here goes some description</p>
                <p className='option-price'>
                  <span>$10</span> monthly
                </p>
                <ul>
                  <li>
                    <CheckIcon /> <p>Function</p>
                  </li>
                  <li>
                    <CheckIcon /> <p>Function</p>
                  </li>
                  <li>
                    <CheckIcon /> <p>Function</p>
                  </li>
                </ul>
                <a className='option-button' href=''>
                  More Info
                </a>
              </div>
              <div className='option option-pro'>
                <h4 className='option-name'>Pro Plan</h4>
                <p className='option-description'>Here goes some description</p>
                <p className='option-price'>
                  <span>$10</span> monthly
                </p>
                <ul>
                  <li>
                    <CheckIcon /> <p>Function</p>
                  </li>
                  <li>
                    <CheckIcon /> <p>Function</p>
                  </li>
                  <li>
                    <CheckIcon /> <p>Function</p>
                  </li>
                </ul>
                <a className='option-button' href=''>
                  More Info
                </a>
              </div>
              <div className='option'>
                <h4 className='option-name'>Unlimited Plan</h4>
                <p className='option-description'>Here goes some description</p>
                <p className='option-price'>
                  <span>$10</span> monthly
                </p>
                <ul>
                  <li>
                    <CheckIcon /> <p>Function</p>
                  </li>
                  <li>
                    <CheckIcon /> <p>Function</p>
                  </li>
                  <li>
                    <CheckIcon /> <p>Function</p>
                  </li>
                </ul>
                <a className='option-button' href=''>
                  More Info
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  )
}

export default PriceContent
