import React, { useState } from "react";
import { FilterButton, Form, Label } from "./styles";

interface Props {
  onFilter: (startDate: string, endDate: string) => void;
}

const Filter: React.FC<Props> = ({ onFilter }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onFilter(startDate, endDate);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="initial-date">
          Initial Date
        </Label>
      <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          name="initial-date"
        />
      </div>
      
      <div>
        <Label htmlFor="final-date">
          Final date
        </Label>
        <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            name="final-date"
          />
      </div>  
      
      <FilterButton type="submit">Filter</FilterButton>
    </Form>
  );
};

export default Filter;
