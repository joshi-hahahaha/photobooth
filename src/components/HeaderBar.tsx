import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";

type Props = {
  text: string;
};

const HeaderBar = ({ text }: Props) => {
  return (
    <div className="w-full h-20 px-8 flex space-x-6 items-center text-4xl text-black mb-4 bg-pastelWhite bg-opacity-70 rounded-t-2xl">
      <FontAwesomeIcon icon={faCameraRetro} style={{ color: "#292929" }} />
      <div>{text}</div>
    </div>
  );
};

export default HeaderBar;
