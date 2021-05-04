import { TriggerEventResponse } from '../real-time/realTimeProvider';

export interface Event<T> {
  trigger: () => Promise<TriggerEventResponse>;
};