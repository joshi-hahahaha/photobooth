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
        <button
          className="w-full h-20 px-8 flex justify-center space-x-6 items-center text-4xl mt-4 text-black hover:text-white active:text-white hover:bg-pastelRed bg-pastelWhite active:bg-pastelRed transition duration-300 rounded-b-2xl"
          onClick={nextStep}
        >
          <div>Get Started</div>
        </button>
      )}

      {section !== 1 && section !== lastSection && (
        <div className="w-full h-20 px-8 flex justify-between space-x-6 items-center text-4xl text-black mt-4 bg-pastelWhite bg-opacity-70 rounded-b-2xl transition duration-300">
          <button onClick={prevStep}>
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="hover:text-pastelRed text-gray-700 active:text-pastelRed transition duration-300"
            />
          </button>
          <button onClick={nextStep}>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="hover:text-pastelRed text-gray-700 active:text-pastelRed transition duration-300"
            />
          </button>
        </div>
      )}
      {section === lastSection && (
        <button
          className="w-full h-20 px-8 flex justify-center space-x-6 items-center text-4xl mt-4 text-white hover:bg-pastelRed bg-gray-700 active:bg-pastelRed transition duration-300 rounded-b-2xl"
          onClick={handleLastSectionBtn}
        >
          <div>Restart</div>
        </button>
      )}
    </>
  );
};

export default ButtonBar;
