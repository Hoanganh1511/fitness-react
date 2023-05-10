import styled from 'styled-components'

export const Styles = styled.div`
  padding: 60px 0;
  background-color: #f4f4f4;
  .content {
    .title {
      display: flex;
      justify-content: space-between;
      margin: 20px 0;

      h3 {
        color: black;
        font-family: 'Agency-Bold';
        font-size: 32px;
      }
      .more-article {
        position: relative;
        width: fit-content;
        padding: 12px 24px;
        border: 2px solid #fd0054;
        cursor: pointer;
        position: relative;
        box-sizing: border-box;
        overflow: hidden;
        transition: 0.1s linear;

        a {
          display: block;
          position: relative;
          color: #fd0054;
          font-family: 'Agency-Bold';
          text-transform: uppercase;
          text-decoration: none;
          z-index: 2;
        }
        &:after {
          position: absolute;
          content: '';
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #fd0054;
          transform: translateX(-100%);
          transition: 0.1s linear;
          z-index: 1;
        }
        &:hover {
          a {
            color: white;
          }
          &:after {
            transform: translateX(0);
          }
        }
      }
    }
    .article-list {
      display: flex;
      margin-top: 60px;
      gap: 50px;
      .article-list__card {
        width: 100%;
        /* height: 400px; */
        .card-img-top {
          width: 100%;
          height: auto;
          display: block;
        }
        .card-body {
          background-color: white;
          padding: 14px 20px 20px 20px;
          h4 {
            color: black;
            font-family: 'Agency-Bold';
            font-size: 25px;
          }
          > p {
            margin-top: 10px;
            color: #909090;
            font-family: 'Agency-Bold';

            font-size: 16px;
          }
          .more-info {
            margin-top: 36px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            p {
              color: #909090;
              font-size: 14px;
              font-family: 'Agency';
              letter-spacing: 1px;
            }
            a {
              text-decoration: none;
              display: flex;
              align-items: center;
              gap: 8px;
              font-family: 'Agency-Bold';
              text-transform: uppercase;
              color: #fd0054;
              svg {
                width: 24px;
                height: 24px;
                path {
                  stroke: #fd0054;
                }
              }
              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
  }
`
