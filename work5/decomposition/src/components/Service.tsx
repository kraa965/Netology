import { ReactElement } from "react";

export const Service = ({
  title,
  children,
}: {
  title: string;
  children: ReactElement | ReactElement[];
}) => {
  return (
    <div>
      <h4 className={"text-blue-400"}>{title}</h4>
      <div>{children}</div>
    </div>
  );
};
