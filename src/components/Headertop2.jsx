import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
function Headerbottom() {
  const [menuItems, setMenuItems] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const[clicked,Setclicked]=useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/categories")
      .then((res) => setMenuItems(res.data))
      .catch((err) => console.error("Error fetching menu items:", err));
  }, []);

  if (!menuItems.length) return null;

  return (
    <div
      style={{
        backgroundColor: "#fff",display: "flex",alignItems: "center",justifyContent: "space-evenly",boxShadow:" 0 1px 5px #00000029", position: "fixed",top: "43px",left: 0, right: 0,fontWeight: 400,padding:"0px 65px"}}
    > {menuItems.map((item, index) => (
         <div key={index} style={{ color:clicked===index?"rgb(255, 122, 0)":"black",cursor: "pointer",padding: "10px",
            margin:"4px", gap:"20px",fontSize:"15px", display:"block"}}
             onMouseEnter={()=>{Setclicked(index),setHoveredIndex(index)}}
             onMouseLeave={()=>(Setclicked(null),setHoveredIndex(null))}
           > <div style={{fontWeight:"bold"}}>{item.title}{item.title==="mobiles"}</div>
          {hoveredIndex === index && item.groups && (
            <div style={{ position: "absolute",
                
                backgroundColor: "#f2f2f2",
              
                padding: "10px",
                width: "90vw",
                height:"auto",
                columns: 6,
                columnGap: "40px",
                // columnRule: "1px solid #f0f0f0",
                // textAlign: "left",
                // display:"none",
                left:0,
                right:0,
                margin:"auto",
    //              display: "grid",
    // gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", // auto adjust
    // gap: "20px",
               }}>
              {Object.values(item.groups).map((group, i) => (
                <div
                  key={i}
                  style={{
                   color:"rgb(96, 96, 96)"
                  }}
                >
                 
                       <Link to={"/"+ group.name} style={{
                      // fontWeight: "bold",
                      color: "#f7931e",
                      marginBottom: "6px",
                      textDecoration:"none"
                    }}>{group.name}</Link>               
                  

                  {/* items under each group */}
                  <div style={{ marginLeft: "10px" }}>
                    {Array.isArray(group.items)
                      ? group.items.map((sub, j) => (
                          <div
                            key={j}
                            style={{
                              display: "block",
                              lineHeight: "1.6",
                              fontSize: "15px",
                            }}
                          >
                            {sub}
                          </div>
                        ))
                      : group.items &&
                        Object.values(group.items).map((subGroup, k) => (
                          <div key={k} style={{ marginBottom: "4px" }}>
                            <span
                              style={{
                                display: "block",
                                // fontWeight: 500,
                                fontSize: "15px",
                              }}
                            >
                              {subGroup.name}
                            </span>
                            {subGroup.subitems && (
                              <div style={{ marginLeft: "12px" , color:"rgb(96, 96, 96)"}}>
                                {subGroup.subitems.map((s, m) => (
                                  <div
                                    key={m}
                                    style={{
                                      display: "block",
                                      lineHeight: "1.5",
                                      fontSize: "15px",
                                    }}
                                  >
                                    {s}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Headerbottom;
