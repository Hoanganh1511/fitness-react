import styled from 'styled-components'

export const Styles = styled.div`
  /* position: fixed;
  top: 0; */
  position: absolute;
  top: 0;
  z-index: 99;
  width: 100%;
  .contact-social-content {
    background-color: rgba(0, 0, 0, 0.4);
    padding: 12px 110px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .contact {
      ul {
        display: flex;
        align-items: center;
        gap: 60px;
        li {
          list-style: none;
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Agency';
          color: white;
          p {
            color: rgba(255, 255, 255, 0.52);
            font-size: 20px;
            b {
              color: white;
            }
          }
        }
      }
    }
    .social {
      ul {
        display: flex;
        gap: 14px;
        li {
          list-style: none;
          a {
            font-size: 18px;
            display: flex;
            align-items: center;
            svg {
              path {
              }
            }
          }
        }
      }
    }
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    .left {
      background-color: #fd0054;
      padding: 0 20px;
      height: 100%;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      svg {
        width: 30px;
        height: 30px;
      }
      p {
        color: white;
        font-family: 'Agency';
        font-size: 24px;
      }
    }
    nav {
      background-color: #2b2024;
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      ul {
        display: flex;
        align-items: center;
        gap: 85px;
        /* width: 100%; */
        li {
          list-style: none;
          a {
            color: white;
            font-family: 'Agency-Bold';
            text-decoration: none;
            font-size: 20px;
            position: relative;
            text-transform: uppercase;

            &:after {
              position: absolute;
              content: '';
              opacity: 0;
              /* display: none; */
              bottom: -3px;
              left: 50%;
              transform: translateX(-50%);
              width: 0;
              height: 2px;
              border-radius: 2px;
              background-color: white;
              transition: 0.1s linear;
            }
            &:hover {
              &:after {
                opacity: 1;
                width: 80%;
              }
            }
          }
        }
      }
    }
    .right {
      background-color: #fd0054;
      padding: 0 20px;
      height: 100%;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      p {
        color: white;
        font-family: 'Agency';
        font-size: 24px;
      }
    }
  }
`
