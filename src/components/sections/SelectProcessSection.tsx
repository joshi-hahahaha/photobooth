import { motion, Variants } from "motion/react";
import React from "react";

type Props = {
  cardVariants: Variants;
  nextStep: () => void;
  prevStep: () => void;
};

const SelectProcessSection = ({ cardVariants, nextStep, prevStep }: Props) => {
  return (
    <motion.div
      key="section3"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={cardVariants}
      transition={{ duration: 0.5 }}
      className="w-[40%] min-w-[400px] bg-white rounded-2xl flex flex-col justify-between"
    >
      <div className="w-full h-20 flex justify-center items-center text-4xl text-black">
        {`Choose Your Process`}
      </div>
      <div className="w-full h-full flex justify-evenly flex-wrap">
        Information
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

export default SelectProcessSection;
