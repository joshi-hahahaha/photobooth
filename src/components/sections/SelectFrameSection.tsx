import { FrameType, FrameTypeObject } from "@/types";
import { motion, Variants } from "motion/react";
import React from "react";

type Props = {
  cardVariants: Variants;
  nextStep: () => void;
  prevStep: () => void;
  setFrameType: (frameType: FrameType) => void;
  setUsedPhotoAmt: (usedPhotoAmt: number) => void;
  setTotalPhotoAmt: (totalPhotoAmt: number) => void;
};

/**
 * FRAME TYPES:
 * 1. 3 Vertical
 * 2. 3 Horizontal
 * 3. 6 Horizontal
 * 4. 6 Vertical
 * 5. 4 Square
 */
const SelectFrameSection = ({
  cardVariants,
  nextStep,
  prevStep,
  setFrameType,
  setUsedPhotoAmt,
  setTotalPhotoAmt,
}: Props) => {
  const frameTypes: Array<FrameTypeObject> = [
    { type: "3V", usedPhotoAmt: 3, totalPhotoAmt: 4 },
    { type: "3H", usedPhotoAmt: 3, totalPhotoAmt: 4 },
    { type: "6H", usedPhotoAmt: 6, totalPhotoAmt: 7 },
    { type: "6V", usedPhotoAmt: 6, totalPhotoAmt: 7 },
    { type: "4S", usedPhotoAmt: 4, totalPhotoAmt: 5 },
  ];

  const handleclick = (
    type: FrameType,
    usedPhotoAmt: number,
    totalPhotoAmt: number
  ) => {
    setFrameType(type);
    setUsedPhotoAmt(usedPhotoAmt);
    setTotalPhotoAmt(totalPhotoAmt);
  };

  return (
    <motion.div
      key="section2"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={cardVariants}
      transition={{ duration: 0.5 }}
      className="w-[40%] min-w-96 h-[90%] bg-white rounded-2xl flex flex-col justify-between"
    >
      <div className="w-full h-20 flex justify-center items-center text-4xl text-black">
        {`Choose Your Frame`}
      </div>
      <div className="w-full h-full flex justify-evenly flex-wrap">
        {frameTypes.map((frameTypeObj: FrameTypeObject) => (
          <button
            key={frameTypeObj.type}
            className="w-[45%] aspect-square bg-pastelBlue my-1 flex justify-center items-center text-2xl text-black rounded-2xl hover:bg-pastelBlue/80 transition"
            onClick={() =>
              handleclick(
                frameTypeObj.type,
                frameTypeObj.usedPhotoAmt,
                frameTypeObj.totalPhotoAmt
              )
            }
          >
            {frameTypeObj.type}
          </button>
        ))}
      </div>
      <div className="flex">
        <button
          className="w-1/2 h-20 flex justify-center items-center text-2xl text-black bg-gray-300 rounded-bl-2xl hover:bg-gray-400 transition"
          onClick={prevStep}
        >
          Back
        </button>
        <button
          className="w-1/2 h-20 flex justify-center items-center text-2xl text-black bg-pastelPink rounded-br-2xl hover:bg-pastelPink/80 transition"
          onClick={nextStep}
        >
          Next
        </button>
      </div>
    </motion.div>
  );
};

export default SelectFrameSection;
