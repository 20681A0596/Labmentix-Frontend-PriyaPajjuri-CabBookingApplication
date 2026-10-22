import Navbar from "../components/Navbar"

function RideHistory(){

    const rides = [
        {
            driver:"Ramesh",
            car:"Swift Dzire",
            price:245,
            date:"Today"
        }
    ]

    return(

        <div>

            <Navbar/>

            <div style={{padding:"40px"}}>

                <h2>Ride History</h2>

                {rides.map((ride,index)=>(

                    <div
                        key={index}
                        style={{
                            background:"#1f2937",
                            padding:"20px",
                            borderRadius:"10px",
                            marginTop:"10px",
                            width:"300px"
                        }}
                    >

                        <p><b>Driver:</b> {ride.driver}</p>
                        <p><b>Car:</b> {ride.car}</p>
                        <p><b>Fare:</b> ₹{ride.price}</p>
                        <p>{ride.date}</p>

                    </div>

                ))}

            </div>

        </div>

    )

}

export default RideHistory