import { Link } from "react-router-dom";

function Navbar(){

    return(

        <nav style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            padding:"18px 40px",
            background:"#0a0a0f",
            borderBottom:"1px solid rgba(255,255,255,0.07)"
        }}>

            <div style={{
                fontWeight:"800",
                fontSize:"24px",
                color:"white"
            }}>
                Ride<span style={{color:"#f5c842"}}>X</span>
            </div>

            <div style={{display:"flex",gap:"20px"}}>

                <Link style={{color:"white",textDecoration:"none"}} to="/book">
                    Book Ride
                </Link>

                <Link style={{color:"white",textDecoration:"none"}} to="/live-track">
                    Live Track
                </Link>

                <Link style={{color:"white",textDecoration:"none"}} to="/history">
                    My Rides
                </Link>

            </div>

        </nav>

    )
}

export default Navbar
