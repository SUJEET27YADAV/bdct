import React from "react";
import RegistrationForm from "../components/RegistrationForm";

export default function Register() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="mt-4 text-3xl font-bold mb-4">Player Registration</h1>
      <RegistrationForm />
    </div>
  );
}
