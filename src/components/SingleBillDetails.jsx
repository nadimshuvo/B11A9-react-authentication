import React from "react";
import descoIcon from "../assets/desco.webp";

const SingleBillDetails = () => {
  return (
    <div className="single-bill border shadow-2xl border-yellow/20 rounded-2xl flex flex-col gap-10 items-center justify-between p-20 my-20 bg-white">
      <img
        src={descoIcon}
        alt="desco Icon"
        className="border border-yellow/25 rounded-2xl w-52 h-52 object-center overflow-hidden transition-transform duration-500"
      />
      <div className="text-center max-w-200 mx-auto space-y-5">
        <h3 className="font-bold text-3xl text-green">Desco</h3>
        <p>The Board is under the Power Division of the Ministry of power, Energy and Mineral Resources, Government of Bangladesh. The main fuel used for power generation plants is indigenous natural gas. The power system has been expanded to keep pace with the fast growing demand.</p>
        <p className="italic font-bold text-accent">Electricity</p>
        <p>
          Amount: <span className="text-yellow font-black">500</span> Taka
        </p>
        <p className="text-warrning">Due Date: 18 May 2025</p>
        <button className="btn btn-primary text-accent rounded-full transition-transform duration-300 hover:scale-110">
          Pay Bill Now
        </button>
      </div>
    </div>
  );
};

export default SingleBillDetails;
