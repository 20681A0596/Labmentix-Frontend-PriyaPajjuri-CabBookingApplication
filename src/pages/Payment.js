import { useState,useEffect } from "react"
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom"

function Payment(){

    const [method,setMethod]=useState("UPI")
    const [time,setTime]=useState(300)

    const navigate = useNavigate()

    const price = 327

    useEffect(()=>{

        const timer=setInterval(()=>{
            setTime(prev=>prev>0?prev-1:0)
        },1000)

        return()=>clearInterval(timer)

    },[])

    return(

        <div>

            <Navbar/>

            <div style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                height:"80vh"
            }}>

                <div style={{
                    background:"#13131a",
                    padding:"35px",
                    borderRadius:"16px",
                    width:"320px",
                    textAlign:"center"
                }}>

                    <h2>Payment</h2>

                    <h3 style={{color:"#facc15"}}>₹ {price}</h3>

                    <div style={{
                        display:"flex",
                        gap:"10px",
                        marginTop:"15px"
                    }}>

                        <button
                            onClick={()=>setMethod("UPI")}
                            style={{
                                flex:1,
                                padding:"10px",
                                background:method==="UPI"?"#22c55e":"#1f2937",
                                border:"none",
                                color:"white",
                                borderRadius:"8px"
                            }}
                        >
                            UPI
                        </button>

                        <button
                            onClick={()=>setMethod("Cash")}
                            style={{
                                flex:1,
                                padding:"10px",
                                background:method==="Cash"?"#22c55e":"#1f2937",
                                border:"none",
                                color:"white",
                                borderRadius:"8px"
                            }}
                        >
                            Cash
                        </button>

                    </div>

                    {method==="UPI" &&(

                        <div style={{marginTop:"20px"}}>

                            <img
                                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=RideX"
                                style={{background:"white",padding:"10px",borderRadius:"10px"}}
                            />

                            <p>Scan & Pay using UPI</p>

                            <p style={{color:"#facc15"}}>Timer: {time} sec</p>

                        </div>

                    )}

                    {method==="Cash" &&(

                        <p style={{marginTop:"20px"}}>
                            Pay driver with cash
                        </p>

                    )}

                    <button
                        onClick={()=>navigate("/history")}
                        style={{
                            marginTop:"20px",
                            width:"100%",
                            padding:"12px",
                            background:"#22c55e",
                            border:"none"
                        }}
                    >
                        Confirm Payment
                    </button>

                </div>

            </div>

        </div>

    )

}

export default Payment