import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Box, BoxProps, Center } from '@chakra-ui/react';

export default function Footer({ ...props }: BoxProps) {
  return (
    <Box {...props} as="footer">
      <Center>
        <FontAwesomeIcon size="3x" icon={faGithub} />
      </Center>
    </Box>
  );
}