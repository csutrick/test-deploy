import React from "react";

const LoginForm = () => {
  return (
    <form className="flex h-72 w-72 flex-col items-start justify-center rounded-xl bg-red-300 p-2">
      {/* Email field */}
      <label
        className="mb-1 text-sm font-bold text-gray-700"
        htmlFor="username"
      >
        Email:
      </label>
      <input
        className="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        id="email"
        placeholder="Your email"
        name="email"
        type="email"
      />
      {/* Password field */}
      <label className="text-sm font-bold text-gray-700" htmlFor="password">
        Password:
      </label>
      <input
        className="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        id="password"
        placeholder="******"
        name="password"
        type="password"
      />
      {/* Login Button */}
      <div className="mt-4 flex w-full justify-center">
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
