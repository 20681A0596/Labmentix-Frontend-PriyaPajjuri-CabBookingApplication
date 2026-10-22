import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/authService";

function Login() {

    const navigate = useNavigate();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleLogin = async () => {

        try {

            const response = await loginUser({
                email,
                password
            });

            localStorage.setItem("token", response.data.token);

            /* FIX: redirect to booking page */
            const role=response.data.role;
            if (role === "ADMIN")
                navigate("/admin-dashboard");

            else navigate("/dashboard");
        }



         catch(error) {

            alert("Invalid credentials");

        }


    };

    return(

        <div style={{
            height:"100vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            background:"linear-gradient(135deg,#0f172a,#020617)",
            color:"white"
        }}>

            <div style={{
                width:"350px",
                padding:"40px",
                borderRadius:"12px",
                background:"#111827",
                boxShadow:"0px 10px 30px rgba(0,0,0,0.6)",
                textAlign:"center"
            }}>

                <h1 style={{
                    marginBottom:"10px",
                    color:"#facc15"
                }}>
                    RideX
                </h1>

                <p style={{color:"#9ca3af",marginBottom:"30px"}}>
                    Sign in to continue your ride
                </p>

                <input
                    type="email"
                    placeholder="Enter Email"
                    onChange={(e)=>setEmail(e.target.value)}
                    style={{
                        width:"100%",
                        padding:"12px",
                        marginBottom:"15px",
                        borderRadius:"6px",
                        border:"none",
                        outline:"none",
                        background:"#1f2937",
                        color:"white"
                    }}
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    onChange={(e)=>setPassword(e.target.value)}
                    style={{
                        width:"100%",
                        padding:"12px",
                        marginBottom:"20px",
                        borderRadius:"6px",
                        border:"none",
                        outline:"none",
                        background:"#1f2937",
                        color:"white"
                    }}
                />

                <button
                    onClick={handleLogin}
                    style={{
                        width:"100%",
                        padding:"12px",
                        border:"none",
                        borderRadius:"6px",
                        background:"linear-gradient(90deg,#facc15,#f97316)",
                        color:"#000",
                        fontWeight:"bold",
                        cursor:"pointer",
                        fontSize:"16px"
                    }}
                >
                    Login
                </button>

                <p style={{marginTop:"20px",fontSize:"14px"}}>
                    New User?{" "}
                    <Link
                        to="/register"
                        style={{color:"#facc15",textDecoration:"none"}}
                    >
                        Create Account
                    </Link>
                </p>

            </div>

        </div>

    )

}

export default Login;