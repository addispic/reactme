// defs
import type { InputTextProps } from "./InputTextProps";
export default function InputText({
  type,
  placeholder,
  icon: Icon,
  ...props
}: InputTextProps) {
  return (
    <div>
      {/* input */}
      <div className="flex items-center gap-x-1.5 px-1.5 py-1.5 border border-neutral-300 rounded-sm">
        {Icon && <Icon className={"text-neutral-500"} />}
        <input
          type={type}
          placeholder={placeholder || ""}
          className={`${props.inputClass} focus:ring-0 focus:outline-none border-none text-sm`}
        />
      </div>
    </div>
  );
}
