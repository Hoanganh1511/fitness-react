import styled from 'styled-components'

export const Styles = styled.div`
  /* padding: 60px 0; */
  position: relative;
  padding: 0 120px;
  width: 100%;

  /* height: 2px; */
  box-sizing: border-box;
  .content {
    padding: 50px 80px;
    background-color: #2b2024;
    display: flex;
    gap: 80px;
    position: relative;
    top: 90px;
    .left {
      > h3 {
        margin: 20px auto;
        display: block;
        width: fit-content;
        font-family: 'Agency-Bold';
        font-size: 28px;
        color: white;
      }
    }
    .right {
      display: flex;
      flex: 1;
      align-items: end;
      justify-content: space-between;
      .reviewers {
        display: flex;
        flex-direction: column;
        gap: 18px;
        .reviewer-title {
          display: flex;
          gap: 18px;
          .reviewer-avatar {
            width: 64px;
            height: 64px;
            overflow: hidden;
            border: 2px solid #fd0054;
            img {
              width: 100%;
            }
          }
          .reviewer-info {
            display: flex;
            flex-direction: column;
            gap: 6px;
            p {
              font-family: 'Agency-Bold';
              font-size: 24px;
              text-transform: uppercase;
              color: #fd0054;
            }
            .rates {
              display: flex;
              gap: 4px;
            }
          }
        }
        .reviewer-description {
          color: rgba(255, 255, 255, 0.5);
          display: block;
          max-width: 650px;
        }
      }
      .group-button {
        display: flex;
        gap: 20px;
        position: relative;
        svg {
          width: 28px;
          height: 28px;
          cursor: pointer;
        }
        p {
          position: absolute;
          top: -24px;
          left: 50%;
          color: #fd0054;
          font-family: 'Agency-Bold';
          font-size: 18px;
          transform: translateX(-50%);
        }
      }
    }
  }
`
