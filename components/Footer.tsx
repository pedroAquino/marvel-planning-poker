import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Box, BoxProps, Center } from '@chakra-ui/react';

export default function Footer({ ...props }: BoxProps) {
  return (
    <Box {...props} as="footer">
      <Center>
        <a target="_blank" href="https://github.com/pedroAquino/marvel-planning-poker">
          <FontAwesomeIcon size="3x" icon={faGithub} />
        </a>
      </Center>
    </Box>
  );
}