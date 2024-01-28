import { ReactElement } from "react";

export const Services = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-9">{children}</div>
    </div>
  );
};
