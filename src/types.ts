export type FrameType = "3V" | "3H" | "6H" | "6V" | "4S";

export type Process = "countdown" | "as-you-go";

export type Options = {
  frameType: FrameType;
  usedPhotoAmt: number;
  totalPhotoAmt: number;
  process: Process;
  countdown?: number;
};
