import React from 'react'
import { Styles } from './Styles'
import { STitle } from '../Styles'
import BgTitle from '@/assets/images/bg-title.svg'
function TimeTableContent() {
  return (
    <Styles>
      <div className='container'>
        <div className='wrapper'>
          <div className='content'>
            <STitle>
              Time Table <BgTitle />
            </STitle>
            <h3>PROFESSIONAL WEEKLY SCHEDULE</h3>
            <table>
              {/* <thead> */}
              <thead>
                <tr>
                  <th></th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                  <th>Sunday</th>
                </tr>
              </thead>
              {/* </thead> */}
              {/* <tbody></tbody> */}
              <tbody>
                <tr>
                  <th>Jam</th>
                  <td>
                    <div className='content'>
                      <p className='class-name'>CrossFit</p>
                      <p className='teacher'>Tomas Jane</p>
                    </div>
                  </td>
                  <td></td>
                  <td>
                    {' '}
                    <div className='content'>
                      <p className='class-name'>CrossFit</p>
                      <p className='teacher'>Tomas Jane</p>
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <div className='content'>
                      <p className='class-name'>CrossFit</p>
                      <p className='teacher'>Tomas Jane</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>Dam</th>
                  <td></td>
                  <td>
                    <div className='content'>
                      <p className='class-name'>CrossFit</p>
                      <p className='teacher'>Tomas Jane</p>
                    </div>
                  </td>
                  <td> </td>
                  <td></td>
                  <td></td>
                  <td>
                    <div className='content'>
                      <p className='class-name'>CrossFit</p>
                      <p className='teacher'>Tomas Jane</p>
                    </div>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <th>Jpm</th>
                  <td>
                    <div className='content'>
                      <p className='class-name'>CrossFit</p>
                      <p className='teacher'>Tomas Jane</p>
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <div className='content'>
                      <p className='class-name'>CrossFit</p>
                      <p className='teacher'>Tomas Jane</p>
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th>Jtm</th>
                  <td></td>
                  <td>
                    {' '}
                    <div className='content'>
                      <p className='class-name'>CrossFit</p>
                      <p className='teacher'>Tomas Jane</p>
                    </div>
                  </td>
                  <td> </td>
                  <td>
                    {' '}
                    <div className='content'>
                      <p className='class-name'>CrossFit</p>
                      <p className='teacher'>Tomas Jane</p>
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th>Jdm</th>
                  <td>
                    <div className='content'>
                      <p className='class-name'>CrossFit</p>
                      <p className='teacher'>Tomas Jane</p>
                    </div>
                  </td>
                  <td></td>
                  <td>
                    {' '}
                    <div className='content'>
                      <p className='class-name'>CrossFit</p>
                      <p className='teacher'>Tomas Jane</p>
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <div className='content'>
                      <p className='class-name'>CrossFit</p>
                      <p className='teacher'>Tomas Jane</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Styles>
  )
}

export default TimeTableContent
