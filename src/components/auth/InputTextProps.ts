import type { ComponentType } from "react";

export type InputTextProps = {
  icon?: ComponentType<{ className?: string }>;
  type: "text" | "password" | "number";
  placeholder?: string;
  inputClass?: string;
  value: string;
  error?: string;
  setValue: (value: string) => void;
};
