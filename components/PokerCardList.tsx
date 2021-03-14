import { Flex, FlexProps } from "@chakra-ui/layout";
import { PokerCard, PokerCardProps } from './PokerCard';

interface PokerCardListProps extends FlexProps {
  cards: Array<PokerCardProps>;
}

function PokerCardList({cards, ...props}: PokerCardListProps) {
  return (
    <Flex {...props} justifyContent="space-between">
      {cards.map((card) => <PokerCard {...card} />)}
    </Flex>
  );
}

export default PokerCardList;
