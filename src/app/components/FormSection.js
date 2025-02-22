import React from "react";

const FormSection = ({ title, children }) => (
  <div className="max-w-lg m-4 mt-20 sm:mx-auto p-4 bg-white border border-gray-300 rounded">
    <h2 className="text-2xl font-bold text-center">{title}</h2>
    {children}
  </div>
);

export default FormSection;