import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CalendarPicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="mt-9 w-full">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className="p-2 border rounded-full w-full"
      />
    </div>
  );
};

export default CalendarPicker;
