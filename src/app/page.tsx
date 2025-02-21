"use client";

import HeaderBar from "@/components/HeaderBar";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-pastelBabyBlue p-48">
      <HeaderBar />
      <div className="w-full h-full bg-pastelWhite flex justify-center flex-wrap rounded-xl">
        <div className="w-[28%] aspect-square bg-pastelPink m-2 rounded-lg"></div>
        <div className="w-[28%] aspect-square bg-pastelPink m-2 rounded-lg"></div>
        <div className="w-[28%] aspect-square bg-pastelPink m-2 rounded-lg"></div>
        <div className="w-[28%] aspect-square bg-pastelPink m-2 rounded-lg"></div>
        <div className="w-[28%] aspect-square bg-pastelPink m-2 rounded-lg"></div>
        <div className="w-[28%] aspect-square bg-pastelPink m-2 rounded-lg"></div>
      </div>
    </div>
  );
}
