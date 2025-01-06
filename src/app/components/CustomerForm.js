"use client";
import ProductCard from "./ProductCard";
import React, { useState } from "react";

const CustomerForm = () => {
  const [totalWeight, setTotalWeight] = useState(0);
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (inputName, weight, quantity) => {
    setQuantities((prevQuantities) => {
      const newQuantities = {
        ...prevQuantities,
        [inputName]: { weight, quantity },
      };
      const newTotalWeight = Object.values(newQuantities).reduce(
        (total, { weight, quantity }) => total + weight * quantity,
        0
      );
      setTotalWeight(newTotalWeight);
      return newQuantities;
    });
  };

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
        setTotalWeight(0); // Reset total weight
        setQuantities({}); // Reset quantities
      } else {
        alert("Failed to send order.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 max-w-5xl mx-auto">
        {[
          { name: "33 kg Kosan Gas", varenr: "01330", imgSrc: "/static/images/kosangas-33kg.webp", weight: 33 },
          { name: "22 kg Kosan Gas", varenr: "01220", imgSrc: "/static/images/kosangas-22kg.jpg", weight: 22 },
          { name: "11 kg Kosan Gas Alu Truck", varenr: "01112", imgSrc: "/static/images/kosangas-11kg-alu-truck.webp", weight: 11 },
          { name: "11 kg Kosan Gas Click-on", varenr: "01110", imgSrc: "/static/images/kosangas-11kg-click-on.jpg", weight: 11 },
          { name: "10 kg Kosan Gas Light", varenr: "01109", imgSrc: "/static/images/kosangas-10kg-light.jpg", weight: 10 },
          { name: "6 kg Kosan Gas Alu", varenr: "01060", imgSrc: "/static/images/kosangas-6kg-alu.jpg", weight: 6 },
          { name: "5 kg Kosan Gas Light", varenr: "01059", imgSrc: "/static/images/kosangas-5kg-light.jpg", weight: 5 },
          { name: "5 kg Kosan Gas Click-on", varenr: "01050", imgSrc: "/static/images/kosangas-5kg-click-on.webp", weight: 5 },
          { name: "2 kg Kosan Gas", varenr: "01021", imgSrc: "/static/images/kosangas-2kg.webp", weight: 2 },
          { name: "3 kg CGI", varenr: "01033", imgSrc: "/static/images/kosangas-3kg-CGI.jpg", weight: 3 }
        ].map((product) => (
          <ProductCard
            key={product.varenr}
            name={product.name}
            alt={product.name}
            varenr={product.varenr}
            imgSrc={product.imgSrc}
            inputName={product.name}
            weight={product.weight}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </div>
      <div className="bg-gray-100 p-6 text-center my-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Totalvægt: <span className="text-blue-600">{totalWeight} kg</span>
        </h2>
        <p className="mt-4 text-gray-700">
          Bemærk: Ordrer under <span className="font-bold">100 kg</span>{" "}
          pålægges et gebyr på
          <span className="text-red-600 font-bold"> 350 kr.</span>
        </p>
      </div>
      <a href="#order-section" className="block text-center">
        <button
          type="button"
          className="bg-custom-green hover:bg-custom-green-hover text-white font-bold py-2 px-4 min-w-80 rounded focus:outline-none focus:shadow-outline"
        >
          Udfyld bestilling
        </button>
      </a>

      <div
        id="order-section"
        className="max-w-lg m-4 mt-20 sm:mx-auto p-4 bg-white border border-gray-300 rounded"
      >
        <h2 className="text-2xl font-bold text-center">Dine oplysninger</h2>
        <div className="mb-4">
          <label
            htmlFor="companyName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Firmanavn
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            required
            className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="customerNumber"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Kundenummer
          </label>
          <input
            type="text"
            id="customerNumber"
            name="customerNumber"
            inputMode="numeric"
            className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="referenceNumber"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Reference nummer
          </label>
          <input
            type="text"
            id="referenceNumber"
            name="referenceNumber"
            inputMode="numeric"
            className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Telefon nummer
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            pattern="[0-9]+"
            required
            autoComplete="tel"
            className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Leveringsadresse
          </label>
          <input
            type="text"
            id="address"
            name="address"
            required
            className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="postalCode"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Postnummer
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            inputMode="numeric"
            required
            className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="city"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            By
          </label>
          <input
            type="text"
            id="city"
            name="city"
            required
            className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="terms"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            <input
              type="checkbox"
              id="terms"
              name="terms"
              required
              className="mr-2 leading-tight"
            />
            Jeg accepterer{" "}
            <a
              href="https://u7sqa0-8k.myshopify.com/policies/terms-of-service"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              handelsbetingelser
            </a>
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-custom-green hover:bg-custom-green-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Bestil Gas
        </button>
      </div>
    </form>
  );
};

export default CustomerForm;
