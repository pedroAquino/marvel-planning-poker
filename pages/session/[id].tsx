import { Box, Center, Flex, Heading } from '@chakra-ui/layout';
import { useRouter } from 'next/router';
import withLayout from '../../hocs/withLayout';
import Logo from '../../components/Logo';
import PokerCard from '../../components/PokerCard';
import Button from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

function SessionsPageHeader() {
  return (
    <Center>
      <Logo size="md" />
    </Center>
  );
}

function PokerCardTable({ mt }) {
  return (
    <Flex mt={mt} justifyContent="space-between">
      <PokerCard
        title="Hulk"
        bottomTitle="13"
        imgSrc="/images/hulk.jpeg"
        size="sm"
        playerName="John"
        variant="back"
      />
      <PokerCard
        title="Hulk"
        bottomTitle="13"
        imgSrc="/images/hulk.jpeg"
        size="sm"
        playerName="Jannie"
        variant="back"
      />
      <PokerCard
        title="Hulk"
        bottomTitle="13"
        imgSrc="/images/hulk.jpeg"
        size="sm"
        playerName="Marc"
        variant="empty"
      />
      <PokerCard
        title="Hulk"
        bottomTitle="13"
        imgSrc="/images/hulk.jpeg"
        size="sm"
        playerName="Paul"
        variant="back"
      />
      <PokerCard
        title="Hulk"
        bottomTitle="13"
        imgSrc="/images/hulk.jpeg"
        size="sm"
        playerName="Jorge"
        variant="back"
      />
      <PokerCard
        title="Hulk"
        bottomTitle="13"
        imgSrc="/images/hulk.jpeg"
        size="sm"
        playerName="Marc"
        variant="empty"
      />
      <PokerCard
        title="Hulk"
        bottomTitle="13"
        imgSrc="/images/hulk.jpeg"
        size="sm"
        playerName="Jorge"
        variant="back"
      />
    </Flex>
  );
}

function ActionsPanel({ mt }) {
  return (
    <Center mt={mt} >
      <Button leftIcon={<FontAwesomeIcon icon={faEye} />} variant="outline" size="lg">SHOW CARDS</Button>
    </Center>
  );
}

function PokerCardDeck({ mt }) {
  return (
    <Flex mt={mt} justifyContent="space-between">
      <PokerCard  
        title="Hulk"
        bottomTitle="1"
        imgSrc="/images/hulk.jpeg"
        size="sm"
      />
      <PokerCard  
        title="Hulk"
        bottomTitle="2"
        imgSrc="/images/hulk.jpeg"
        size="sm"
      />
      <PokerCard  
        title="Hulk"
        bottomTitle="3"
        imgSrc="/images/hulk.jpeg"
        size="sm"
      />
      <PokerCard  
        title="Hulk"
        bottomTitle="5"
        imgSrc="/images/hulk.jpeg"
        size="sm"
      />
      <PokerCard  
        title="Hulk"
        bottomTitle="8"
        imgSrc="/images/hulk.jpeg"
        size="sm"
      />
      <PokerCard  
        title="Hulk"
        bottomTitle="13"
        imgSrc="/images/hulk.jpeg"
        size="sm"
      />
    </Flex>
  );
}

function Session() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Box p="8" >
      <SessionsPageHeader />
      <PokerCardTable mt="12" />
      <ActionsPanel mt="20" />
      <PokerCardDeck mt="20" />
    </Box>
  );
}

export default withLayout(Session);
