import React from 'react'
import img1 from './assets/Macbooks-2608801.webp'
import img2 from './assets/2-in-1-laptop-w.png'
import img3 from './assets/Gaming-Laptop-2608815.webp'
import img4 from './assets/Windows-Laptop-2608843.webp'
import image from './assets/Macbook-Air-M4-Web-2025.webp'
function Bestlaptop() {
  return (
     <div className="container-fluid px-3 my-4">
       <div className="row g-2">
         {/* Left side: 4 images (2x2 grid) */}
         <div className="col-md-6">
           <div className="row g-2">
             {[img1, img2, img3, img4].map((img, index) => (
               <div className="col-6" key={index}>
                 <img
                   src={img}
                   alt={`bestseller-${index}`}
                   className="img-fluid w-100 h-100"
                   style={{
                     objectFit: "contain",
                   }}
                 />
               </div>
             ))}
           </div>
         </div>
 
         {/* Right side: Single big image */}
         <div className="col-md-6">
           <img
             src={image}
             alt="featured"
             className="img-fluid w-100 h-100"
             style={{
               objectFit: "contain",
             }}
           />
         </div>
       </div>
     </div>
   );
}

export default Bestlaptop