import { useCallback, useState } from 'react';

import './List.css';

import ListItem from './ListItem';
import NewItem from './NewItem';

const DEFAULT_ITEMS = [
  { id: 'id-a', text: 'Apple' },
  { id: 'id-b', text: 'Banana' },
  { id: 'id-o', text: 'Orange' }
];

const List = () => {
  const [items, setItems] = useState(DEFAULT_ITEMS);

  const handleAdd = useCallback(
    ({ value }) => setItems(items => [...items, { id: `id-${Date.now()}`, text: value }]),
    [setItems]
  );

  const handleRemove = useCallback(({ id }) => setItems(items => items.filter(item => item.id !== id)), [setItems]);

  return (
    <div className="list">
      <ul>
        {items.map(({ id, text }) => (
          <ListItem className="list__item" id={id} key={id} onRemove={handleRemove}>
            {text}
          </ListItem>
        ))}
      </ul>
      <NewItem onAdd={handleAdd} />
    </div>
  );
};

export default List;
