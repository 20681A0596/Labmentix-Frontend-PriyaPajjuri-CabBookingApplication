import { useState } from "react"
import MapComponent from "../components/MapComponent"
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom"

function BookRide(){

    const navigate = useNavigate()

    const [pickup,setPickup] = useState(null)
    const [drop,setDrop] = useState(null)

    const [pickupText,setPickupText] = useState("")
    const [dropText,setDropText] = useState("")

    const [fare,setFare] = useState(null)
    const [distance,setDistance] = useState(null)

    const [carType,setCarType] = useState("Mini")

    const carPricing = {
        Mini:40,
        Sedan:65,
        SUV:80,
        XL:100
    }

    const searchLocation = async(text,setLocation)=>{

        const res = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${text}`
        )

        const data = await res.json()

        if(data.length>0){

            setLocation({
                lat:parseFloat(data[0].lat),
                lng:parseFloat(data[0].lon)
            })

        }

    }

    const calculateFare = ()=>{

        if(!pickup || !drop) return

        const dx = pickup.lat - drop.lat
        const dy = pickup.lng - drop.lng

        const dist = Math.sqrt(dx*dx + dy*dy) * 111

        setDistance(dist)

        const price = Math.round(dist * carPricing[carType])

        setFare(price)

    }

    return(

        <div>

            <Navbar/>

            <div style={{display:"flex"}}>

                <div style={{
                    width:"350px",
                    padding:"20px",
                    background:"#111827",
                    color:"white",
                    height:"100vh"
                }}>

                    <h2>Book Ride</h2>

                    <input
                        placeholder="Pickup location"
                        value={pickupText}
                        onChange={(e)=>setPickupText(e.target.value)}
                        onKeyDown={(e)=>{
                            if(e.key==="Enter"){
                                searchLocation(pickupText,setPickup)
                            }
                        }}
                        style={{width:"100%",padding:"10px",marginBottom:"10px"}}
                    />

                    <input
                        placeholder="Drop location"
                        value={dropText}
                        onChange={(e)=>setDropText(e.target.value)}
                        onKeyDown={(e)=>{
                            if(e.key==="Enter"){
                                searchLocation(dropText,setDrop)
                            }
                        }}
                        style={{width:"100%",padding:"10px"}}
                    />

                    <h3>Select Car</h3>

                    <select
                        value={carType}
                        onChange={(e)=>setCarType(e.target.value)}
                        style={{width:"100%",padding:"10px",marginBottom:"10px"}}
                    >

                        <option value="Mini">Mini (4 seats)</option>
                        <option value="Sedan">Sedan (4 seats)</option>
                        <option value="SUV">SUV (6 seats)</option>
                        <option value="XL">XL (8 seats)</option>

                    </select>

                    <button
                        onClick={calculateFare}
                        style={{
                            padding:"10px",
                            width:"100%",
                            background:"#2563eb",
                            color:"white",
                            border:"none",
                            marginTop:"10px"
                        }}
                    >
                        Calculate Fare
                    </button>

                    {fare && (

                        <div style={{marginTop:"20px"}}>

                            <p>Distance: {distance.toFixed(2)} km</p>

                            <p style={{fontSize:"18px"}}>
                                Estimated Fare: ₹{fare}
                            </p>

                            <button
                                onClick={()=>navigate("/live-track")}
                                style={{
                                    width:"100%",
                                    padding:"12px",
                                    background:"#22c55e",
                                    border:"none",
                                    marginTop:"10px"
                                }}
                            >
                                Confirm Ride
                            </button>

                        </div>

                    )}

                </div>

                <div style={{flex:1,padding:"20px"}}>

                    <MapComponent
                        pickup={pickup}
                        drop={drop}
                        setPickup={setPickup}
                        setDrop={setDrop}
                    />

                </div>

            </div>

        </div>

    )

}

export default BookRide