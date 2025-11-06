// 
import React, { useState } from "react";
import img1 from "./assets/mobilenavbar.webp";
import img2 from "./assets/laptopnavbar.webp";
import img3 from "./assets/tvnavbar.webp";
import img4 from "./assets/kitchennavbar.webp";
import img5 from "./assets/homenavbar.webp";
import img6 from "./assets/smarttechnavbar.webp";
import img7 from "./assets/Personal-care-navbar.webp";

function MiddleNavbar() {
  const images = [
    { img: img1, label: "Mobile & Accessories" },
    { img: img2, label: "Laptops & Tablets" },
    { img: img3, label: "TV & Audio" },
    { img: img4, label: "Kitchen & Appliances" },
    { img: img5, label: "Home & Appliances" },
    { img: img6, label: "Smart Technology" },
    { img: img7, label: "Personal & Healthcare" },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 6;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Get 6 images starting from startIndex, wrapping around
  const visibleImages = Array.from({ length: visibleCount }).map(
    (_, i) => images[(startIndex + i) % images.length]
  );

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#fff",
        padding: "20px 0",
      }}
    >
      {/* Previous Button */}
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "15px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          fontSize: "20px",
          cursor: "pointer",
          zIndex: 2,
        }}
      >
        ‹
      </button>

      {/* Image Container */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "10px",
          width: "100%",
          transition: "transform 0.6s ease-in-out",
        }}
      >
        {visibleImages.map((item, index) => (
          <div
            key={index}
            style={{
              flex: "1",
              textAlign: "center",
              minWidth: `${100 / visibleCount}%`,
            }}
          >
            <img
              src={item.img}
              alt={item.label}
              style={{
                width: "100%",
                maxWidth: "150px",
                height: "auto",
                objectFit: "contain",
                margin: "0 auto",
              }}
            />
            <p
              style={{
                fontWeight: "bold",
                fontSize: "14px",
                marginTop: "10px",
              }}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "15px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          fontSize: "20px",
          cursor: "pointer",
          zIndex: 2,
        }}
      >
        ›
      </button>
    </div>
  );
}

export default MiddleNavbar;
