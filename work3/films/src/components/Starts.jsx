import { Star } from './Star';

export const Starts = ({ count }) => {
  if (typeof count !== 'number' || isNaN(count) || count < 1 || count > 5) {
    return null;
  }
  return (
    <ul className="card-body-stars u-clearfix">
      {Array(count)
        .fill()
        .map((count, index) => (
          <li key={index}>
            <Star />
          </li>
        ))}
    </ul>
  );
};
