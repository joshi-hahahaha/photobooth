import { ButtonBarProps, FrameType, FrameTypeObject } from "@/types";
import { motion, Variants } from "motion/react";
import Image from "next/image";
import React from "react";
import ButtonBar from "../ButtonBar";
import HeaderBar from "../HeaderBar";

type Props = ButtonBarProps & {
  cardVariants: Variants;
  frameType: FrameType;
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
 * 5. 4 Vertical
 * 6. 4 Horizontal
 */
const SelectFrameSection = ({
  cardVariants,
  nextStep,
  prevStep,
  frameType,
  setFrameType,
  setUsedPhotoAmt,
  setTotalPhotoAmt,
  section,
  setSection,
  lastSection,
}: Props) => {
  const frameTypes: Array<FrameTypeObject> = [
    { type: "3V", usedPhotoAmt: 3, totalPhotoAmt: 4 },
    { type: "3H", usedPhotoAmt: 3, totalPhotoAmt: 4 },
    { type: "6V", usedPhotoAmt: 6, totalPhotoAmt: 7 },
    { type: "6H", usedPhotoAmt: 6, totalPhotoAmt: 7 },
    { type: "4V", usedPhotoAmt: 4, totalPhotoAmt: 5 },
    { type: "4H", usedPhotoAmt: 4, totalPhotoAmt: 5 },
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
      className="w-[40%] min-w-96 bg-pastelWhite bg-opacity-70 rounded-2xl flex flex-col justify-between"
    >
      <HeaderBar text={"Choose Your Frame"} />
      <div className="w-full flex justify-evenly flex-wrap">
        {frameTypes.map((frameTypeObj: FrameTypeObject) => (
          <button
            key={frameTypeObj.type}
            className={`w-[30%] aspect-square bg-pastelBlue my-1 flex justify-center items-center text-2xl text-black rounded-2xl hover:bg-pastelBlue/80 transition ${
              frameType === frameTypeObj.type ? "border-4 border-black" : ""
            }`}
            onClick={() => {
              handleclick(
                frameTypeObj.type,
                frameTypeObj.usedPhotoAmt,
                frameTypeObj.totalPhotoAmt
              );
              setFrameType(frameTypeObj.type);
            }}
          >
            <Image
              src={`/frames/${frameTypeObj.type}.svg`}
              alt={frameTypeObj.type}
              width={256}
              height={256}
            />
          </button>
        ))}
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

export default SelectFrameSection;
