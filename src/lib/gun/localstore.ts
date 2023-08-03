import { persisted } from 'svelte-local-storage-store';

export const name = persisted('name', '');
export const lastRoomName = persisted('lastRoom', '');
