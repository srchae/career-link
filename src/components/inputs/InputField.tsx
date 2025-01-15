import { forwardRef, useState } from "react";

import { FieldError } from "react-hook-form";

import { Icons } from "../Icons";

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  errors?: FieldError | null;
  isEmail?: boolean;
  emailDomain?: string;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      label,
      type = "text",
      placeholder,
      errors,
      isEmail,
      emailDomain,
      ...props
    },
    ref
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
      <div className="relative w-full">
        {/* 라벨 */}
        <label
          className="text-sm text-foreground absolute -top-[10px] left-2 bg-background px-1 transition-all "
          htmlFor={label}
        >
          {label}
        </label>

        {/* 입력 필드 */}
        <div className="flex items-center border border-gray-300 rounded-md px-3 py-4 focus-within:ring-1 focus-within:ring-signature focus-within:border-signature">
          <input
            id={label}
            type={type === "password" && isPasswordVisible ? "text" : type}
            placeholder={placeholder}
            className={`flex-1 text-sm outline-none border-none focus:outline-none focus:ring-0 ${
              errors ? "text-red-500" : "border-gray-300"
            }`}
            ref={ref}
            {...props}
          />
          {isEmail && emailDomain && (
            <span className="absolute text-sm right-4 text-[#C4C4C4] select-none">
              {emailDomain}
            </span>
          )}
        </div>

        {/* 에러 메시지 표시 */}
        {errors && (
          <p className="text-xs text-red-500 mt-1">{errors.message}</p>
        )}

        {/* 패스워드 표시/숨기기 아이콘 */}
        {type === "password" && (
          <button
            type="button"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            className="absolute inset-y-0 right-3 flex items-center"
          >
            {isPasswordVisible ? (
              <Icons.EyeOff /> // 눈을 가리는 아이콘
            ) : (
              <Icons.EyeOn /> // 눈 아이콘
            )}
          </button>
        )}
      </div>
    );
  }
);

InputField.displayName = "InputField";
