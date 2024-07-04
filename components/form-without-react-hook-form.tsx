"use client";

import React from "react";
import { useState } from "react";

export default function FormWithoutReactHookForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  console.log("1");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (password !== confirmPassword) {
      setErrors(["Passwords must match"]);
      setIsSubmitting(false);
      return;
    }
    // submit to server

    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert("Submitted!");
    console.log(email, password, confirmPassword);
    setIsSubmitting(false);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrors([]);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-2 w-1/2">
      {errors.length > 0 && <p className="text-red-500">{errors[0]}</p>}
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        required
        placeholder="Email"
        className="px-4 py-2 rounded text-slate-700"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        required
        placeholder="Password"
        className="px-4 py-2 rounded text-slate-700"
      />
      <input
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        type="password"
        required
        placeholder="Confirm password"
        className="px-4 py-2 rounded text-slate-700"
      />

      <button
        type="submit"
        className="bg-green-500 disabled:bg-gray-500 py-2 rounded"
        disabled={isSubmitting}
      >
        Submit
      </button>
    </form>
  );
}
