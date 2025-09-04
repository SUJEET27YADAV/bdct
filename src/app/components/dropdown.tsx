import React, { useState } from "react";

type props = {
  label: string;
  val: string | number;
  setVal: React.Dispatch<React.SetStateAction<any>>;
  options: string[];
};

export default function Dropdown({ label, val, setVal, options }: props) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="relative w-full">
      <div
        className="w-full flex items-center justify-between border border-gray-300 dark:border-white rounded outline-none px-3 pt-4 pb-2 cursor-pointer"
        onClick={() => setIsFocused(!isFocused)}
      >
        <label
          className={`absolute left-1 top-0.5 text-[12px] font-bold transition-all duration-500`}
        >
          {label + " :"}
        </label>
        <p className="font-bold">{val}</p>
        <span className="material-icons-outlined">
          {isFocused ? "arrow_drop_up" : "arrow_drop_down"}
        </span>
      </div>
      {isFocused && (
        <ul className="absolute z-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-white rounded w-full max-h-40 overflow-y-auto">
          {options.map((option, i) => (
            <li
              key={i}
              className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
              onClick={() => {
                setVal(option);
                setIsFocused(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
