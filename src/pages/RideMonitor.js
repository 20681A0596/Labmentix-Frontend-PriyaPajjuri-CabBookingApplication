import Navbar from "../components/Navbar";

function RideMonitor(){

    const rides = JSON.parse(localStorage.getItem("rides")) || [];

    return(

        <div>

            <Navbar/>

            <div style={{marginTop:"80px",padding:"20px"}}>

                <h2>Ride Monitor</h2>

                {rides.length===0 ? (

                    <p>No rides yet</p>

                ) : (

                    rides.map((ride,i)=>(
                        <div key={i}>

                            <p>{ride.pickupText} → {ride.dropText}</p>
                            <p>Fare ₹{ride.fare}</p>

                            <hr/>

                        </div>
                    ))

                )}

            </div>

        </div>

    )

}

export default RideMonitor