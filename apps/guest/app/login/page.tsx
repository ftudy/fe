"use client";

import { SubmitHandler, useForm } from "react-hook-form";

import { LoginFormInput } from "./types";

export default function Page() {
  const { register, handleSubmit } = useForm<LoginFormInput>();

  const onSubmit: SubmitHandler<LoginFormInput> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("userId", { required: true })} />
      <input {...register("password", { required: true })} />
      <input type="submit" value="Login" />
    </form>
  );
}
