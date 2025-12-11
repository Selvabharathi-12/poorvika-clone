import React, { useState } from "react";
import logo from "./assets/Poorvika-english-logo.svg";
import { BsSearch } from "react-icons/bs";
import Location  from "./Location";
function Headertop() {
  const[locationClicked,SetlocationClicked]=useState(false)
  return (
    <>
  
    <div
      style={{
        background: "linear-gradient(180deg, #ff7631 0%, #ff4b23 100%)",
        height: "43px",
        width: "100%",
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        boxSizing:"content-box",
        lineHeight:"inherit",
        padding:"0px 15px"
      }}
    >
      
      <div
        style={{
          width: "1215px",
          height: "43px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
       
        <div style={{ display: "flex", alignItems: "center", height: "43px" }}>
         
          <img
            src={logo}
            alt="Poorvika Logo"
            style={{
              width: "175px",
              height: "31px",
              display: "block",
            }}
          />

          
          <div
            style={{
              width: "501px",
              height: "35px",
              position: "relative",
              marginLeft: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              placeholder="Search for Product, Brands, Offers..."
              style={{
                width: "451px",
                height: "35px",
                borderRadius: "23px",
                border: "none",
                outline: "none",
                padding: "0 40px 0 15px", 
                fontSize: "14px",
                fontWeight: "400",
                color: "#000",
                backgroundColor: "#fff",
                boxShadow: "0 0 3px rgba(0,0,0,0.1)",
              }}
            />
          </div>
        </div>

        <div
          style={{
            width: "501px",
            // height: "43px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "white",
            // fontWeight: 500,
            fontSize: "14px",
          }}
        >
          <div
            style={{
              width: "112px",
              height: "43px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
           <div onClick={()=>SetlocationClicked(true)} style={{display:"block"}}>
            <div> Delivery to</div>
            <div>Perambalur</div>
            <i></i>
              {<Location clicking={locationClicked} onClose={() => SetlocationClicked(false)}/>}
           </div>
          </div>

          <div
            style={{
              width: "112px",
              height: "43px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            Locate
          </div>

          <div
            style={{
              width: "112px",
              height: "43px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            Cart
          </div>

          <div
            style={{
              width: "112px",
              height: "43px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            Account
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Headertop;
