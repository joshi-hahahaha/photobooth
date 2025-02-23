import { ButtonBarProps, Process } from "@/types";
import { motion, Variants } from "motion/react";
import React from "react";
import ButtonBar from "../ButtonBar";
import HeaderBar from "../HeaderBar";

type Props = ButtonBarProps & {
  cardVariants: Variants;
  process: Process;
  setProcess: (process: Process) => void;
  countdown: number;
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
  process,
  countdown,
}: Props) => {
  const handleSelection = (process: Process, countdown: number) => {
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
      <div className="w-full h-full flex flex-col space-y-4">
        <div
          className={`w-full p-4 rounded-lg cursor-pointer ${
            process === "countdown" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleSelection("countdown", countdown)}
        >
          Countdown
          {process === "countdown" && (
            <div className="mt-2">
              <input
                type="range"
                min="1"
                max="10"
                value={countdown}
                onChange={(e) => setCountdown(Number(e.target.value))}
                className="w-full"
              />
              <input
                type="number"
                min="1"
                max="10"
                value={countdown}
                onChange={(e) => setCountdown(Number(e.target.value))}
                className="w-full mt-2 p-2 border rounded"
              />
            </div>
          )}
        </div>
        <div
          className={`w-full p-4 rounded-lg cursor-pointer ${
            process === "as-you-go" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleSelection("as-you-go", 0)}
        >
          As You Go
        </div>
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
