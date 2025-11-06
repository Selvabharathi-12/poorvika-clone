import React, { useState } from "react";
import img1 from "./assets/Kitchen-appliances-Turn-Everyday-cooking-into-a-masterpiece-up-to-off-W.webp";
import img2 from "./assets/Smart-Gadgets-Banner-Wb.webp";
import img3 from "./assets/PS5-FC-26-Web-View-1.webp";
import img4 from "./assets/Apple-MacBook-Pro-14-Supercharged-by-M5-Available-now-W-New.webp";

function Middlecarosel() {
  const images = [img1, img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "300px",
        overflow: "hidden",
      }}
    >
      {/* Image slider container */}
      <div
        style={{
          display: "flex",
          transition: "transform 1.5s ease-in-out",
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`slide-${i}`}
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              flexShrink: 0,
            }}
          />
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevImage}
        style={{
          position: "absolute",
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          cursor: "pointer",
        }}
      >
        ‹
      </button>

      {/* Next Button */}
      <button
        onClick={nextImage}
        style={{
          position: "absolute",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          cursor: "pointer",
        }}
      >
        ›
      </button>
    </div>
  );
}

export default Middlecarosel;
