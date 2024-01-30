import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Creating account with:", username, password);
  };

  return (
    <section className="mx-12 flex min-h-screen w-[1250px] flex-col items-center justify-center bg-blue-300 pt-16">
      <h2 className="mb-6 w-full text-center text-6xl font-bold text-white">
        SignUp Page
      </h2>
      <form
        className="flex h-72 w-72 flex-col items-start justify-center rounded-xl bg-red-300 p-2 "
        onSubmit={handleSubmit}
      >
        <label
          className="mb-1 text-sm font-bold text-gray-700"
          htmlFor="username"
        >
          Username:
        </label>
        <input
          className="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="text-sm font-bold text-gray-700" htmlFor="password">
          Password:
        </label>
        <input
          className="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          id="password"
          type="password"
          placeholder="******************"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="mt-4 flex w-full justify-center">
          <button
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
      <Link to="/login" className="mt-6">
        <h3 className="text-base font-bold text-white">Login</h3>
      </Link>
    </section>
  );
};

export default SignUp;
