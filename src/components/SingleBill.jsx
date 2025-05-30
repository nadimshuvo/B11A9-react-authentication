import React from "react";
import { Link } from "react-router";

const SingleBill = ({
  bill: { id, bill_type, icon, organization, amount, due_date },
}) => {
  const isPaid = localStorage.getItem(`bill-paid-${id}`);

  return (
    <div
      className="group perspective max-xl:px-2.5"
      style={{ perspective: "1000px" }}
    >
      <div className="single-bill border-primary/10 group-hover:shadow-3xl mb-20 flex transform items-center justify-between rounded-2xl border bg-white p-20 shadow-2xl transition-transform duration-500 group-hover:scale-95 group-hover:rotate-[deg] max-xl:flex-col max-xl:gap-3.5 max-xl:p-9">
        <img
          src={icon}
          alt="desco Icon"
          className="border-yellow/25 h-52 w-52 overflow-hidden rounded-2xl border object-center transition-transform duration-500 group-hover:scale-125"
        />
        <h3 className="text-green text-3xl font-bold">{organization}</h3>
        <p className="text-accent font-bold italic">{bill_type}</p>
        <p>
          Amount: <span className="text-yellow font-black">{amount}</span> Taka
        </p>
        <p>
          Due Date: <span className="text-warrning font-bold">{due_date}</span>
        </p>
        <button
          className={`btn rounded-full transition-transform duration-300 hover:scale-110 ${isPaid ? "text-yellow" : "btn-primary text-accent"}`}
        >
          <Link to={`${id}`} className="px-20 max-sm:px-10">
            {isPaid ? "Paid : See Details" : "Pay"}
          </Link>
        </button>
        {isPaid ? <span className="cursor-not-allowed text-2xl">✅</span> : ""}
      </div>
    </div>
  );
};

export default SingleBill;
