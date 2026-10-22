import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/authService";

function Register() {

    const navigate = useNavigate();

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleRegister = async () => {

        try{

            await registerUser({
                name,
                email,
                password
            });

            alert("Account created successfully");

            navigate("/");

        }catch(error){

            alert("Registration failed");

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
                width:"380px",
                padding:"40px",
                borderRadius:"12px",
                background:"#111827",
                boxShadow:"0px 10px 30px rgba(0,0,0,0.6)",
                textAlign:"center"
            }}>

                <h1 style={{color:"#facc15"}}>
                    RideX
                </h1>

                <p style={{
                    color:"#9ca3af",
                    marginBottom:"30px"
                }}>
                    Create your account
                </p>

                <input
                    placeholder="Full Name"
                    onChange={(e)=>setName(e.target.value)}
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
                    type="email"
                    placeholder="Email Address"
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
                    placeholder="Password"
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
                    onClick={handleRegister}
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
                    Create Account
                </button>

                <p style={{marginTop:"20px",fontSize:"14px"}}>
                    Already have an account?{" "}
                    <Link
                        to="/"
                        style={{
                            color:"#facc15",
                            textDecoration:"none"
                        }}
                    >
                        Login
                    </Link>
                </p>

            </div>

        </div>

    );

}

export default Register;