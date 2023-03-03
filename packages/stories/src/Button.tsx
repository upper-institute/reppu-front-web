import React from 'react'
import styled, { css } from 'styled-components'

export interface ButtonProps {
  variant: 'primary' | 'secondary'
  size: 'small' | 'medium' | 'large'
  label: string
  backgroundColor: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const getVariantStyles = ({ variant }: ButtonProps) =>
  variant == 'primary'
    ? css`
        color: white;
        background-color: #1ea7fd;
      `
    : css`
        color: #333;
        background-color: transparent;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
      `;

const getSizeStyles = ({ size }: ButtonProps) => {
  switch (size) {
    case 'small': {
      return css`
        font-size: 12px;
        padding: 10px 16px;
      `;
    }
    case 'large': {
      return css`
        font-size: 16px;
        padding: 12px 24px;
      `;
    }
    default: {
      return css`
        font-size: 14px;
        padding: 11px 20px;
      `;
    }
  }
};

const StyledButton = styled.button<ButtonProps>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 1em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${(props) => getVariantStyles(props)}
  ${(props) => getSizeStyles(props)}
  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}
`

export const Button = ({ variant, backgroundColor, size, label, ...props }: ButtonProps) => {

  return (
    <StyledButton
      type='button'
      variant={variant}
      backgroundColor={backgroundColor}
      size={size}
      label={label}
      {...props}
    >
      {label}
    </StyledButton>
  )

}

Button.defaultProps = {
  backgroundColor: '#000',
  variant: 'primary',
  size: 'medium',
  onClick: undefined,
}