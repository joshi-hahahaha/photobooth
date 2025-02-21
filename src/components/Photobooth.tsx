"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Webcam from "react-webcam";

const PhotoBooth = () => {
  const webcamRef = useRef<Webcam>(null);
  const [image, setImage] = useState<string | null>(null);

  const capturePhoto = () => {
    const screenshot = webcamRef.current?.getScreenshot();
    if (screenshot) {
      setImage(screenshot);
    }
  };

  return (
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
          <Image src={image} alt="Captured" className="rounded-lg" />
          <button
            onClick={() => setImage(null)}
            className="mt-4 p-2 bg-red-500 text-white rounded"
          >
            Retake
          </button>
        </>
      )}
    </div>
  );
};

export default PhotoBooth;
