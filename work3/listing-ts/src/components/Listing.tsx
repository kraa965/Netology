import { Items } from './Items.tsx';
import { dataCustomType } from '../types/dataCustomType.ts';

export const Listing = ({ dataCustoms }: dataCustomType) => {
  return (
    <div className="item-list">
      {dataCustoms.map((dataCustom, index) => (
        <Items dataCustom={dataCustom} key={index} />
      ))}
    </div>
  );
};
