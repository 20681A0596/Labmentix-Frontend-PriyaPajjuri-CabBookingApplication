function DriverCard({ driver }) {

    return (

        <div style={{
            background:"#1a1a24",
            border:"1px solid rgba(255,255,255,0.08)",
            padding:"18px",
            marginTop:"15px",
            borderRadius:"12px",
            color:"#f0f0f0"
        }}>

            <h3 style={{marginBottom:"10px"}}>
                🚗 Driver Assigned
            </h3>

            <p>
                <b>Name:</b> {driver.name}
            </p>

            <p>
                <b>Vehicle:</b> {driver.vehicle}
            </p>

            <p>
                <b>Number:</b> {driver.vehicleNumber}
            </p>

            <p>
                <b>Rating:</b> ⭐ {driver.rating}
            </p>

            <p>
                <b>Status:</b> {driver.status}
            </p>

        </div>

    )

}

export default DriverCard