"use client";

// import HeaderBar from "@/components/HeaderBar";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Plan:
 * 1. Bring the user to the landing page
 * 2. Landing page will have a button that says Get Started
 * 3. Move to the photobooth sections
 * 4. Pick a photo frame shape
 * 4.a. The number of photos determined by the shape - e.g. if they pick one with 6 then they have 6
 * 5. Give option of speed photo taking
 * 5.a. ask for how many pictures they want, e.g. top 6 will be taken only
 * 5.b. inform them that there will be a 10 second countdown for each
 * 6. Give other option of being able to take the photos themselves
 * 6.a. This allows them to choose to retake the photo
 * 6.b. Sequentially take photos that they are okay until they reach their total
 * 7. Have the user take a photo
 * 8. Have the user go through and pick their photos
 * 9. Let them pick a frame colour for the photos
 * 10. Review the photo strip and ask if they want to download it
 */

/**
 * STEP = SECTION [Subject to change]
 * 1 = Starting + Information Section
 * 2 = Frame Selection
 * 3 = Choose Process Section
 * 4 = Photo Taking Section
 * 5 = Photo Review Section
 * 6 = Frame Colour & Design Section
 * 7 = Preview & Download Section
 */
export default function Home() {
  //---------------------------------------------States----------------------------------------------
  const [step, setStep] = useState(1);

  //--------------------------------------------Functions--------------------------------------------
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  //---------------------------------------------Return----------------------------------------------
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start offscreen (to the right)
    visible: { opacity: 1, y: 0 }, // Fade in and slide into view
    exit: { opacity: 0, y: -50 }, // Slide out to the left when exiting
  };

  //---------------------------------------------Return----------------------------------------------
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-pastelBabyBlue">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
            className="w-[40%] h-[70%] bg-white rounded-2xl flex flex-col justify-between"
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
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
            className="w-[40%] h-[70%] bg-white rounded-2xl flex flex-col justify-between"
          >
            <div className="w-full h-20 flex justify-center items-center text-4xl text-black">
              {`Choose Your Options`}
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <div>{`TODO: Options Section`}</div>
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
        )}
      </AnimatePresence>
    </div>
  );
}
