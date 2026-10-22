import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"

function Dashboard(){

    const navigate = useNavigate()

    return(

        <div>

            <Navbar/>

            <div style={{padding:"40px"}}>

                <h1>Welcome to RideX</h1>

                <p>Book your ride instantly</p>

                <button
                    onClick={()=>navigate("/book")}
                    style={{
                        padding:"12px",
                        background:"#facc15",
                        border:"none",
                        marginTop:"20px"
                    }}
                >

                    Book Ride 🚕

                </button>

            </div>

        </div>

    )

}

export default Dashboard