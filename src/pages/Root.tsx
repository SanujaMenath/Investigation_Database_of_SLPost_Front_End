import { Outlet } from "react-router-dom";
import Headercontent from "../components/Header/Headercontent";

const Root = () => {
  return (
    <div className="h-screen flex flex-col">
      <Headercontent />
      <div className="grow">
      <Outlet />
      </div>
    </div>
  );
};

export default Root;
