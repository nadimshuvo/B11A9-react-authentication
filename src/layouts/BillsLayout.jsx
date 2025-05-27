import React from "react";
import SingleBill from "../components/SingleBill";
import { useLoaderData } from "react-router";

const BillsLayout = () => {
  const Bills = useLoaderData();
  return (
    <>
      {Bills.map((bill) => (
        <SingleBill key={bill.id} bill={bill}/>
      ))}
    </>
  );
};

export default BillsLayout;