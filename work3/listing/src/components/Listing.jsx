import { Items } from './Items';

export const Listing = ({ dataCustoms }) => {
  return (
    <div className="item-list">
      {dataCustoms.map((dataCustom, index) => (
        <Items dataCustom={dataCustom} key={index} />
      ))}
    </div>
  );
};
