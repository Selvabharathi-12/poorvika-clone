import React from 'react'
import img1 from './assets/Vivo-Web-view.webp'
import img3 from './assets/Samsung-Web-view.webp'
import img2 from  './assets/Oppo-Web-vieW.webp'
import img4 from './assets/Nothing-web-vieW.webp'
import image from './assets/Samsung-S25-banner.webp'
function TopBrands() {
   return (
     <div className="container-fluid px-3 my-4">
       <div className="row g-2">
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

export default TopBrands