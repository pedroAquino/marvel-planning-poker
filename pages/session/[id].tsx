import { useRouter } from 'next/router';

function Session() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <h2>Session: {id}</h2>
  );
}

export default Session;
