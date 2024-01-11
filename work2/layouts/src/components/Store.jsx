import { useState } from 'react';
import IconSwitch from './IconSwitch.jsx';
import { CardsView } from './CardsView.jsx';
import { ListView } from './ListView.jsx';

export const Store = ({ products }) => {
  const [state, setState] = useState('view_module');
  return (
    <div>
      <IconSwitch
        icon={state}
        onSwitch={() => (state === 'view_list' ? setState('view_module') : setState('view_list'))}
      />
      {state === 'view_list' ? <ListView lists={products} /> : <CardsView cards={products} />}
    </div>
  );
};
