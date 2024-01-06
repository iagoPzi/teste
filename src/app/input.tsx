import { InputHTMLAttributes } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function CustomInput({ ...props }: CustomInputProps) {
  return (
    <input
      className="bg-zinc-300 p-1 placeholder-blue-950 text-blue-900 focus:outline-none"
      {...props}
    />
  );
}
