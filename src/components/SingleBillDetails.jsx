import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import billIcon from "../assets/bill_icon.png";
import AuthContext from "../provider/AuthContext";
import swal from "sweetalert";

const SingleBillDetails = () => {
  const navigate = useNavigate();
  const bill = useLoaderData();
  const {balance,setBalance } = useContext(AuthContext);  
  
  const [billData, setBillData] = useState({
    ...bill,
    paid: false,
  });
  
  useEffect(() => {
    const paidStatus = localStorage.getItem(`bill-paid-${bill.id}`);
    
    if (paidStatus) {
      setBillData((prev) => ({
        ...prev,
        paid: true,
      }));
    }
  }, [bill.id]);

  const handlePayBill = () => {
    swal("Paid", `You have successfully paid the ${billData.bill_type} Bill to ${billData.organization} !`, "success");
    setBalance((prev) => prev - billData.amount);
    setBillData((prev) => ({
      ...prev,
      paid: true,
    }));
    localStorage.setItem(`bill-paid-${billData.id}`, "true");
    navigate('/bills')
  };
  
  const isInsufficient = balance < billData.amount;
  
  return (
    <div className="single-bill border shadow-2xl border-yellow/20 rounded-2xl flex gap-10 items-center justify-between p-20 my-20 bg-white">
      <div className="relative">
        <img
          src={billData.icon}
          alt="desco Icon"
          className="border border-yellow/25 rounded-2xl w-full h-fit object-cover overflow-hidden transition-transform duration-500"
        />
        <p className="btn btn-ghost absolute right-3 bottom-3 italic font-bold text-white bg-yellow rounded-xl">
          <img src={billIcon} className="w-7" alt="Bill Icon" />
          {billData.bill_type}
        </p>
      </div>
      <div className="max-w-200 mx-auto space-y-5">
        <h3 className="font-bold text-3xl text-green">
          {billData.organization}
        </h3>
        <p>
          Bill Type :{" "}
          <span className="italic font-bold text-accent">
            {billData.bill_type}
          </span>{" "}
          Bill
        </p>
        <p>
          Amount: &#2547;{" "}
          <span className="text-yellow font-black">{billData.amount}</span>/-
        </p>
        <p className="text-warrning">Due Date: {billData.due_date}</p>
        <p className="text-green-700 font-semibold">
          Status: {billData.paid ? "Paid" : "Unpaid"}
        </p>

        <button
          onClick={handlePayBill}
          disabled={billData.paid}
          className={`btn btn-primary text-accent rounded-full transition-transform duration-300 px-20 ${
            billData.paid || isInsufficient ? "bg-gray-500 cursor-not-allowed" : "hover:scale-110"
          }`}
        >
          {billData.paid ? "Bill Paid" : isInsufficient ? "Insufficient Balance" : "Pay Bill"}
        </button>
      </div>
    </div>
  );
};

export default SingleBillDetails;
