import React, { useState } from "react";
import SingleBill from "../components/SingleBill";
import { useLoaderData } from "react-router";

const BillsLayout = () => {
  const bills = useLoaderData();
  const [selectedType, setSelectedType] = useState("all");

  // Extract unique bill types for the dropdown
  const billTypes = ["all", ...new Set(bills.map((bill) => bill.bill_type))];

  // Filter bills based on selected type
  const filteredBills =
    selectedType === "all"
      ? bills
      : bills.filter((bill) => bill.bill_type === selectedType);

  return (
    <section>
      {/* Dropdown Filter */}
      <div className="mb-20 text-center">
        <label className="mr-5 font-bold">Filter by Bill Type:</label>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="border rounded px-10 py-1 font-extrabold text-accent"
        >
          {billTypes.map((type) => (
            <option
              key={type}
              value={type}
              className="text-primary font-bold"
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Render Filtered Bills */}
      {filteredBills.map((bill) => (
        <SingleBill key={bill.id} bill={bill} />
      ))}
    </section>
  );
};

export default BillsLayout;
