import { FC, ReactNode } from "react";
import "./layout.scss";

interface ILayoutPage {
  children: ReactNode;
}

const Layout: FC<ILayoutPage> = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout__container">{children}</div>
    </div>
  );
};

export default Layout;
