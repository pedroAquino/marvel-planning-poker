import { Box, Flex, FlexProps } from "@chakra-ui/layout";
import { PokerCard, PokerCardProps } from './PokerCard';

interface PokerCardListProps extends FlexProps {
  cards: Array<PokerCardProps>;
}

function PokerCardList({cards, ...props}: PokerCardListProps) {
  return (
    <Flex {...props} flexWrap="wrap" justifyContent="space-between">
      {cards.map((card, index) => (
        <Box key={index} mb={["2", "2", "2"]} >
          <PokerCard {...card} />
        </Box>
      ))}
    </Flex>
  );
}

export default PokerCardList;
