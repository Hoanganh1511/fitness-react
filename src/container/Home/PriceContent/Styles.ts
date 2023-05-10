import styled from 'styled-components'

export const Styles = styled.div`
  height: 500px;
  background-color: #ab0139;
  padding: 150px 0 60px 0;
  h3 {
    margin: 20px auto;
    display: block;
    width: fit-content;
    font-family: 'Agency-Bold';
    font-size: 32px;
    color: white;
  }
  .options-price {
    display: flex;
    gap: 30px;
    justify-content: center;
    margin-top: 40px;
    .option {
      font-family: 'Agency';
      padding: 30px 60px;
      background-color: #2b2024;
      text-align: center;
      &.option-pro {
        background-color: #fd0054;
      }
      .option-name {
        color: white;
        font-size: 24px;
        text-transform: uppercase;
      }
      .option-description {
        color: rgba(255, 255, 255, 0.4);
        text-transform: uppercase;
        font-family: 'Agency-Bold';
        letter-spacing: 1px;
        margin: 8px 0 20px 0;
      }
      .option-price {
        font-size: 16px;
        color: white;
        font-family: 'Agency-Bold';
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          font-size: 58px;
          display: block;
          width: fit-content;
          line-height: 1.5;
          margin-right: 8px;
        }
      }
      ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 18px;
        gap: 12px;
        li {
          display: flex;
          gap: 6px;
          list-style: none;
          color: rgba(255, 255, 255, 0.8);
          font-family: 'Agency-Bold';
          text-transform: uppercase;
          font-size: 14px;
          letter-spacing: 1px;
          svg {
            path {
              stroke: rgba(255, 255, 255, 0.8);
            }
          }
        }
      }
      .option-button {
        text-decoration: none;
        padding: 10px 24px;
        text-transform: uppercase;
        font-size: 18px;
        color: rgba(255, 255, 255, 0.9);
        border: 2px solid white;
        box-sizing: border-box;
        margin-top: 34px;
        display: block;
        transition: 0.05s linear;
        &:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }
      }
    }
  }
`
