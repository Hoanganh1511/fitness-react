import React from 'react'
import { styled } from 'styled-components'

function Input({ ...rest }: { placeholder: string }) {
  return (
    <SInput>
      <input type='text' {...rest} />
    </SInput>
  )
}

export default Input
const SInput = styled.div`
  input {
    display: block;
    border: none;
    outline: none;
    background-color: #707070;
    width: 100%;
    padding: 8px 0 8px 10px;
    font-size: 14px;
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.8);
    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }
  }
`
