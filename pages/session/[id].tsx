import { useRouter } from 'next/router';
import withLayout from '../../hocs/withLayout';

function Session() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <h2>Session: {id}</h2>
  );
}

export default withLayout(Session);
