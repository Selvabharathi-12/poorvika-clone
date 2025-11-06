import React from 'react'
import img1 from './assets/Ipad-WEB.webp'
import img2 from './assets/apple-ipad-pro-web.webp'
import img3 from './assets/Ipad-air.webp'
import img4 from './assets/Tablets-Web.webp'
import image from './assets/Work-play-learn-All-on-one-Device.webp'
function Ipad() {
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

export default Ipad