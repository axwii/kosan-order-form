"use client";
import ProductCard from "./ProductCard";
import React from "react";

const CustomerForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/sendOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Order sent successfully!");
        event.target.reset();
      } else {
        alert("Failed to send order.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 bg-white border border-gray-300 rounded"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ProductCard
          name="5 kg Kosan Gas Light"
          alt="5 kg Kosan Gas Light"
          varenr="01059"
          imgSrc="/static/images/kosangas-5kg-light.jpg"
          inputName="kosangas5kg"
        />
        <ProductCard
          name="10 kg Kosan Gas Light"
          alt="10 kg Kosan Gas Light"
          varenr="01060"
          imgSrc="/static/images/kosangas-10kg-light.jpg"
          inputName="kosangas10kg"
        />
        <ProductCard
          name="5 kg Kosan Gas Click on"
          alt="5 kg Kosan Gas Click on"
          varenr="01061"
          imgSrc="/static/images/kosangas-5kg-click-on.webp"
          inputName="kosangas5kgClickOn"
        />
      </div>

      <div className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Firmanavn
          </label>
          <input
            type="text"
            name="companyName"
            required
            className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
        />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Kundenummer
        </label>
        <input
          type="number"
          name="customerNumber"
          required
          className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Reference nummer
        </label>
        <input
          type="number"
          name="referenceNumber"
          required
          className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Telefon nummer
        </label>
        <input
          type="tel"
          name="phoneNumber"
          pattern="[0-9]+"
          required
          className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Adresse
        </label>
        <input
          type="text"
          name="address"
          required
          className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Postnummer
        </label>
        <input
          type="number"
          name="postalCode"
          required
          className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">By</label>
        <input
          type="text"
          name="city"
          required
          className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
        />
      </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          <input
            type="checkbox"
            name="terms"
            required
            className="mr-2 leading-tight"
          />
          Jeg accepterer handelsbetingelser
        </label>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
};

export default CustomerForm;
