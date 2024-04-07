import React from "react";

type DateProps = {
  id: string;
  title: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

export function Date({ id, title, value, handleChange, required }: DateProps) {
  return (
    <div>
      <label htmlFor={id}>{title}</label>
      <input
        type="date"
        id={id}
        value={value}
        onChange={handleChange}
        required={required}
      />
    </div>
  );
}
