import { ChangeEventHandler } from "react";

export interface CheckboxProps {
  id?: string;
  value?: string;
  label?: string;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  placeholder?: string;
  textSize?: string;
}
