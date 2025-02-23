export type FrameType = "3V" | "3H" | "6V" | "6H" | "4V" | "4H";

export type FrameTypeObject = {
  type: FrameType;
  usedPhotoAmt: number;
  totalPhotoAmt: number;
};

export type Process = "countdown" | "as-you-go";

export type Options = {
  frameType: FrameType;
  usedPhotoAmt: number;
  totalPhotoAmt: number;
  process: Process;
  countdown?: number;
};

export type ButtonBarProps = {
  section: number;
  nextStep: () => void;
  prevStep: () => void;
  setSection: (section: number) => void;
};
