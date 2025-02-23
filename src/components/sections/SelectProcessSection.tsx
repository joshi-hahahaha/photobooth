import { ButtonBarProps, Process } from "@/types";
import { motion, Variants } from "motion/react";
import React from "react";
import ButtonBar from "../ButtonBar";
import HeaderBar from "../HeaderBar";
import Slider from "@mui/material/Slider";
import { TextField } from "@mui/material";

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

  const sliderText = (value: number) => {
    return `${value}s`;
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
      <div className="w-full h-full flex flex-col space-y-4 px-4">
        <div
          className={`w-full p-4 rounded-lg cursor-pointer text-white ${
            process === "countdown"
              ? "bg-pastelBlue "
              : "bg-pastelRed bg-opacity-50"
          }`}
          onClick={() => handleSelection("countdown", countdown)}
        >
          <div className="text-2xl">Countdown</div>
          {process === "countdown" && (
            <div className="mt-2">
              <Slider
                aria-label="Countdown"
                getAriaValueText={sliderText}
                valueLabelDisplay="off"
                step={1}
                marks
                min={1}
                max={10}
                value={countdown ?? 1}
                onChange={(_, value) => setCountdown(value as number)}
                sx={{
                  color: "white",
                  "& .MuiSlider-thumb": {
                    color: "white",
                  },
                  "& .MuiSlider-track": {
                    color: "white",
                  },
                  "& .MuiSlider-rail": {
                    color: "white",
                  },
                }}
              />
              <TextField
                type="number"
                value={countdown}
                onChange={(e) => setCountdown(Number(e.target.value))}
                className="w-full mt-2"
                variant="outlined"
                slotProps={{
                  input: {
                    style: {
                      color: "white",
                      borderColor: "white",
                    },
                  },
                  inputLabel: {
                    style: {
                      color: "white",
                    },
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
              />
            </div>
          )}
        </div>
        <div
          className={`w-full p-4 rounded-lg cursor-pointer text-white ${
            process === "as-you-go"
              ? "bg-pastelBlue "
              : "bg-pastelRed bg-opacity-50"
          }`}
          onClick={() => handleSelection("as-you-go", 0)}
        >
          <div className="text-2xl">As You Go</div>
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
