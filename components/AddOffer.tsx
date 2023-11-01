"use client";
import React, { useState } from "react";
import { BsCurrencyRupee, BsPercent } from "react-icons/bs";

const AddOffer = () => {
  const [isPrivate, setIsPrivate] = useState(false);
  const [values, setValues] = useState({
    amount: "",
    equity: "",
    comment: "",
  });
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    // TODO: Implement
  };
  return (
    <div className="text-white w-1/2 h-full bg-bg_dark_secondary flex flex-col justify-start items-start p-2 max-sm:w-full">
      <h1 className="text-2xl w-full">Give an offer</h1>
      <form className="flex flex-col justify-between items-start w-full">
        <div className="flex flex-col justify-start items-start w-full mt-2">
          <p>Amount</p>
          <div className="w-full flex justify-between items-center border border-white px-2 py-1 mt-1">
            <input
              type="number"
              name="amount"
              className="w-full rounded-sm focus:outline-none bg-transparent"
              required
              value={values.amount}
              onChange={handleChange}
              placeholder="Enter Your Offered Amount"
            />
            <BsCurrencyRupee />
          </div>
        </div>
        <div className="flex flex-col justify-start items-start w-full mt-2">
          <p>Equity</p>
          <div className="w-full flex justify-between items-center border border-white px-2 py-1 mt-1">
            <input
              type="number"
              name="equity"
              className="w-full rounded-sm focus:outline-none bg-transparent"
              required
              value={values.equity}
              onChange={handleChange}
              placeholder="Enter Your Desired Equity"
            />
            <BsPercent />
          </div>
        </div>
        <div className="w-full flex justify-between items-start flex-col mt-2">
          <p>Comment</p>
          <textarea
            name="comment"
            className="w-full min-h-[105px] rounded-sm focus:outline-none bg-transparent border border-white px-2 py-1 mt-1 resize-none"
            required
            value={values.comment}
            onChange={handleChange}
            placeholder="Enter Your Comment"
          />
        </div>
      </form>
      <div className="flex justify-start items-center w-full mt-5">
        <input
          type="checkbox"
          onClick={() => {
            setIsPrivate(!isPrivate);
          }}
          checked={isPrivate}
        />
        <p className="ml-3">
          Keep Your Comment Private Between You and Peacher
        </p>
      </div>
      <button
        type="submit"
        className="px-3 py-1.5 bg-transparent border border-white mt-3"
        onClick={handleSubmit}
      >
        Add Offer
      </button>
    </div>
  );
};

export default AddOffer;
