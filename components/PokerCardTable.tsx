import { Flex, FlexProps } from "@chakra-ui/layout";
import PokerCard from "./PokerCard";

function PokerCardTable({ ...props }: FlexProps) {
  return (
    <Flex {...props} justifyContent="space-between">
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

export default PokerCardTable;
