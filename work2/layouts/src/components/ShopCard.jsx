export const ShopCard = ({card}) => {
  return (

  <div className={'flex flex-col py-6 px-9'}>
        <div className={'border text-center flex flex-col justify-center items-center p-4 shadow-xl w-full bg-[#f5f5f5] rounded-xl'}>
          <h1 className={'text-3xl font-bold'}>{card.name}</h1>
          <p>{card.color}</p>
          <img src={card.img} alt={card.img} className={'w-[250px]'}/>
          <div className={'text-red-600 flex items-center justify-around w-full'}>
            <p>${card.price}</p>
            <button className={'border border-red-600 rounded-full p-2'}>ADD TO CART</button>
          </div>
        </div>
    </div>
  );
};
