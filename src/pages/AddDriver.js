import { useState } from "react";
import Navbar from "../components/Navbar";


function AddDriver(){

    const [name,setName] = useState("");
    const [vehicle,setVehicle] = useState("");
    const [number,setNumber] = useState("");

    const addDriver = ()=>{

        const newDriver = {

            name,
            vehicle,
            vehicleNumber:number,
            rating:5,
            status:"Available"

        };

        const drivers =
            JSON.parse(localStorage.getItem("drivers")) || [];

        drivers.push(newDriver);

        localStorage.setItem("drivers",JSON.stringify(drivers));

        alert("Driver Added Successfully");

    };

    return(

        <div>

            <Navbar/>

            <div style={{marginTop:"100px",textAlign:"center"}}>

                <h2>Add Driver</h2>

                <br/>

                <input
                    placeholder="Driver Name"
                    onChange={(e)=>setName(e.target.value)}
                />

                <br/><br/>

                <input
                    placeholder="Vehicle Type"
                    onChange={(e)=>setVehicle(e.target.value)}
                />

                <br/><br/>

                <input
                    placeholder="Vehicle Number"
                    onChange={(e)=>setNumber(e.target.value)}
                />

                <br/><br/>

                <button onClick={addDriver}>
                    Add Driver
                </button>

            </div>

        </div>

    )

}

export default AddDriver