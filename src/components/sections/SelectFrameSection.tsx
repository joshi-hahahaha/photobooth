import { FrameType } from "@/types";
import { motion, Variants } from "motion/react";
import React from "react";

type Props = {
  cardVariants: Variants;
  nextStep: () => void;
  prevStep: () => void;
  setFrameType: (frameType: FrameType) => void;
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
}: Props) => {
  const frameTypes: Array<FrameType> = ["3V", "3H", "6H", "6V", "4S"];

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
        {frameTypes.map((frameType: FrameType) => (
          <button
            key={frameType}
            className="w-[45%] aspect-square bg-pastelBlue my-1 flex justify-center items-center text-2xl text-black rounded-2xl hover:bg-pastelBlue/80 transition"
            onClick={() => setFrameType(frameType)}
          >
            {frameType}
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
