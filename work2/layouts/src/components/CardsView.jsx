import { ShopCard } from './ShopCard.jsx';

export const CardsView = ({ cards }) => {
  return (
    <>
      <div className={'grid grid-cols-3 mx-auto gap-9 w-[85%]'}>
        {cards.map((card, index) => (
          <ShopCard key={index} card={card} />
        ))}
      </div>
    </>
  );
};
