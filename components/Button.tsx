import { Button as CButton, ButtonProps as CButtonProps } from '@chakra-ui/react';

export interface ButtonProps extends CButtonProps {
  children: React.ReactNode;
}

function Button({ children }: ButtonProps) {
  return <CButton>{children}</CButton>;
};

export default Button;
