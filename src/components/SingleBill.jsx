import React from "react";
import descoIcon from "../assets/desco.webp";

const SingleBill = () => {
  return (
    <div className="group perspective" style={{ perspective: "1000px" }}>
      <div className="single-bill border shadow-2xl border-accent/10 rounded-2xl flex items-center justify-between p-20 mb-20 bg-white transform transition-transform duration-500 group-hover:rotate-[deg] group-hover:scale-95 group-hover:shadow-3xl">
        <img
          src={descoIcon}
          alt="desco Icon"
          className="border border-yellow/25 rounded-2xl w-52 h-52 object-center overflow-hidden transition-transform duration-500 group-hover:scale-125"
        />
        <h3 className="font-bold text-3xl text-green">Desco</h3>
        <p className="italic font-bold text-accent">Electricity</p>
        <p>
          Amount: <span className="text-yellow font-black">500</span> Taka
        </p>
        <p className="text-warrning">Due Date: 18 May 2025</p>
        <button className="btn btn-primary text-accent rounded-full transition-transform duration-300 hover:scale-110">
          See Details
        </button>
      </div>
    </div>
  );
};

export default SingleBill;
