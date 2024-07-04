"use client";

import React from "react";
import { FieldValues, useForm } from "react-hook-form";
export default function FormWithReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  console.log("2");

  const onSubmit = async (data: FieldValues) => {
    // submit to server

    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Submitted!");
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-2 w-1/2"
    >
      <input
        {...register("email", { required: "Email is required" })}
        type="email"
        placeholder="Email"
        className="px-4 py-2 rounded text-slate-700"
      />
      {errors.email && (
        <p className="text-red-500">{`${errors.email.message}`}</p>
      )}
      <input
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 10,
            message: "Password must be at least 10 characters",
          },
        })}
        type="password"
        placeholder="Password"
        className="px-4 py-2 rounded text-slate-700"
      />
      {errors.password && (
        <p className="text-red-500">{`${errors.password.message}`}</p>
      )}
      <input
        {...register("confirmPassword", {
          required: "Confirm password is required",
          validate: (value: string) =>
            value === getValues("password") || "Passwords must match",
        })}
        type="password"
        placeholder="Confirm password"
        className="px-4 py-2 rounded text-slate-700"
      />
      {errors.confirmPassword && (
        <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
      )}
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
