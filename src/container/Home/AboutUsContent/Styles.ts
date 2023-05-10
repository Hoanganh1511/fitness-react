import styled from 'styled-components'

export const Styles = styled.div`
  padding: 60px 0;
  .content {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    .left-content {
      padding: 60px 80px;
      background-color: #2b2024;
      max-width: 740px;
      height: fit-content;

      > h3 {
        color: #fff;
        font-size: 32px;
        font-family: 'Agency-Bold';
        margin: 20px 0;
        display: block;
        width: fit-content;
        position: relative;
        text-transform: uppercase;

        &:after {
          position: absolute;
          content: '';
          top: 70%;
          left: calc(100% + 20px);
          width: 60px;
          height: 1px;
          background-color: #fd0054;
        }
      }
      > p {
        color: rgba(255, 255, 255, 0.6);
      }
      .classes {
        display: flex;
        margin-top: 50px;
        gap: 80px;
        .class {
          .class-title {
            display: flex;
            align-items: center;
            gap: 14px;
            padding-bottom: 15px;
            border-bottom: 1px solid #fd0054;
            .class-title__icon {
              svg {
                width: 38px;
                height: 38px;
              }
            }
            .class-title__text {
              > h4 {
                color: white;
                font-family: 'Agency-Bold';
                font-size: 17px;
                text-transform: uppercase;
                margin-bottom: 6px;
              }
              > h3 {
                color: white;
                font-family: 'Agency-Bold';
                font-size: 25px;
                letter-spacing: 2px;
                text-transform: uppercase;
                /* margin-bottom: 6px; */
              }
            }
          }
          .class-description {
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            gap: 20px;
            .class-description__text {
              font-size: 18px;
              color: rgba(255, 255, 255, 0.3);
              font-family: 'Agency';
            }
            button {
              outline: none;
              border: none;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 60px;
              height: 60px;
              color: white;
              font-family: 'Agency';
              font-size: 18px;
              text-transform: uppercase;
              background-color: #fd0054;
              &:hover {
                cursor: pointer;
                filter: brightness(1.1);
              }
            }
          }
        }
      }
    }
    .right-content {
      position: relative;
      flex: 1;
      .bg-content {
        height: 100%;
        /* background-color: #fd0054; */
        .after {
          height: 100%;
          position: relative;
          svg {
            width: 200px;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            path {
              height: 100%;
            }
          }
        }
        .bg-running {
          width: 400px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 0;
        }
      }
      .practice-title {
        position: absolute;
        right: 0;
        bottom: 80px;
        background: #fd0054;
        width: 340px;
        height: 146px;
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        padding-left: 40px;
        box-sizing: border-box;
        box-shadow: 12px 8px 10px rgba(0, 0, 0, 0.3);
        .practice-title__text {
          color: white;
          font-family: 'Agency-Bold';
          font-size: 28px;
        }
        .practice-title__link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-decoration: none;
          gap: 30px;
          font-size: 17px;
          text-transform: uppercase;
          margin-top: 8px;
          font-family: 'Agency-Bold';
          color: black;

          svg {
            width: 28px;
            height: 28px;
          }
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`
