import styled from 'styled-components'

export const Styles = styled.div`
  /* height: 100vh; */
  background-color: #ab0139;
  .content {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    .slider-wrapper {
      width: 100%;
      height: 400px;
      .mySwiper {
        width: 100%;
        height: 100%;
        position: relative;

        .img-slider {
          width: 100%;
        }
      }
      .new-swiper-button-prev {
        position: absolute;
        top: 50%;
        right: 100%;
        width: 50px;
        height: 50px;
        transform: translateX(50%);
        box-sizing: border-box;
        border: 2px solid white;
        z-index: 9;
        outline: none;
        background: transparent;
        cursor: pointer;
        svg {
          width: 24px;
          height: 24px;

          path {
            stroke: white;
            fill: white;
          }
        }
        &:hover {
          background: white;
          svg {
            path {
              stroke: black;
              fill: black;
            }
          }
        }
      }
      .new-swiper-button-next {
        position: absolute;
        top: 50%;
        left: 100%;
        width: 50px;
        height: 50px;
        transform: translateX(-50%);
        box-sizing: border-box;
        border: 2px solid white;
        z-index: 9;
        outline: none;
        background: transparent;
        cursor: pointer;

        svg {
          width: 24px;
          height: 24px;
          path {
            stroke: white;
            fill: white;
          }
        }
        &:hover {
          background: white;
          svg {
            path {
              stroke: black;
              fill: black;
            }
          }
        }
      }
    }
    .bmi {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 239px;
      transform: translateY(50%);
      background: #2b2024;
      display: flex;
      align-items: center;
      gap: 80px;
      h4 {
        color: white;
        padding-left: 60px;
        font-family: 'Agency';
        font-size: 48px;
        b {
          display: inline-block;
          font-size: 20px;
          padding-bottom: 8px;
          position: relative;
          color: #fd0054;
          transform: translate(10px, -8px);
          &:after {
            position: absolute;
            content: '';
            bottom: 0;
            left: 0;
            width: 60px;
            height: 1px;
            background-color: #fd0054;
          }
        }
      }
      .form {
        .group-radio {
          display: flex;
          gap: 12px;
          align-items: center;
          label {
            color: white;
            font-family: 'Agency';
            text-transform: uppercase;
            font-size: 14px;
          }
        }
        .group-input {
          margin-top: 10px;
          display: flex;
          gap: 14px;
          .item {
            display: flex;
            gap: 10px;
            flex-direction: column;
            label {
              display: inline-block;
              color: white;
              font-family: 'Agency-Bold';
              font-size: 15px;
              text-transform: uppercase;
            }
          }
        }
      }
      .shadow {
        position: absolute;
        bottom: -80px;
        left: 50%;
        transform: translateX(-50%);

        width: 90%;
        height: 35px;
        display: block;
      }
    }
  }
`
