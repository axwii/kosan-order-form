import React from "react";

const FormSection = ({ title, children }) => (
  <div id="order-section" className="max-w-lg m-4 mt-10 sm:mx-auto p-4 bg-white border border-gray-300 rounded">
    <h2 className="text-2xl font-bold text-center">{title}</h2>
    {children}
  </div>
);

export default FormSection;