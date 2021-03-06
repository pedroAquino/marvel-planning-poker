import { Button as CButton, ButtonProps as CButtonProps } from '@chakra-ui/react';

export interface ButtonProps extends CButtonProps {
  children: React.ReactNode;
}

function Button({ children, ...rest }: ButtonProps) {
  return <CButton colorScheme="blue" size="md" {...rest} >{children}</CButton>;
};

export default Button;
