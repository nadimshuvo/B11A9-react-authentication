import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import billIcon from "../assets/bill_icon.png";
import AuthContext from "../provider/AuthContext";
import swal from "sweetalert";

const SingleBillDetails = () => {
  const navigate = useNavigate();
  const bill = useLoaderData();
  const { balance, setBalance } = useContext(AuthContext);

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
    swal(
      "Paid",
      `You have successfully paid the ${billData.bill_type} Bill to ${billData.organization} !`,
      "success",
    );
    setBalance((prev) => prev - billData.amount);
    setBillData((prev) => ({
      ...prev,
      paid: true,
    }));
    localStorage.setItem(`bill-paid-${billData.id}`, "true");
    navigate("/bills");
  };

  const isInsufficient = balance < billData.amount;

  return (
    <div className="single-bill border-yellow/20 my-20 flex items-center justify-between gap-10 rounded-2xl border bg-white p-20 shadow-2xl max-md:mx-2.5 max-md:flex-col max-md:p-5 max-md:text-center">
      <div className="relative">
        <img
          src={billData.icon}
          alt="desco Icon"
          className="border-yellow/25 h-fit w-full overflow-hidden rounded-2xl border object-cover transition-transform duration-500"
        />
        <p className="btn btn-ghost bg-yellow absolute right-3 bottom-3 rounded-xl font-bold text-white italic">
          <img src={billIcon} className="w-7" alt="Bill Icon" />
          {billData.bill_type}
        </p>
      </div>
      <div className="mx-auto max-w-200 space-y-5">
        <h3 className="text-green text-3xl font-bold">
          {billData.organization}
        </h3>
        <p>
          Bill Type :{" "}
          <span className="text-accent font-bold italic">
            {billData.bill_type}
          </span>{" "}
          Bill
        </p>
        <p>
          Amount: &#2547;{" "}
          <span className="text-yellow font-black">{billData.amount}</span>/-
        </p>
        <p className="text-warrning">Due Date: {billData.due_date}</p>
        <p className="font-semibold text-green-700">
          Status: {billData.paid ? "Paid" : "Unpaid"}
        </p>

        <button
          onClick={handlePayBill}
          disabled={billData.paid}
          className={`btn btn-primary text-accent rounded-full px-20 transition-transform duration-300 max-xl:px-10 ${
            billData.paid || isInsufficient
              ? "border-accent/15 cursor-not-allowed border-2 bg-gray-700"
              : "hover:scale-110"
          }`}
        >
          {billData.paid
            ? "Paid"
            : isInsufficient
              ? "Insufficient Balance"
              : "Pay Now"}
        </button>
      </div>
    </div>
  );
};

export default SingleBillDetails;
