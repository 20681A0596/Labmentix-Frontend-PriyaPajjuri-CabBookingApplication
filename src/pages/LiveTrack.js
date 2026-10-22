import { useEffect,useState } from "react"
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom"

function LiveTrack(){

    const [driver,setDriver]=useState(null)
    const navigate = useNavigate()

    useEffect(()=>{

        setTimeout(()=>{

            setDriver({

                name:"Ramesh",
                vehicle:"Swift Dzire",
                number:"TN07AB1234",
                rating:4.8

            })

        },3000)

    },[])

    return(

        <div>

            <Navbar/>

            <div style={{padding:"40px"}}>

                <h2>Ride Tracking</h2>

                {!driver && <p style={{color:"#facc15"}}>Searching for driver...</p>}

                {driver && (

                    <div style={{
                        background:"#1f2937",
                        padding:"20px",
                        borderRadius:"10px",
                        width:"300px"
                    }}>

                        <h3>🚗 Driver Assigned</h3>

                        <p>Name: {driver.name}</p>
                        <p>Vehicle: {driver.vehicle}</p>
                        <p>Number: {driver.number}</p>
                        <p>⭐ {driver.rating}</p>

                    </div>

                )}

                <button
                    onClick={()=>navigate("/payment")}
                    style={{
                        marginTop:"20px",
                        padding:"12px",
                        background:"#22c55e",
                        border:"none"
                    }}
                >
                    Reached Destination
                </button>

            </div>

        </div>

    )

}

export default LiveTrack