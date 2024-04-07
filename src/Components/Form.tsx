import React, { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { Date } from "./Date";

type FormProps = {
  handleAddItem: (source: string, value: number, date: string) => void;
  firstInputId: string;
  firstInputTitle: string;
  firstInputPlaceholder: string;
  secondInputId: string;
  secondInputTitle: string;
  secondInputPlaceholder: string;
  dateTitle: string;
  btnName: string;
};

export function Form({
  handleAddItem,
  firstInputId,
  firstInputTitle,
  firstInputPlaceholder,
  secondInputId,
  secondInputTitle,
  secondInputPlaceholder,
  dateTitle,
  btnName,
}: FormProps) {
  const [source, setSource] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");

  const handleAddItemSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (source.trim() === "" || value.trim() === "" || date.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }
    handleAddItem(source, parseFloat(value), date);
    setSource("");
    setValue("");
    setDate("");
  };

  return (
    <form onSubmit={handleAddItemSubmit}>
      <Input
        id={firstInputId}
        title={firstInputTitle}
        placeholder={firstInputPlaceholder}
        value={source}
        handleChange={(e) => setSource(e.target.value)}
      />
      <Input
        id={secondInputId}
        title={secondInputTitle}
        placeholder={secondInputPlaceholder}
        value={value}
        handleChange={(e) => setValue(e.target.value)}
      />
      <Date
        id="date-of-day"
        title={dateTitle}
        value={date}
        handleChange={(e) => setDate(e.target.value)}
        required
      />
      <Button name={btnName} />
    </form>
  );
}
