import { CheckboxProps } from "@/types/components/checkbox";

import { Icons } from "../Icons";

export const Basic = ({
  id,
  value,
  label,
  checked,
  onChange,
  className,
  inputRef,
  textSize = "text-base",
}: CheckboxProps) => {
  console.log(checked);
  return (
    <div className="flex gap-[5px] items-center">
      <div className="relative flex justify-center">
        <input
          id={id}
          value={value}
          ref={inputRef}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className={`${className} rounded-[7px] cursor-pointer checked:border-none appearance-none h-5 w-5 border checked:bg-signature  focus:outline-none`}
        />
        <label htmlFor={id}>
          {checked && (
            <span className="absolute inset-0 flex justify-center pt-[4px] cursor-pointer">
              <Icons.CheckboxOn />
            </span>
          )}
        </label>
      </div>
      <label htmlFor={id} className={`cursor-pointer ${textSize}`}>
        {label}
      </label>
    </div>
  );
};

export const Checkbox = {
  Basic,
};
