import { ButtonBarProps, Process } from "@/types";
import { motion, Variants } from "motion/react";
import React from "react";
import ButtonBar from "../ButtonBar";
import HeaderBar from "../HeaderBar";

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
      className="w-[40%] min-w-96 bg-pastelWhite bg-opacity-70 rounded-2xl flex flex-col justify-between"
    >
      <HeaderBar text={"Choose Your Process"} />
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
