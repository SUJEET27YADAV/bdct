import React from "react";
import RegistrationForm from "../components/RegistrationForm";
import Image from "next/image";
import Footer from "../components/footer";

const Register: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="mt-4 text-3xl font-bold mb-4">Player Registration</h1>
      <RegistrationForm />
      <Footer />
    </div>
  );
};

export default Register;
