import React, { useState } from "react";
import BestSeller from "./BestSeller";
import FivegMobiles from "./FivegMobiles";
import TopBrands from "./TopBrands";
import Accessories from "./MobileAccessories";

function Mobilehome() {
  const [activeSection, setActive] = useState("bestseller");

  const navItems = [
    { key: "bestseller", label: "Best Seller" },
    { key: "fiveg", label: "5G Mobiles" },
    { key: "topbrands", label: "Top Brands" },
    { key: "accessories", label: "Accessories" },
  ];

  return (
    <div className="w-100">
      
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
          <div className="col-lg-3 col-md-4 col-sm-12">
            <h5
              className="text-warning fw-bold mb-0"
              style={{
                fontSize: "20px",
                letterSpacing: "0.5px",
              }}
            >
              <span style={{ color: "rgb(255, 82, 37)" }}>
                Mobile & Accessories
              </span>
            </h5>
          </div>

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

      <div   style={{ margin: 0, paddingTop: "0px", marginLeft: "-20px",  
    marginRight: "-20px",   }}>
        {activeSection === "bestseller" && <BestSeller />}
        {activeSection === "fiveg" && <FivegMobiles />}
        {activeSection === "topbrands" && <TopBrands />}
        {activeSection === "accessories" && <Accessories />}
      </div>
    </div>
  );
}

export default Mobilehome;
