import React from "react";
import { Link } from "react-router";

const SingleBill = ({bill: {id,bill_type, icon, organization,amount,due_date}}) => {

  const isPaid = localStorage.getItem(`bill-paid-${id}`);
   
  return (
    <div className="group perspective" style={{ perspective: "1000px" }}>
      <div className="single-bill border shadow-2xl border-accent/10 rounded-2xl flex items-center justify-between p-20 mb-20 bg-white transform transition-transform duration-500 group-hover:rotate-[deg] group-hover:scale-95 group-hover:shadow-3xl">
        <img
          src={icon}
          alt="desco Icon"
          className="border border-yellow/25 rounded-2xl w-52 h-52 object-center overflow-hidden transition-transform duration-500 group-hover:scale-125"
        />
        <h3 className="font-bold text-3xl text-green">{organization}</h3>
        <p className="italic font-bold text-accent">{bill_type}</p>
        <p>
          Amount: <span className="text-yellow font-black">{amount}</span> Taka
        </p>
        <p>Due Date: <span className="font-bold text-warrning">{due_date}</span></p>
        <button className={`btn  rounded-full transition-transform duration-300 hover:scale-110 ${isPaid ? "text-yellow" : "btn-primary text-accent"}`}>
          <Link to={`${id}`} className="px-20">{isPaid ? "Paid : See Details" : "Pay"}</Link> 
        </button>
        {isPaid ?  <span className="text-2xl cursor-not-allowed">✅</span>: ""}
      </div>
    </div>
  );
};

export default SingleBill
