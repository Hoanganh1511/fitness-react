import { Styles } from './Styles'
import { STitle } from '../Styles'
import BgTitle from '@/assets/images/bg-title.svg'
import RightIcon from '@/assets/icons/arrow-right-icon.svg'
import ArticleImage1 from '@/assets/images/article-1.avif'
import ArticleImage2 from '@/assets/images/article-2.avif'
import ArticleImage3 from '@/assets/images/article-3.avif'
function ArticleContent() {
  return (
    <Styles id='news'>
      <div className='container'>
        <div className='wrapper'>
          <div className='content'>
            <STitle>
              News & Articles
              <BgTitle />
            </STitle>
            <div className='title'>
              <h3>OUR RECENT ARTICLES</h3>
              <div className='more-article'>
                <a href=''>More articles</a>
              </div>
            </div>
            <div className='article-list'>
              <div className='article-list__card'>
                <img src={ArticleImage1} className='card-img-top' alt='' />
                <div className='card-body'>
                  <h4>HOW HIKING HELPS BODY!</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore …
                  </p>
                  <div className='more-info'>
                    <p className='more-info__date'>FEB 12, 2020</p>
                    <a href='' className='more-info__link'>
                      More info
                      <RightIcon />
                    </a>
                  </div>
                </div>
              </div>
              <div className='article-list__card'>
                <img src={ArticleImage2} className='card-img-top' alt='' />
                <div className='card-body'>
                  <h4>HOW HIKING HELPS BODY!</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore …
                  </p>
                  <div className='more-info'>
                    <p className='more-info__date'>FEB 12, 2020</p>
                    <a href='' className='more-info__link'>
                      More info
                      <RightIcon />
                    </a>
                  </div>
                </div>
              </div>
              <div className='article-list__card'>
                <img src={ArticleImage3} className='card-img-top' alt='' />
                <div className='card-body'>
                  <h4>HOW HIKING HELPS BODY!</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore …
                  </p>
                  <div className='more-info'>
                    <p className='more-info__date'>FEB 12, 2020</p>
                    <a href='' className='more-info__link'>
                      More info
                      <RightIcon />
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

export default ArticleContent
