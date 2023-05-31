import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";




export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
              
            },
            {
                path:'/serviceDetails/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
              
            },
            {
                path:'/registration',
                element:<Registration></Registration>
                
              
            },
            {
                path:'/login',
                element:<Login></Login>
                
              
            }
           
            
        ]
    }
])