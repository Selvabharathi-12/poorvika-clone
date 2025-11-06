import React from 'react'
import img1 from './assets/printers-web.webp'
import img2 from './assets/mouse-keyboards.webp'
import img3 from './assets/Charger-adapters-web.webp'
import img4 from './assets/Storage-devices-web.webp'
import image from './assets/Mobile-tab.webp'
function LaptopAccessories() {
  return (
    <div className="container-fluid px-3 my-4">
         <div className="row g-2">
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
          
         </div>
       </div>
  )
}

export default LaptopAccessories