"use client";
import React, { useState } from "react";
import Input from "./input";
import Dropdown from "./dropdown";

enum Role {
  AllRounder = "All Rounder",
  Batsman = "Batsman",
  FastBowler = "Fast Bowler",
  Spinner = "Spinner",
  WicketKeeper = "Wicket Keeper",
}
const dates = [
  "21-09-2025",
  "22-09-2025",
  "23-09-2025",
  "24-09-2025",
  "25-09-2025",
];
const slots = [
  "09:00 - 11:00",
  "11:00 - 13:00",
  "13:00 - 15:00",
  "15:00 - 17:00",
];

const RegistrationForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState<"Professional" | "Corporate">(
    "Corporate"
  );
  const [role, setRole] = useState<Role>("Batsman" as Role);
  const [trialDate, setTrialDate] = useState("21-09-2025");
  const [trialSlot, setTrialSlot] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const playerData = {
      name,
      email,
      age,
      phone,
      category,
      role,
      trialDate,
      trialSlot,
    };
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(playerData),
    });

    if (res.ok) {
      alert("Player Registered!");
      setName("");
      setAge("");
      setEmail("");
      setPhone("");
    } else {
      alert("Registration failed.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="min-w-[600px] mx-auto p-4 bg-gray-400/30 dark:bg-gray-100/30 backdrop-blur-sm drop-shadow-xl rounded shadow-md"
    >
      <h2 className="w-full text-center text-lg font-bold mb-2">
        Please enter your details :
      </h2>
      <div className="flex gap-2 mb-2">
        <Dropdown
          label="Category"
          options={["Corporate", "Professional"]}
          val={category}
          setVal={setCategory}
        />
        <Dropdown
          label="Role"
          options={Object.values(Role)}
          val={role}
          setVal={setRole}
        />
      </div>
      <div className="flex gap-2 mb-2">
        <Input label="Full Name" type="text" val={name} setVal={setName} />
      </div>
      <div className="flex gap-2 mb-2">
        <Input label="Age" type="number" val={age} setVal={setAge} />
        <Input label="Phone" type="tel" val={phone} setVal={setPhone} />
      </div>
      <div className="flex gap-2 mb-2">
        <Input label="Email" type="email" val={email} setVal={setEmail} />
      </div>
      <p className="font-bold mb-1">Trial Date :</p>
      <div className="flex items-center justify-between mb-2">
        {dates.map((date, i) => (
          <button
            key={i}
            className={`flex items-center justify-center text-sm font-bold rounded p-2 transition-all duration-300
               ${
                 trialDate === date
                   ? "bg-blue-300 dark:bg-blue-700 text-white"
                   : "border border-gray-300 dark:border-white hover:bg-blue-200 dark:hover:bg-blue-700/40"
               }`}
            type="button"
            onClick={() => setTrialDate(date)}
          >
            {date}
          </button>
        ))}
      </div>
      <p className="font-bold mb-1">Trial Slot :</p>
      <div className="flex items-center justify-between mb-2">
        {slots.map((slot, i) => (
          <button
            key={i}
            className={`flex items-center justify-center text-sm font-bold rounded p-2 transition-all duration-300 ${
              trialSlot === i
                ? "bg-orange-500 dark:bg-orange-700 text-white"
                : "border border-gray-300 dark:border-white hover:bg-orange-200 dark:hover:bg-orange-700/60"
            }`}
            type="button"
            onClick={() => setTrialSlot(i)}
          >
            {slot}
          </button>
        ))}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
