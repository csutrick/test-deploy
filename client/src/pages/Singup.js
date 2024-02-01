import React from "react";
import { Link } from "react-router-dom";

import SignUpForm from "../components/PageSignup/form";

const SignUp = () => {
  return (
    <section className="mx-12 flex min-h-screen w-[1250px] flex-col items-center justify-center bg-blue-300 pt-16">
      <h2 className="mb-6 w-full text-center text-6xl font-bold text-white">
        SignUp Page
      </h2>
      <SignUpForm />
      <Link to="/login" className="mt-6">
        <h3 className="text-base font-bold text-white">Login</h3>
      </Link>
    </section>
  );
};

export default SignUp;
