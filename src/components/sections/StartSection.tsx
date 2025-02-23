import { motion, Variants } from "motion/react";
import React from "react";
import HeaderBar from "../HeaderBar";
import ButtonBar from "../ButtonBar";
import { ButtonBarProps } from "@/types";

type Props = ButtonBarProps & {
  cardVariants: Variants;
};

const StartSection = ({
  cardVariants,
  nextStep,
  prevStep,
  section,
  setSection,
  lastSection,
}: Props) => {
  return (
    <motion.div
      key="section1"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={cardVariants}
      transition={{ duration: 0.5 }}
      className="w-[40%] min-w-96 h-[70%] bg-pastelWhite bg-opacity-70 rounded-2xl flex flex-col justify-between drop-shadow-lg"
    >
      <HeaderBar text="Joshi's Photobooth" />
      <div className="w-full h-20 flex justify-center items-center text-2xl text-black">
        <div>{`TODO: Information Section`}</div>
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

export default StartSection;
