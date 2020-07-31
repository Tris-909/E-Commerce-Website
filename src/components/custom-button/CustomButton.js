import React from 'react';
import { CustomButtonContainer } from './CustomButtonStyled';

const CustomButton = ({ children, isGoogleSignIn, inverted,...otherProps }) => (
  <CustomButtonContainer  {...otherProps}>
    {children}
  </CustomButtonContainer>
);

export default CustomButton;