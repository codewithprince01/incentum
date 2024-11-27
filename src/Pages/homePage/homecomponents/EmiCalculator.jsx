import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

export default function EmiCalculator() {
  const [principle, setPrinciple] = useState(200000);
  const [interest, setInterest] = useState(24);
  const [tenure, setTenure] = useState(18);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const monthlyRate = interest / 12 / 100;
    const numPayments = tenure * 12;
    const emiValue =
      (principle * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);
    const totalPayment = emiValue * numPayments;
    const totalInterestValue = totalPayment - principle;

    setEmi(emiValue.toFixed(2));
    setTotalInterest(totalInterestValue.toFixed(2));
    setTotalAmount(totalPayment.toFixed(2));
  }, [principle, interest, tenure]);

  const chartData = {
    labels: ["Principal Amount", "Interest Amount"],
    datasets: [
      {
        data: [principle, totalInterest],
        backgroundColor: ["#4caf50", "#ff5722"],
        hoverBackgroundColor: ["#81c784", "#ff8a65"],
        borderWidth: 1,
        borderColor: "#fff",
      },
    ],
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-[#010080] to-[#0A1536] text-black">
      <div className="w-full bg-white shadow-2xl rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          EMI Calculator
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
          {/* Left Section */}
          <div className="space-y-6">
            {/* Loan Amount */}
            <div className="p-4 border rounded-lg shadow-md bg-gradient-to-r from-gray-100 to-gray-200">
              <label className="flex justify-between text-lg font-semibold">
                Loan Amount
                <span className="text-blue-700">₹ {principle.toLocaleString()}</span>
              </label>
              <input
                type="range"
                min="100000"
                max="100000000"
                step="50000"
                value={principle}
                onChange={(e) => setPrinciple(parseInt(e.target.value))}
                className="w-full mt-4"
              />
            </div>

            {/* Interest Rate */}
            <div className="p-4 border rounded-lg shadow-md bg-gradient-to-r from-gray-100 to-gray-200">
              <label className="flex justify-between text-lg font-semibold">
                Rate of Interest (p.a.)
                <span className="text-blue-600">{interest} %</span>
              </label>
              <input
                type="range"
                min="1"
                max="30"
                step="0.1"
                value={interest}
                onChange={(e) => setInterest(parseFloat(e.target.value))}
                className="w-full mt-4"
              />
            </div>

            {/* Loan Tenure */}
            <div className="p-4 border rounded-lg shadow-md bg-gradient-to-r from-gray-100 to-gray-200">
              <label className="flex justify-between text-lg font-semibold">
                Loan Tenure
                <span className="text-blue-600">{tenure} Yr</span>
              </label>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={tenure}
                onChange={(e) => setTenure(parseInt(e.target.value))}
                className="w-full mt-4"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-8 flex flex-col items-center">
            <div className="p-4 bg-gradient-to-r from-green-100 to-green-300 rounded-lg shadow-lg text-center w-full">
              <h2 className="text-2xl font-bold">EMI Details</h2>
              <div className="mt-4 space-y-2">
                <p className="text-lg font-medium">Monthly EMI: ₹ {emi.toLocaleString()}</p>
                <p className="text-lg font-medium">Principal: ₹ {principle.toLocaleString()}</p>
                <p className="text-lg font-medium">Total Interest: ₹ {totalInterest.toLocaleString()}</p>
                <p className="text-lg font-medium">Total Amount: ₹ {totalAmount.toLocaleString()}</p>
              </div>
            </div>

            <div className="w-[300px] h-[300px]">
              <Doughnut data={chartData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}