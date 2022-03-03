import { useCallback, useState } from 'react';

import './NewItem.css';

const NewItem = ({ onAdd }) => {
  const [newItem, setNewItem] = useState('');

  const handleChange = useCallback(({ target: { value } }) => setNewItem(value), [setNewItem]);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      onAdd?.({ value: newItem });
      setNewItem('');
    },
    [onAdd, newItem]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" value={newItem} />
    </form>
  );
};

export default NewItem;
