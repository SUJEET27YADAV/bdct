import React, { useState } from "react";

type props = {
  label: string;
  type: string;
  val: string | number;
  setVal: React.Dispatch<React.SetStateAction<string>>;
};

export default function Input({ label, type, val, setVal }: props) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="w-full relative mb-2 flex items-center">
      <label
        className={`${
          isFocused || val != ""
            ? "absolute left-1 top-0.5 text-[12px]"
            : "hidden"
        } font-bold transition-all duration-500 text-zinc-700/70 dark:text-white/60`}
      >
        {label + " :"}
      </label>
      <input
        type={type}
        value={val}
        placeholder={isFocused ? "" : label}
        onFocus={() => setIsFocused(true)}
        onChange={(e) => setVal(e.target.value)}
        onBlur={() => setIsFocused(false)}
        className={`block w-full border border-gray-300 dark:border-white rounded outline-none ${
          isFocused || val != "" ? "px-3 pt-4 pb-2" : "p-3"
        } transition-all duration-500`}
        required
      />
    </div>
  );
}
