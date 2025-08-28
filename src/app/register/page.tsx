import React from "react";
import RegistrationForm from "../components/RegistrationForm";
import Image from "next/image";

const Register: React.FC = () => {
  return (
    <div className="relative py-4 flex flex-col items-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Player Registration</h1>
      <RegistrationForm />
      <Image
        src="/bdcs.png"
        alt="Bhawani Dutt Cricket Stadium"
        width={1395}
        height={800}
        className="absolute inset-0 object-cover -z-10"
      />
    </div>
  );
};

export default Register;
