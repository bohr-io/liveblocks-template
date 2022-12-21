import { createClient } from '@liveblocks/client';
import { createRoomContext } from '@liveblocks/react';


const LIVEBLOCKS_PUBLIC_KEY = 'pk_prod_nfa0o7G6qHhA9He-_CTp0kMG1cGKzt6NRqtfgr7WVzFrujNivTAT-L1ShJgB6X0r';

const client = createClient({
  publicApiKey: LIVEBLOCKS_PUBLIC_KEY,
});

export const {
  RoomProvider,
  useOthers,
  useUpdateMyPresence,
  useStorage,
  useMutation,
} = createRoomContext(client);
