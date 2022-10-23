import React from "react";
// react icons
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";

export const dataSidebar = [
  {
    title: "Moisturizer",
    path: "/",
    icon: <RiIcons.RiInkBottleFill />,
    cName: "nav-text",
  },

  {
    title: "Toner",
    path: "/about",
    icon: <FaIcons.FaWineBottle />,
    cName: "nav-text",
  },

  {
    title: "Sunscreen",
    path: "/about",
    icon: <BsIcons.BsSun />,
    cName: "nav-text",
  },
];
