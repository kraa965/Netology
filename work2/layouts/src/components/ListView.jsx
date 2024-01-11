import { ShopItem } from './ShopItem.jsx';

export const ListView = ({ lists }) => {
  return (
    <div className={'flex flex-col mx-auto w-[80%]'}>
      {lists.map((list, index) => (
        <ShopItem key={index} list={list} />
      ))}
    </div>
  );
};
