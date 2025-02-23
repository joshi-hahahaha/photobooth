import { motion, Variants } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import ButtonBar from "../ButtonBar";
import { ButtonBarProps } from "@/types";

type Props = ButtonBarProps & {
  cardVariants: Variants;
  takenPhotos: Array<string>;
  setTakenPhotos: (takenPhotos: Array<string>) => void;
  countdown: number | null;
  totalPhotoAmt: number;
};

const TakePhotosSection = ({
  cardVariants,
  nextStep,
  prevStep,
  takenPhotos,
  setTakenPhotos,
  countdown = 3, // TODO: remove
  totalPhotoAmt,
  section,
  setSection,
  lastSection,
}: Props) => {
  const webcamRef = useRef<Webcam>(null);
  const [image, setImage] = useState<string | null>(null);

  const capturePhoto = () => {
    const screenshot = webcamRef.current?.getScreenshot();
    if (screenshot) {
      setImage(screenshot);
      const prev = [...takenPhotos];
      setTakenPhotos([...prev, screenshot]);
    }
  };

  useEffect(() => {
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
  }, [countdown, totalPhotoAmt]);

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
        {`Take Your Photos`}
      </div>
      <div className="w-full h-full flex justify-evenly flex-wrap">
        <div className="flex flex-col items-center">
          {!image ? (
            <>
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/png"
                className="rounded-lg"
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
              <img src={image} alt="Captured" className="rounded-lg" />
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
            <img
              key={index}
              src={photo}
              alt={`Taken photo ${index + 1}`}
              className="w-32 h-32 object-cover"
            />
          ))}
        </div>
      </div>
      <div className="flex">
        <ButtonBar
          section={section}
          nextStep={nextStep}
          prevStep={prevStep}
          setSection={setSection}
          lastSection={lastSection}
        />
      </div>
    </motion.div>
  );
};

export default TakePhotosSection;
