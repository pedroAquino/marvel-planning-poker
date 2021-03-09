import { Stack, Input } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';
import Button from './Button';

interface JoinSessionFormProps {
  onJoinSession: MouseEventHandler<HTMLButtonElement>;
}

export default function JoinSessionForm({ onJoinSession }: JoinSessionFormProps) {
  return (
    <Stack spacing={3} mt="4" >
      <Input placeholder="Session ID or Url" />
      <Input placeholder="Name" />
      <Button onClick={onJoinSession} size="sm">Join now</Button>
    </Stack>
  );
}
