import { useCallback } from 'react';
import classNames from 'classnames';

import './ListItem.css';

const ListItem = ({ children, className, id, onRemove }) => {
  const handleClick = useCallback(() => onRemove?.({ id }), [id, onRemove]);

  return (
    <li className={classNames('list-item', className)}>
      {children}
      <button className="list-item__remove-button" onClick={handleClick} type="button">
        &times;
      </button>
    </li>
  );
};

export default ListItem;
