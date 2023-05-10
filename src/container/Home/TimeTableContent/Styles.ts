import styled from 'styled-components'

export const Styles = styled.div`
  padding: 60px 0 120px 0;
  h3 {
    margin: 20px auto;
    display: block;
    width: fit-content;
    font-family: 'Agency-Bold';
    font-size: 32px;
  }
  table {
    margin: 0 auto;
    border-collapse: collapse;
    thead {
      th {
        padding: 30px 40px;
        background-color: #e2e2e2;
        font-size: 16px;
        letter-spacing: 1px;
        font-family: 'Agency-Bold';
        text-transform: uppercase;
        border: 1px solid rgba(0, 0, 0, 0.12);
      }
    }
    tbody {
      tr {
        th,
        td {
          border: 1px solid rgba(0, 0, 0, 0.12);
        }
        th {
          padding: 30px 40px;
          background-color: #f3f1f1;
          font-size: 16px;
          letter-spacing: 1px;
          font-family: 'Agency-Bold';
          text-transform: uppercase;
        }
        td {
          .content {
            .class-name {
              text-align: center;
              color: #fd0054;
              font-family: 'Agency-Bold';
              font-size: 18px;
              text-transform: uppercase;
              margin-bottom: 4px;
            }
            .teacher {
              text-align: center;
              color: #2b2024;
              font-family: 'Agency';
              font-size: 14px;
              text-transform: uppercase;
              margin-bottom: 4px;
            }
          }
        }
      }
    }
  }
`
