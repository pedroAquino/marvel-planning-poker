import { Box } from '@chakra-ui/layout';
import { useRouter } from 'next/router';
import { PokerCardProps } from '../../components/PokerCard';
import SessionsPageActionsPanel from '../../components/SessionsPageActionsPanel';
import SessionsPageHeader from '../../components/SessionsPageHeader';
import withLayout from '../../hocs/withLayout';
import PokerCardList from '../../components/PokerCardList';

const cardsOnTable: PokerCardProps[] = [
  {
    title: "Hulk",
    bottomTitle: "13",
    imgSrc: "/images/hulk.jpeg",
    size: "sm",
    playerName: "John",
    variant: "back",
  },
  {
    title: "Hulk",
    bottomTitle: "13",
    imgSrc: "/images/hulk.jpeg",
    size: "sm",
    playerName: "John",
    variant: "back",
  },
  {
    title: "Hulk",
    bottomTitle: "13",
    imgSrc: "/images/hulk.jpeg",
    size: "sm",
    playerName: "John",
    variant: "empty",
  },
  {
    title: "Hulk",
    bottomTitle: "13",
    imgSrc: "/images/hulk.jpeg",
    size: "sm",
    playerName: "John",
    variant: "back",
  },
  {
    title: "Hulk",
    bottomTitle: "13",
    imgSrc: "/images/hulk.jpeg",
    size: "sm",
    playerName: "John",
    variant: "back",
  },
  {
    title: "Hulk",
    bottomTitle: "13",
    imgSrc: "/images/hulk.jpeg",
    size: "sm",
    playerName: "John",
    variant: "back",
  }
]; 

const cardsOnDeck: PokerCardProps[] = [
  {
    title: "Hulk",
    bottomTitle: "1",
    imgSrc: "/images/hulk.jpeg",
    size: "sm",
  },
  {
    title: "Hulk",
    bottomTitle: "2",
    imgSrc: "/images/hulk.jpeg",
    size: "sm",
  },
  {
    title: "Hulk",
    bottomTitle: "3",
    imgSrc: "/images/hulk.jpeg",
    size: "sm",
  },
  {
    title: "Hulk",
    bottomTitle: "5",
    imgSrc: "/images/hulk.jpeg",
    size: "sm",
  },
  {
    title: "Hulk",
    bottomTitle: "8",
    imgSrc: "/images/hulk.jpeg",
    size: "sm",
  },
  {
    title: "Hulk",
    bottomTitle: "13",
    imgSrc: "/images/hulk.jpeg",
    size: "sm",
  }
];

function Session() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Box p="8" >
      <SessionsPageHeader />
      <PokerCardList mt="12" cards={cardsOnTable} />
      <SessionsPageActionsPanel mt="20" />
      <PokerCardList mt="12" cards={cardsOnDeck} />
    </Box>
  );
}

export default withLayout(Session);
