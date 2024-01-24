import { NewsItemInterface } from "../interface/interface.ts";

export const NewsItem = (props: NewsItemInterface) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <a href={props.href}>
        <span>{props.icon}</span> <span>{props.name}</span>
      </a>
    </div>
  );
};
