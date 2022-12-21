import { useMutation, useOthers, useStorage, useUpdateMyPresence } from '../../liveblocks.config';
import Avatar from '../Avatar';
import Cursor from '../Cursor';
import styles from './styles.module.css';

export default function CounterPage() {
  const others = useOthers();
  const count = useStorage((root) => root.count);
  const updateMyPresence = useUpdateMyPresence();

  const updateCount = useMutation(({ storage }, changeValue) => {
    const mutableCount = storage.get('count');
    mutableCount.set('value', mutableCount.get('value') + changeValue)
  }, []);

  const decrement = () => updateCount(-1);
  const increment = () => updateCount(+1);

  const handlePointerMove = (e) => updateMyPresence({ cursor: { x: e.clientX, y: e.clientY } });
  const handlePointerLeave = () => updateMyPresence({ cursor: null });

  return(
    <main
      className={styles.page}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <h1>Collaborative Counter</h1>
      <div className={styles.card}>
        <button onClick={decrement}>
          -
        </button>
        <span className={styles.counterValue}>
          count is {count?.value ?? 0}
        </span>
        <button onClick={increment}>
          +
        </button>
      </div>
      <p>There are {others.length} other users counting with you:</p>
      <ul className={styles.avatars}>
        {others.map((other) => <Avatar key={other.connectionId} other={other} />)}
      </ul>

      <div className={styles.cursors}>
        {others.map((other) => other.presence.cursor && (
          <Cursor
            key={other.connectionId}
            x={other.presence.cursor.x}
            y={other.presence.cursor.y}
            colorSeed={other.connectionId}
          />
        ))}
      </div>
    </main>
  );
}
