"use client";
import React, { useState } from "react";

const ProductDetails = () => {
  const [content, setContent] = React.useState("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius maiores sed sit laboriosam vitae voluptas fuga ratione voluptatem facilis nihil, culpa tempora aut, delectus fugiat maxime inventore, temporibus labore harum!");
  const [activeTab, setActiveTab]= useState("Description");
  return (
    <>
      <div className="flex flex-col gap-6 w-full max-w-3xl">
        <div className="flex bg-gray-500/13 rounded-sm p-1 justify-center">
          <button className={`flex-1 rounded-sm ${activeTab === "Description" ? "h-10 bg-white " : ""} focus:ring-2`} onClick={()=> setActiveTab("Description")}>Description</button>
          <button className={`flex-1 rounded-sm ${activeTab === "Additional Information" ? "h-10 bg-white " : ""} focus:ring-2`} onClick={()=> setActiveTab("Additional Information")}>Additional Information</button>
          <button className={`flex-1 rounded-sm ${activeTab === "Reviews" ? "h-10 bg-white " : ""} focus:ring-2`} onClick={()=> setActiveTab("Reviews")}>Reviews</button>
        </div>
        <div className="mb-14">{content}</div>
      </div>
    </>
  );
};

export default ProductDetails;
