import React from "react";
import SingleBill from "../components/SingleBill";

const Bills = () => {
  return (
    <section className="container mx-auto">
      <h1 className="text-center font-extrabold text-4xl my-20">My Bills</h1>
      <div className="bills-container space-y-20">
        <SingleBill />
      </div>
    </section>
  );
};

export default Bills;
