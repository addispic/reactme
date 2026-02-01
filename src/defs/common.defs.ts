import type { ComponentType } from "react";

export type TextInputProps = {
  icon?: ComponentType<{ className?: string }>;
  value: string;
  type: string;
  placeholder?: string;
  className?: string;
  setValue: (value: string) => void;
  error?: string;
};
