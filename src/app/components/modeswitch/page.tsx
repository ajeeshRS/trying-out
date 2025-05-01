"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Computer, Moon, Sun } from "lucide-react";

enum Modes {
  "DARK",
  "LIGHT",
  "SYSTEM",
}
export default function Page() {
  const [mode, setMode] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const tabs = [
    {
      name: Modes.DARK,
      icon: <Moon className={`w-4 h-4 ${mode === 0 && "text-white"}`} />,
    },
    { name: Modes.LIGHT, icon: <Sun className="w-4 h-4" /> },
    { name: Modes.SYSTEM, icon: <Computer className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    setIsDark(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <motion.div
      className={`w-screen h-screen flex flex-col items-center justify-center transition-colors duration-600 ease-in-out  ${
        mode === 0 || (mode === 2 && isDark) ? "bg-neutral-950" : "bg-white"
      }`}
    >
      <h1 className="text-2xl font-bold mb-6 text-neutral-500">
        Mode switch component
      </h1>
      <div className="w-[180px] max-w-md px-4 z-10">
        <div className="relative w-full flex items-center justify-between rounded-full bg-white text-black p-1 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setMode(index)}
              className={`relative z-10 w-1/3 py-3 text-center flex items-center justify-center focus:outline-none font-semibold`}
            >
              {tab.icon}
            </button>
          ))}
          <motion.div
            className={`absolute top-1 left-1 bottom-1 rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ${
              tabs[mode].name === Modes.DARK ? "bg-neutral-800" : "bg-lime-300"
            } w-[calc(100%/3-3px)]`}
            initial={false}
            animate={{
              x: `calc(${mode} * 100%)`,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
