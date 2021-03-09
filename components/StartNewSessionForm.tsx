import { Stack, Input } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';
import Button from './Button';

interface JoinSessionFormProps {
  onStartSession: MouseEventHandler<HTMLButtonElement>;
}

export default function StartNewSession({ onStartSession }: JoinSessionFormProps) {
  return (
    <Stack spacing={3} mt="4" >
      <Input placeholder="Name" />
      <Button onClick={onStartSession} size="sm">Start session</Button>
    </Stack>
  );
}
