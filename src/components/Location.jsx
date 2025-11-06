import React, { useState } from 'react'
import img from './assets/pincode_request.jpg'
function Location({ clicking, onClose}) {
  const[clicked,Setclicked]=useState(true)
  if(!clicking) return null;
  const newLocal = "100%";
  return (
    < >
  {clicked&&<form>
    <div style={{position:"absolute",left:"50%",width:"40%",
    zIndex:999,
    transform:"translate(-70%,10%)",
    backgroundColor:"white",
    backfaceVisibility:"hidden",
    height:"250px",
    borderWidth:"10px solid black",
   
    }}>
       <button onClick={()=>{onClose}} style={{marginRight:"0px",   position: "absolute",
            top: "10px",
            right: "15px",
            background: "none",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
            color: "#555", display:"block",}} >x</button>
      <img src={img} style={{width:"100px",  width: "50%",
              borderRadius: "8px",}} alt="" />
      <div style={{textAlign:"center"}}>
        <div style={{color:"#ff7631",fontWeight:"bold"}}>Help us to serve you better</div>
        <div style={{color:"black",display:"flex"}}>Enter your delivery pincode to check nearest stores,
          product availability & faster delivery options</div>
      </div>

     
      </div>
    
    </form>}
  
    </>
  )
}

export default Location