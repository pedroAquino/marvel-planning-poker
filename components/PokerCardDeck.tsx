import { Flex, FlexProps } from "@chakra-ui/layout";
import PokerCard from "./PokerCard";

function PokerCardDeck({ ...props }: FlexProps) {
  return (
    <Flex {...props} justifyContent="space-between">
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

export default PokerCardDeck;
