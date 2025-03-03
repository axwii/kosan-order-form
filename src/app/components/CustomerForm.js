"use client";
import React, { useState, useRef } from "react";
import ProductCard from "./ProductCard";
import FormInput from "./FormInput";
import FormSection from "./FormSection";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CustomerForm.css";

const CustomerForm = () => {
  const [totalWeight, setTotalWeight] = useState(0);
  const [quantities, setQuantities] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sliderRef = useRef(null);

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
    setIsSubmitting(true);
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
        setTotalWeight(0);
        setQuantities({});
      } else {
        alert("Failed to send order.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className="custom-dot">
        {i === 0 ? "Gasbestilling" : "Afhentning returflasker"}
      </div>
    ),
  };

  return (
    <form onSubmit={handleSubmit}>
      <Slider ref={sliderRef} {...settings}>
        <div id="form-section">
            <div className="max-w-5xl mx-auto p-4 bg-custom-green-active rounded-t-xl border border-b-0 border-gray-300 -mb-4">
              <h2 className="text-center text-xl font-bold mb-2 text-white">Gasbestilling</h2>
              <p className="text-center mb-2 text-white">Vælg de gasflasker, du ønsker at bestille.</p>
            </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 max-w-5xl mx-auto p-4 bg-white rounded-xl border border-gray-300">
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
        </div>
        <div>
          <div className="max-w-5xl mx-auto p-4 bg-cutom-red rounded-t-xl border border-b-0 border-gray-300 -mb-4">
              <h2 className="text-center text-xl font-bold mb-2 text-white">Afhentning returflasker</h2>
              <p className="text-center mb-2 text-white">Angiv de returflasker, du vil have afhentet.</p>
            </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 max-w-5xl mx-auto p-4 rounded-xl border border-gray-300 bg-white">
            {[
              { name: "33 kg Kosan Gas Afhentning", varenr: "01330", imgSrc: "/static/images/kosangas-33kg.webp", weight: 0 },
              { name: "22 kg Kosan Gas Afhentning", varenr: "01220", imgSrc: "/static/images/kosangas-22kg.jpg", weight: 0 },
              { name: "11 kg Kosan Gas Alu Truck Afhentning", varenr: "01112", imgSrc: "/static/images/kosangas-11kg-alu-truck.webp", weight: 0 },
              { name: "11 kg Kosan Gas Click-on Afhentning", varenr: "01110", imgSrc: "/static/images/kosangas-11kg-click-on.jpg", weight: 0 },
              { name: "10 kg Kosan Gas Light Afhentning", varenr: "01109", imgSrc: "/static/images/kosangas-10kg-light.jpg", weight: 0 },
              { name: "6 kg Kosan Gas Alu Afhentning", varenr: "01060", imgSrc: "/static/images/kosangas-6kg-alu.jpg", weight: 0 },
              { name: "5 kg Kosan Gas Light Afhentning", varenr: "01059", imgSrc: "/static/images/kosangas-5kg-light.jpg", weight: 0 },
              { name: "5 kg Kosan Gas Click-on Afhentning", varenr: "01050", imgSrc: "/static/images/kosangas-5kg-click-on.webp", weight: 0 },
              { name: "2 kg Kosan Gas Afhentning", varenr: "01021", imgSrc: "/static/images/kosangas-2kg.webp", weight: 0 },
              { name: "3 kg CGI Afhentning", varenr: "01033", imgSrc: "/static/images/kosangas-3kg-CGI.jpg", weight: 0 }
            ].map((product) => (
              <ProductCard
                key={product.varenr + "-pickup"}
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
        </div>
      </Slider>

      <div className="bg-gray-100 p-6 text-center my-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Totalvægt: <span className="text-blue-600">{totalWeight} kg</span>
        </h2>
        <p className="mt-4 text-gray-700">
          <span className="text-red-600 font-bold"> Bemærk:</span> Alle bestillinger skal afgives inden kl. 12:00
        </p>
      </div>
      {/* <a href="#form-section" className="block text-center mb-4">
        <button
          type="button"
          onClick={() => sliderRef.current.slickNext()}
          className="bg-custom-green hover:bg-custom-green-hover text-white font-bold py-2 px-4 min-w-80 rounded focus:outline-none focus:shadow-outline mt-4"
        >
          Bestil afhentning af flasker
        </button>
      </a> */}
      <a href="#order-section" className="block text-center xl:hidden">
        <button
          type="button"
          className="bg-custom-green hover:bg-custom-green-hover text-white font-bold py-2 px-4 min-w-80 rounded focus:outline-none focus:shadow-outline"
        >
          Udfyld bestilling
        </button>
      </a>

      <FormSection title="Dine oplysninger">
        <FormInput label="Firmanavn" id="companyName" name="companyName" required />
        <FormInput label="Email" id="email" name="email" type="email" required autoComplete="email" />
        <FormInput label="Kundenummer" id="customerNumber" name="customerNumber" inputMode="numeric" />
        <FormInput label="Reference nummer" id="referenceNumber" name="referenceNumber" inputMode="numeric" />
        <FormInput label="Kontakt person" id="contactName" name="contactName" />
        <FormInput label="Kontakt telefonnummer" id="phoneNumber" name="phoneNumber" type="tel" pattern="[0-9]+" required autoComplete="tel" />
        <FormInput label="Leveringsadresse" id="address" name="address" required />
        <FormInput label="Postnummer" id="postalCode" name="postalCode" inputMode="numeric" required />
        <FormInput label="By" id="city" name="city" required />
        <div className="mb-4">
          <label htmlFor="comments" className="block text-gray-700 text-sm font-bold mb-2">
            Kommentarer
          </label>
          <textarea
            id="comments"
            name="comments"
            rows="3"
            className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="terms" className="block text-gray-700 text-sm font-bold mb-2">
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
          disabled={isSubmitting}
        >
          Gennemfør bestilling
        </button>
      </FormSection>
    </form>
  );
};

export default CustomerForm;