import styled from 'styled-components'

export const Styles = styled.div`
  padding: 60px 0;
  .content {
    > h3 {
      font-family: 'Agency-Bold';
      text-transform: uppercase;
      font-size: 32px;
      text-align: center;
      margin: 20px 0;
    }
    > p {
      font-family: 'Agency-Bold';
      text-transform: uppercase;
      font-size: 14px;
      text-align: center;
      color: rgba(0, 0, 0, 0.4);
      display: block;
      max-width: 400px;
      margin: 0 auto;
    }
    .slider-wrapper {
      margin-top: 40px;
      .mySwiper {
        .swiper-slide {
          opacity: 0.6;
          transition: 0.2s linear;
          transform: scale(0.9);
          &.swiper-slide-prev,
          &.swiper-slide-next {
            opacity: 0.6;
          }

          &.swiper-slide-active {
            opacity: 1;
          }
        }
        .coach {
          height: 470px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: end;
          padding: 40px 24px;
          h4 {
            font-family: 'Agency-Bold';
            text-transform: uppercase;
            font-size: 23px;
            text-align: center;
            color: rgba(255, 255, 255, 0.8);
          }
          p {
            font-family: 'Agency-Bold';
            text-transform: uppercase;
            font-size: 14px;
            margin-top: 20px;
            color: rgba(255, 255, 255, 0.6);
          }
          .coach-img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: auto;
            display: block;
            z-index: -1;
          }
        }
      }
    }
    .measure-list {
      margin: 0 auto;
      display: flex;
      width: fit-content;
      gap: 54px;
      margin-top: 60px;
      .measure-list__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
          font-size: 28px;
          font-family: 'Agency-Bold';
          margin-top: 8px;
        }
        svg {
          width: 42px;
          height: 42px;
        }
      }
    }
  }
`
