import { ReactElement } from "react";

export const News = ({
  children,
}: {
  children: ReactElement[] | ReactElement;
}) => {
  return <div className="flex flex-col items-start">{children}</div>;
};
