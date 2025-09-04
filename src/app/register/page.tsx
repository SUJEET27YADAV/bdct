import React from "react";
import RegistrationForm from "../components/RegistrationForm";
import Image from "next/image";

const Register: React.FC = () => {
  return (
    <div className="py-4 flex flex-col items-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Player Registration</h1>
      <RegistrationForm />
    </div>
  );
};

export default Register;
