import React from 'react'
import ads1 from './assets/samsung-galaxy-z-flip-series-hp-wv.webp'
import ads2 from './assets/samsung-galaxy-z-fold-series-hp-wv.webp'
import ads3 from './assets/Google-Pixel-10-Web-2025.webp'

function HeaderMiddle() {
  return (
   <div
  id="headermiddle"
  style={{
    display: "flex",             
    justifyContent: "center",    
    alignItems: "center",         
    width: "100vw",            
    height: "auto",             
    overflow: "hidden",          
  }}
>
  <img
    src={ads1}
    alt="image"
    style={{
      width: "33.33%",            // divide width equally among 3
      objectFit: "cover",         // fills neatly without distortion
    }}
  />
 
  <img
    src={ads3}
    alt="loading"
    style={{
      width: "33.33%",
      objectFit: "cover",
    }}
  />
   <img
    src={ads2}
    alt="loading"
    style={{
      width: "33.33%",
      objectFit: "cover",
    }}
  />
</div>

  )
}

export default HeaderMiddle