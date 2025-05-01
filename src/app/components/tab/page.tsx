"use client";
import { useState } from "react";
import { motion } from "motion/react";
export default function Page() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [{ name: "Home" }, { name: "About" }, { name: "Contact" }];
  return (
    <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-6 text-neutral-500">
        Tab component
      </h1>
      <div className="w-full max-w-md px-4">
        <div className="relative w-full flex items-center justify-between rounded-full bg-white text-black p-1 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className="relative z-10 w-1/3 py-3 text-center focus:outline-none font-semibold"
            >
              {tab.name}
            </button>
          ))}
          <motion.div
            className="absolute top-1 left-1 bottom-1 rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-lime-300 w-[calc(100%/3-3px)]"
            initial={false}
            animate={{
              x: `calc(${activeTab} * 100%)`,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          />
        </div>
      </div>
    </div>
  );
}
