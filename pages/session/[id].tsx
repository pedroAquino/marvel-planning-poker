import { Box } from '@chakra-ui/layout';
import { useRouter } from 'next/router';
import PokerCardDeck from '../../components/PokerCardDeck';
import PokerCardTable from '../../components/PokerCardTable';
import SessionsPageActionsPanel from '../../components/SessionsPageActionsPanel';
import SessionsPageHeader from '../../components/SessionsPageHeader';
import withLayout from '../../hocs/withLayout';

function Session() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Box p="8" >
      <SessionsPageHeader />
      <PokerCardTable mt="12" />
      <SessionsPageActionsPanel mt="20" />
      <PokerCardDeck mt="20" />
    </Box>
  );
}

export default withLayout(Session);
