import styled from 'styled-components'
interface ITitle {
  mode?: 'white' | 'red'
}
export const STitle = styled.h4<ITitle>`
  display: block;
  color: ${(props) => (props.mode === 'white' ? '#fd0054' : 'white')};
  font-family: 'Agency-Bold';
  text-transform: uppercase;
  font-size: 24px;
  width: fit-content;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  /* &:after {
    position: absolute;
    content: '';
    top: 50%;
    right: calc(100% + 12px);
    width: 40px;
    height: 2px;
    background-color: #fd0054;
  } */
  svg {
    width: 200px;
    height: 34px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    path {
      fill: ${(props) => (props.mode === 'white' ? 'white' : '#fd0054')};
    }
  }
`
