import styled from 'styled-components'

export const Styles = styled.div`
  padding: 260px 0 60px 0;
  .content {
    h3 {
      font-family: 'Agency-Bold';
      text-transform: uppercase;
      font-size: 32px;
      text-align: center;
      margin: 20px 0;
    }
    .class-grids {
      display: grid;
      /* width: 100%; */
      grid-template-columns: repeat(4, 1fr);
      gap: 36px;
      .class {
        position: relative;
        height: 400px;
        cursor: pointer;
        transition: 0.2s linear;
        .class-bg {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          z-index: -1;
        }
        .class-text {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          background-color: rgba(0, 0, 0, 0.45);
          padding: 0 26px;

          .class-text__title {
            position: relative;
            flex: 1;
            display: flex;
            align-items: end;
            overflow: hidden;
            .description {
              /* position: absolute; */
              transition: 0.4s linear;
              color: rgba(255, 255, 255, 0.6);
              font-family: 'Agency';
              font-size: 16px;
              position: absolute;
              top: 20px;
              left: 0;
              height: auto;
              transform: translateX(-300px);
            }
            h5 {
              font-family: 'Agency-Bold';
              font-size: 20px;
              color: white;
              text-transform: uppercase;
            }
          }
          .class-text__more-info {
            width: 100%;
            height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 15px;
            border-top: 1px solid white;
            a {
              color: white;
              text-decoration: none;
              text-transform: uppercase;
              font-family: 'Agency';
              font-size: 18px;
              display: flex;
              justify-content: space-between;
              width: 100%;
              svg {
                width: 28px;
                height: 28px;
                path {
                  stroke: white;
                }
              }
            }
          }
        }
        &:hover {
          transform: scale(1.01);
          box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
          .class-text {
            .class-text__title {
              .description {
                transform: translateX(0);
              }
            }
            .class-text__more-info {
              a {
                text-shadow: 1px 1px 16px #fff;
              }
            }
          }
        }
      }
    }
  }
`
