import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import iphone17 from "./assets/Apple-iphone-17-black-512gb-Front-Back-View.png";
import samsungs25 from "./assets/Samsung-galaxy-s25-fe-5g-navy-8gb-512gb-Front-Back-View.webp";
import oppof31pro from "./assets/oppo-f31-pro-plus-5g-gemstone-blue-8gb-256gb-Front-Back-View.png";
import vivov60 from "./assets/Vivo-v60e-5g-elite-purple-12gb-256gb-Front-Back-View.webp";
import samsung7 from "./assets/Samsung-galaxy-z-fold-7-5g-blue-shadow-512gb-12gb-ram-Front-Back-Fold-View.png";
import vivoy31 from "./assets/Vivo-y31-pro-5g-dreamy-white-8gb-256gb-Front-View.png";
import apple17pro from "./assets/Apple-iPhone-17-Pro-Max-Cosmic-Orange-256GB-front-back-view.png";
import iphoneair from "./assets/Apple-iphone-air-light-gold-256gb-Front-Back-View.png";
import galaxya36 from "./assets/Samsung-galaxy-a36-5g-awesome-lime-8gb-128gb-Front-Back-View.png";
import oppof31 from "./assets/Oppo-f31-pro-5g-space-grey-8gb-256gb-Front-Back-View.png";

function Fivegmobilephones() {
  const phones = [
    { id: 1, name: "iPhone 17 (Black, 8GB / 256GB)", image: iphone17, color: "Phantom Black", variant: "8GB / 256GB", rupees: "₹1,02,099" },
    { id: 2, name: "Samsung Galaxy S25 FE (Blue, 8GB / 256GB)", image: samsungs25, color: "Blue Titanium", variant: "8GB / 256GB", rupees: "₹1,34,900" },
    { id: 3, name: "Oppo F31 Pro+ (Glacial, 12GB / 256GB)", image: oppof31pro, color: "Glacial White", variant: "12GB / 256GB", rupees: "₹64,999" },
    { id: 4, name: "Vivo V60E (Obsidian, 8GB / 128GB)", image: vivov60, color: "Obsidian", variant: "8GB / 128GB", rupees: "₹72,999" },
    { id: 5, name: "Samsung Z Fold 7 (Gray, 12GB / 512GB)", image: samsung7, color: "Titanium Gray", variant: "12GB / 512GB", rupees: "₹58,999" },
    { id: 6, name: "Vivo Y31 Pro (Silver, 8GB / 256GB)", image: vivoy31, color: "Mirage Silver", variant: "8GB / 256GB", rupees: "₹39,999" },
    { id: 7, name: "iPhone 17 Pro Max (Blue, 12GB / 512GB)", image: apple17pro, color: "Cosmic Blue", variant: "12GB / 512GB", rupees: "₹62,999" },
    { id: 8, name: "iPhone Air (Black, 8GB / 256GB)", image: iphoneair, color: "Volcanic Black", variant: "8GB / 256GB", rupees: "₹56,999" },
    { id: 9, name: "Samsung Galaxy A36 (Green, 12GB / 256GB)", image: galaxya36, color: "Vivid Green", variant: "12GB / 256GB", rupees: "₹45,999" },
    { id: 10, name: "Oppo F31 (Alpha, 16GB / 512GB)", image: oppof31, color: "Alpha", variant: "16GB / 512GB", rupees: "₹54,999" },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex < phones.length - 5) setStartIndex(startIndex + 1);
  };
  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  return (
    <div
      style={{
        width: "100vw",
        backgroundColor: "#fff",
        padding: "5px 0",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        className="d-flex justify-content-between align-items-center px-5 mb-3"
        style={{ width: "100%" }}
      >
        <h4 className="fw-bold m-0">5G Mobile Phones</h4>

        <div className="d-flex align-items-center gap-3">
          <span
            className="text-primary"
            style={{ cursor: "pointer", fontWeight: "500" }}
          >
            See All
          </span>
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={handlePrev}
            disabled={startIndex === 0}
          >
            <FaArrowLeft />
          </button>
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={handleNext}
            disabled={startIndex >= phones.length - 5}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Horizontal Slider */}
      <div
        style={{
          display: "flex",
          width: "calc(100vw + 254px)",
          transform: `translateX(-${startIndex * 254}px)`,
          transition: "transform 0.4s ease",
        }}
      >
        {phones.map((phone, index) => (
          <div
            key={phone.id}
            style={{
              width: "254px",
              height: "232px",
              flexShrink: 0,
              textAlign: "left",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              borderRight:
                index !== phones.length - 1 ? "1px solid #e0e0e0" : "none",
              boxShadow:
                phone.name.startsWith("Oppo F31 (Alpha, 16GB / 512GB)") // only Oppo F31 card effect
                  ? "0px 2px 8px rgba(0, 0, 0, 0.1)"
                  : "none",
              borderRadius: phone.name.startsWith("Oppo F31") ? "6px" : "0",
              backgroundColor: "#fff",
            }}
          >
            <img
              src={phone.image}
              alt={phone.name}
              style={{
                width: "100%",
                height: "130px",
                objectFit: "contain",
              }}
            />
            <h3
              style={{
                fontSize: "12px",
                fontWeight: "700",
                margin: "6px 0 2px 0",
                color: "#000000ff",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis", // truncate long names
                width: "100%",
              }}
              title={phone.name} // shows full name on hover
            >
              {phone.name}
            </h3>
            <p
              style={{
                fontSize: "12px",
                color: "#9e9e9e",
                margin: "0 0 3px 0",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "100%",
              }}
            >
              ({phone.variant}, {phone.color})
            </p>
            <p
              style={{
                color: "#f60",
                fontSize: "0.85rem",
                fontWeight: "600",
                margin: "0",
              }}
            >
              {phone.rupees}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fivegmobilephones;
