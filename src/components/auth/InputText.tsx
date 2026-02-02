import { useState } from "react";

// icons
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
// defs
import type { InputTextProps } from "./InputTextProps";
export default function InputText({
  type,
  placeholder,
  icon: Icon,
  value,
  error,
  setValue,
  ...props
}: InputTextProps) {
  // states
  // focus
  const [focus, setFocus] = useState<boolean>(false);
  // hide show
  const [hide, setHide] = useState<boolean>(true);
  // handlers
  // text input change handler
  const textInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div>
      {/* input */}
      <div
        className={`transition-colors ease-in-out duration-500 flex items-center gap-x-1.5 px-1.5 py-1.5 border rounded-sm ${error ? "border-red-600" : focus || value ? "border-green-600" : "border-neutral-400"}`}
      >
        {Icon && (
          <Icon
            className={`transition-colors ease-in-out duration-500 ${error ? "text-red-600" : focus || value ? "text-green-600" : "text-neutral-500"}`}
          />
        )}
        <input
          type={type === "password" ? (hide ? "password" : "text") : type}
          placeholder={placeholder || ""}
          className={`${props.inputClass} focus:ring-0 focus:outline-none border-none text-sm w-full text-neutral-700`}
          value={value}
          onChange={(e) => {
            textInputChangeHandler(e);
          }}
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => {
            setFocus(false);
          }}
        />
        {type === "password" && (
          <button
            className="text-neutral-500 text-lg cursor-pointer"
            onClick={() => {
              setHide(!hide);
            }}
          >
            {hide ? <BiHide /> : <BiShow />}
          </button>
        )}
      </div>
      {/* error */}
      <div>
        <p className="text-sm text-red-600 h-6">{error}</p>
      </div>
    </div>
  );
}
