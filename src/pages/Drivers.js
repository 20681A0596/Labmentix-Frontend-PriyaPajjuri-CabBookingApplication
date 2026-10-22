import Navbar from "../components/Navbar";
import DriverCard from "../components/DriverCard";
import { useState } from "react";


function Drivers(){

    const [drivers,setDrivers] = useState(
        JSON.parse(localStorage.getItem("drivers")) || []
    );

    return(

        <div>

            <Navbar/>

            <div style={{marginTop:"80px",padding:"20px"}}>

                <h2>All Drivers</h2>

                {drivers.length===0 ? (

                    <p>No drivers added</p>

                ) : (

                    drivers.map((driver,i)=>(
                        <DriverCard key={i} driver={driver}/>
                    ))

                )}

            </div>

        </div>

    )

}

export default Drivers