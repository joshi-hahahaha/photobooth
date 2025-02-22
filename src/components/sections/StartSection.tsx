import { motion, Variants } from "motion/react";
import React from "react";

type Props = {
  cardVariants: Variants;
  nextStep: () => void;
};

const StartSection = ({ cardVariants, nextStep }: Props) => {
  return (
    <motion.div
      key="section1"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={cardVariants}
      transition={{ duration: 0.5 }}
      className="w-[40%] min-w-96 h-[70%] bg-white rounded-2xl flex flex-col justify-between"
    >
      <div className="w-full h-20 flex justify-center items-center text-4xl text-black">
        {`Welcome to Joshi's Photobooth`}
      </div>
      <div className="w-full h-20 flex justify-center items-center text-2xl text-black">
        <div>{`TODO: Information Section`}</div>
      </div>
      <button
        className="w-full h-20 flex justify-center items-center text-2xl text-black bg-pastelPink rounded-b-2xl hover:bg-pastelPink/80 transition"
        onClick={nextStep}
      >
        <div>{`Get Started`}</div>
      </button>
    </motion.div>
  );
};

export default StartSection;
