import { Star } from './Star.js';
import { CountType } from '../types/CountType.ts';

export const Starts = ({ count }: CountType) => {
  if (typeof count !== 'number' || isNaN(count) || count < 1 || count > 5) {
    return null;
  }
  return (
    <ul className="card-body-stars u-clearfix">
      {Array(count)
        .fill()
        .map((count, index) => (
          <Star key={index} />
        ))}
    </ul>
  );
};
