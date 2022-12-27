import React from "react";
import { Outlet } from "react-router-dom";
import LeftSide from "../Shared/LeftSide/LeftSide";
import RightSide from "../Shared/RightSide/RightSide";
import Navbar from "../Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-12 px-4 py-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mx-auto">
        <div className="col-span-3">
          <LeftSide></LeftSide>
        </div>
        <div className="col-span-7">
          <Outlet></Outlet>
        </div>
        <div className="col-span-2">
          <RightSide></RightSide>
        </div>
      </div>
    </div>
  );
};

export default Main;
