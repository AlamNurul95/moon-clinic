import React, { useEffect, useState } from 'react';
import Banner from '../Shared/Banner/Banner';
import Services from '../Shared/Services/Services';
import AboutUs from '../Shared/AboutUs/AboutUs';
import Consultation from '../Shared/Consultation/Consultation';



const Home = () => {
    
    const [services,setServices]=useState([]);
    useEffect(()=>{
      fetch("http://localhost:5000/services/")
      .then(res=>res.json())
      .then(data=>setServices(data));
    },[]);

    
    return (
       
        <div>
            <Banner></Banner> 
            <div >
                {
                    services.map(service=><Services
                    key={service.id} service={service}></Services>)
                }
            </div>   
            <AboutUs></AboutUs>   
            <Consultation></Consultation>
        </div>

     
       
    );
}


export default Home;