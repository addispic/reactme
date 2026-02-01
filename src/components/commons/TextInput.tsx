import { useState } from "react";
// icons
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
// defs
import type { TextInputProps } from "../../defs/common.defs";
export default function TextInput({ icon: Icon, ...props }: TextInputProps) {
  // states
  const [isHide, setIsHide] = useState<boolean>(
    props.type === "password" ? true : false,
  );
  const [focus, setFocus] = useState<boolean>(false);
  return (
    <div className={`${props.className}`}>
      <div
        className={`flex items-center gap-x-3 px-3 py-1.5 border rounded-md transition-colors ease-in-out duration-300 ${props.error ? "border-red-600" : focus || props.value ? "border-green-600" : "border-neutral-300"}`}
      >
        {/* icon */}
        {Icon && (
          <Icon
            className={`transition-colors ease-in-out duration-300 ${props.error ? "text-red-600" : focus || props.value ? "text-green-600" : "text-neutral-500"}`}
          />
        )}
        {/* input */}
        <input
          className="focus:outline-none focus:ring-0 border-none text-sm text-neutral-600"
          type={props.type === "password" && isHide ? "password" : "text"}
          value={props.value}
          onChange={(e) => {
            props.setValue(e.target.value);
          }}
          placeholder={props.placeholder}
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => {
            setFocus(false);
          }}
        />
        {props.type === "password" && (
          <button
            onClick={() => {
              setIsHide(!isHide);
            }}
            className="text-xl text-neutral-500"
          >
            {isHide ? <BiHide /> : <BiShow />}
          </button>
        )}
      </div>
      {props.error && (
        <p className="text-xs text-red-600 m-0.5">{props.error}</p>
      )}
    </div>
  );
}
