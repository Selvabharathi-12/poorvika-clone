import React, { useState } from "react";
import Bestlaptop from "./Bestlaptop";
import Desktoppc from "./Desktoppc";
import Ipad from "./Ipad";
import LaptopAccessories from "./LaptopAccessories";

function Laptophome() {
  const [activeSection, setActive] = useState("bestlaptop");

  const navItems = [
    { key: "bestlaptop", label: "Best Laptops" },
    { key: "desktop", label: "Desktop PC" },
    { key: "ipad", label: "iPad & Tablets" },
    { key: "accessories", label: "Accessories" },
  ];

  return (
    <div className="w-100">
      {/* 🔹 Section Header (with side margins) */}
      <div
        className="container-fluid px-4"
        style={{
          marginLeft: "20px",
          marginRight: "20px",
          marginBottom: "0px",
          paddingBottom: "0px",
        }}
      >
        <div className="row align-items-center border-bottom pb-2">
          {/* Left Heading */}
          <div className="col-lg-3 col-md-4 col-sm-12">
            <h5
              className="fw-bold mb-0"
              style={{
                fontSize: "20px",
                letterSpacing: "0.5px",
                color: "rgb(255, 82, 37)",
              }}
            >
              Laptop & Tablets
            </h5>
          </div>

          {/* Right Navigation */}
          <div className="col-lg-9 col-md-8 col-sm-12">
            <div
              className="d-flex justify-content-end flex-wrap"
              style={{ gap: "50px", fontWeight: "600", fontSize: "16px" }}
            >
              {navItems.map((item) => (
                <span
                  key={item.key}
                  onClick={() => setActive(item.key)}
                  style={{
                    cursor: "pointer",
                    color: activeSection === item.key ? "#f68b1e" : "#000",
                    borderBottom:
                      activeSection === item.key
                        ? "2px solid #f68b1e"
                        : "none",
                    paddingBottom: "4px",
                    transition: "all 0.2s ease-in-out",
                  }}
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Content Section (no outer margin — full width) */}
      <div
        style={{
          margin: 0,
          paddingTop: "0px",
          
        }}
      >
        {activeSection === "bestlaptop" && <Bestlaptop />}
        {activeSection === "desktop" && <Desktoppc />}
        {activeSection === "ipad" && <Ipad />}
        {activeSection === "accessories" && <LaptopAccessories />}
      </div>
    </div>
  );
}

export default Laptophome;
