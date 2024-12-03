import { FC, PropsWithChildren } from "react";

export const PageWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className="page"
      style={{ backgroundColor: "#282c34", color: "white" }}
    >
      {children}
    </div>
  );
};
