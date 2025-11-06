import Home from "./components/Home"
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import MobilePage from "./components/MobilePage";
const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
    
  },
  {
    path:"/Mobiles",
    element:<MobilePage/>,
  }
])
function App() {
  return(

    <>
    <RouterProvider router={router}/>
     
     </>
  )
}

export default App
