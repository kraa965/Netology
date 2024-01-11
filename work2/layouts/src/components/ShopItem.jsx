export const ShopItem = ({ list }) => {
  return (
    <div className={'flex items-center justify-between py-6 px-9 bg-[#f5f5f5] rounded-xl w-full mt-1  h-fit'}>
      <img src={list.img} alt="" className={'w-[250px]'} />
      <h1 className={'text-3xl font-bold'}>{list.name}</h1>
      <p>{list.color}</p>
      <p>${list.price}</p>
      <button className={'border border-red-600 rounded-full p-2'}>ADD TO CART</button>
    </div>
  );
};
