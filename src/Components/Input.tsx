import React from "react";

type InputProps = {
  id: string;
  title: string;
  placeholder: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Input({
  id,
  title,
  placeholder,
  value,
  handleChange,
}: InputProps) {
  return (
    <div>
      <label htmlFor={id}>{title}</label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
