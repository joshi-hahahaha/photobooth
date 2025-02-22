"use client";

// import HeaderBar from "@/components/HeaderBar";
import { useEffect, useState } from "react";
import { AnimatePresence, Variants } from "framer-motion";
import StartSection from "@/components/sections/StartSection";
import SelectFrameSection from "@/components/sections/SelectFrameSection";
import { FrameType, Process } from "@/types";
import SelectProcessSection from "@/components/sections/SelectProcessSection";

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
 * 1 = Starting + Information Section ✅
 * 2 = Frame Selection ✅
 * 3 = Choose Process Section
 * 4 = Photo Taking Section
 * 5 = Photo Review Section
 * 6 = Frame Colour & Design Section
 * 7 = Preview & Download Section
 */
export default function Home() {
  //---------------------------------------------States----------------------------------------------
  const [section, setSection] = useState<number>(1);
  const [frameType, setFrameType] = useState<FrameType | null>(null);
  const [process, setProcess] = useState<Process | null>(null);

  //--------------------------------------------Temporary--------------------------------------------
  useEffect(() => {
    console.log(frameType);
  }, [frameType]);

  useEffect(() => {
    console.log(process);
  }, [process]);

  //--------------------------------------------Functions--------------------------------------------
  const nextStep = () => {
    setSection(section + 1);
  };

  const prevStep = () => {
    setSection(section - 1);
  };

  //---------------------------------------------Return----------------------------------------------
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  //---------------------------------------------Return----------------------------------------------
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-pastelBabyBlue">
      <AnimatePresence mode="wait">
        {section === 1 && (
          <StartSection cardVariants={cardVariants} nextStep={nextStep} />
        )}
        {section === 2 && (
          <SelectFrameSection
            cardVariants={cardVariants}
            nextStep={nextStep}
            prevStep={prevStep}
            setFrameType={setFrameType}
          />
        )}
        {section === 3 && (
          <SelectProcessSection
            cardVariants={cardVariants}
            nextStep={nextStep}
            prevStep={prevStep}
            setProcess={setProcess}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
