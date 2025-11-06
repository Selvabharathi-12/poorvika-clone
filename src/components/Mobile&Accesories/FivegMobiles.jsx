import React from 'react'
import image from  './assets/Vivo-X200-FE-co-engineered-with-zeiss-image-pro-packed.webp'
import img1 from './assets/Oppo-f29-pro-5g-shop-now-mobiles-W.webp'
import img2 from './assets/OnePlus-13s-5G-shop-now-mobiles-W.webp'
import img3 from './assets/Realme-GT-7-5G-Shop-Now-Mobiles-W.webp'
import img4 from './assets/Vivo-V60-5G-Pre-Book-Mobiles-w.webp'
function FivegMobiles() {
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

export default FivegMobiles