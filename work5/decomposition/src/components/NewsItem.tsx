import { NewsItemInterface } from "../interface/interface.ts";

export const NewsItem = (props: NewsItemInterface) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <a href={props.href} className={"flex mb-2 items-center"}>
        <span>{props.icon}</span>
        <span className={"ml-1"}>{props.name}</span>
      </a>
    </div>
  );
};
