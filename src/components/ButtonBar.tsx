import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {
  section: number;
  nextStep: () => void;
  prevStep: () => void;
  setSection: (section: number) => void;
  lastSection: number;
};

const ButtonBar = ({
  section,
  nextStep,
  prevStep,
  setSection,
  lastSection,
}: Props) => {
  const handleLastSectionBtn = () => {
    setSection(1);
  };

  return (
    <>
      {section === 1 && (
        <div className="w-full h-20 px-8 flex justify-center space-x-6 items-center text-4xl text-black mt-4 bg-pastelWhite bg-opacity-70 rounded-b-2xl">
          <button onClick={nextStep}>
            <div>Get Started</div>
          </button>
        </div>
      )}

      {section !== 1 && section !== lastSection && (
        <div className="w-full h-20 px-8 flex justify-between space-x-6 items-center text-4xl text-black mt-4 bg-pastelWhite bg-opacity-70 rounded-b-2xl">
          <button onClick={prevStep}>
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              style={{ color: "#292929" }}
            />
          </button>
          <button onClick={nextStep}>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              style={{ color: "#292929" }}
            />
          </button>
        </div>
      )}

      {section === lastSection && (
        <div className="w-full h-20 px-8 flex justify-center space-x-6 items-center text-4xl text-black mt-4 bg-pastelWhite bg-opacity-70 rounded-b-2xl">
          <button onClick={handleLastSectionBtn}>
            <div>Restart</div>
          </button>
        </div>
      )}
    </>
  );
};

export default ButtonBar;
