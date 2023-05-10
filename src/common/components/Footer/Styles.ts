import styled from 'styled-components'
export const Styles = styled.div`
  background-color: #2b2024;

  .content {
    .content-top {
      padding: 60px 0 60px 0;
      display: flex;
      justify-content: space-between;
      gap: 160px;
      .content-top__left {
        .content-top__left-title {
          display: flex;
          gap: 18px;
          svg {
            width: 70px;
            height: 40px;
          }
          h3 {
            color: #fd0054;
            font-size: 30px;
            font-family: 'Agency-Bold';
          }
        }
        .content-top__left-description {
          margin-top: 24px;
          color: rgba(255, 255, 255, 0.8);
          font-family: 'Agency-Bold';
          max-width: 300px;
        }
      }
      .content-top__right {
        flex: 1;
        display: flex;
        justify-content: space-between;
        .content-top__right-routes {
          display: flex;
          gap: 120px;
          .routes {
            h4 {
              color: #fd0054;
              font-family: 'Agency-Bold';
              text-transform: uppercase;
              font-size: 28px;
            }
            ul {
              margin-top: 42px;
              display: flex;
              flex-direction: column;
              gap: 16px;
              li {
                list-style: none;
                a {
                  text-decoration: none;
                  color: rgba(255, 255, 255, 0.82);
                  font-size: 18px;
                  font-family: 'Agency-Bold';
                  text-transform: uppercase;
                  display: block;
                  width: fit-content;
                  position: relative;
                  &:after {
                    position: absolute;
                    opacity: 0;
                    content: '';
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 110%;
                    height: 1px;
                    background-color: #fd0054;
                  }
                  &:hover {
                    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.8);
                    &:after {
                      opacity: 1;
                    }
                  }
                }
              }
            }
          }
        }
        .content-top__right-form {
          h4 {
            color: #fd0054;
            font-family: 'Agency-Bold';
            text-transform: uppercase;
            font-size: 28px;
            margin-bottom: 20px;
          }
          .more-article {
            position: relative;
            width: fit-content;
            margin-top: 20px;
            padding: 12px 24px;
            border: 2px solid #fd0054;
            cursor: pointer;
            position: relative;
            box-sizing: border-box;
            overflow: hidden;
            transition: 0.1s linear;
            background-color: #fd0054;

            a {
              display: block;
              position: relative;
              color: white;
              font-family: 'Agency-Bold';
              text-transform: uppercase;
              text-decoration: none;
              z-index: 2;
              box-sizing: border-box;
            }
            &:after {
              position: absolute;
              content: '';
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: white;
              transform: translateX(-100%);
              transition: 0.1s linear;
              z-index: 1;
            }
            &:hover {
              a {
                color: #fd0054;
              }
              &:after {
                transform: translateX(0);
              }
            }
          }
        }
      }
    }
    .content-bottom {
    }
  }
`
