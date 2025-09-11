import { boolean } from "drizzle-orm/gel-core";
import React, { useState } from "react";

interface ToggleButtonProps {
  enabled: boolean;
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ToggleButton({
  enabled,
  setEnabled,
}: ToggleButtonProps) {
  return (
    <button
      type="button"
      aria-pressed={enabled}
      onClick={() => setEnabled(!enabled)}
      className={`w-14 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
        enabled ? "bg-blue-900" : "bg-red-900"
      }`}
    >
      <div
        className={`w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
          enabled ? "bg-blue-400 translate-x-8" : "bg-red-400 translate-x-0"
        }`}
      />
    </button>
  );
}
