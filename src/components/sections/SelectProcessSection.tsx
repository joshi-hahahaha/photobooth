import { ButtonBarProps, Process } from "@/types";
import { motion, Variants } from "motion/react";
import React from "react";
import ButtonBar from "../ButtonBar";

type Props = ButtonBarProps & {
  cardVariants: Variants;
  setProcess: (process: Process) => void;
  setCountdown: (countdown: number) => void;
};

const SelectProcessSection = ({
  cardVariants,
  nextStep,
  prevStep,
  setProcess,
  setCountdown,
  section,
  setSection,
  lastSection,
}: Props) => {
  const handleClick = (process: Process, countdown: number) => {
    setProcess(process);
    setCountdown(countdown);
  };

  return (
    <motion.div
      key="section3"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={cardVariants}
      transition={{ duration: 0.5 }}
      className="w-[40%] min-w-96 bg-white rounded-2xl flex flex-col justify-between"
    >
      <div className="w-full h-20 flex justify-center items-center text-4xl text-black">
        {`Choose Your Process`}
      </div>
      <div className="w-full h-full flex justify-evenly flex-wrap">
        Turn into checkboxes
        <button onClick={() => handleClick("countdown", 5)}>Countdown</button>
        <button onClick={() => handleClick("as-you-go", 0)}>As You Go</button>
      </div>
      <ButtonBar
        section={section}
        nextStep={nextStep}
        prevStep={prevStep}
        setSection={setSection}
        lastSection={lastSection}
      />
    </motion.div>
  );
};

export default SelectProcessSection;
