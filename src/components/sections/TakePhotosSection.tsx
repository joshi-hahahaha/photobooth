import { motion, Variants } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import ButtonBar from "../ButtonBar";
import { ButtonBarProps, FrameType, Process } from "@/types";
import HeaderBar from "../HeaderBar";
import Image from "next/image";
import { Button } from "@mui/material";

type Props = ButtonBarProps & {
  cardVariants: Variants;
  takenPhotos: Array<string>;
  setTakenPhotos: (takenPhotos: Array<string>) => void;
  countdown: number | null;
  totalPhotoAmt: number;
  frameType: FrameType;
  process: Process;
};

const TakePhotosSection = ({
  cardVariants,
  nextStep,
  prevStep,
  takenPhotos,
  setTakenPhotos,
  countdown,
  totalPhotoAmt,
  section,
  setSection,
  frameType,
  process,
}: Props) => {
  const webcamRef = useRef<Webcam>(null);
  const [image, setImage] = useState<string | null>(null);
  const [isReady, setIsReady] = useState<boolean>(false);

  const capturePhoto = () => {
    const screenshot = webcamRef.current?.getScreenshot();
    if (screenshot) {
      setImage(screenshot);
      const prev = [...takenPhotos];
      setTakenPhotos([...prev, screenshot]);
    }
  };

  const handleStartSessionBtn = () => {
    setIsReady(true);
  };

  useEffect(() => {
    if (isReady) {
      if (countdown !== null && totalPhotoAmt > 0) {
        let photoCount = 0;
        const interval = setInterval(() => {
          if (photoCount < totalPhotoAmt) {
            capturePhoto();
            photoCount++;
          } else {
            clearInterval(interval);
          }
        }, countdown * 1000);

        return () => clearInterval(interval);
      }
    }
  }, [countdown, totalPhotoAmt, isReady]);

  return (
    <motion.div
      key="section3"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={cardVariants}
      transition={{ duration: 0.5 }}
      className="w-[40%] min-w-96 max-h-[90vh] bg-pastelWhite bg-opacity-70 rounded-2xl flex flex-col justify-between"
    >
      <HeaderBar text={"😁 Smile!"} />
      {!isReady && (
        <div className="w-full px-8">
          <div className="w-full bg-pastelWhite rounded-2xl p-4">
            <div className="flex items-center justify-center mb-2">
              {process === "countdown" && (
                <>
                  <div className="mr-2">{`${countdown}s Countdown,`}</div>
                  <div className="mr-2">{`${totalPhotoAmt} Attempts,`}</div>
                </>
              )}
              <Image
                src={`/frames/${frameType}.svg`}
                alt={frameType}
                width={48}
                height={48}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-pastelBlue text-white p-2 rounded-lg hover:bg-pastelDarkBlue active:bg-pastelDarkBlue transition-all duration-100 ease-in"
                onClick={handleStartSessionBtn}
              >
                Start Session!
              </button>
            </div>
          </div>
        </div>
      )}
      {isReady && (
        <div className="w-full h-full flex justify-evenly flex-wrap">
          <div className="flex flex-col items-center">
            {!image ? (
              <>
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/png"
                  className="rounded-lg"
                  style={{ transform: "scaleX(-1)" }}
                />
                <button
                  onClick={capturePhoto}
                  className="mt-4 p-2 bg-blue-500 text-white rounded"
                >
                  Capture Photo
                </button>
              </>
            ) : (
              <>
                <Image
                  src={image}
                  alt="Captured"
                  className="rounded-lg"
                  width={256}
                  height={256}
                />
                <button
                  onClick={() => setImage(null)}
                  className="mt-4 p-2 bg-red-500 text-white rounded"
                >
                  Retake
                </button>
              </>
            )}
          </div>
          <div className="w-full h-full flex justify-evenly flex-wrap">
            {takenPhotos.map((photo, index) => (
              <Image
                key={index}
                src={photo}
                alt={`Taken photo ${index + 1}`}
                width={128}
                height={128}
                className="w-32 h-32 object-cover"
              />
            ))}
          </div>
        </div>
      )}
      <ButtonBar
        section={section}
        nextStep={nextStep}
        prevStep={prevStep}
        setSection={setSection}
      />
    </motion.div>
  );
};

export default TakePhotosSection;
