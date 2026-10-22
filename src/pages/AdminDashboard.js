/*import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function AdminDashboard(){

    return(

        <div>

            <Navbar/>

            <div style={{marginTop:"100px",textAlign:"center"}}>

                <h1>Admin Dashboard</h1>

                <br/>

                <Link to="/drivers">
                    <button>View Drivers</button>
                </Link>

                <br/><br/>

                <Link to="/add-driver">
                    <button>Add Driver</button>
                </Link>

                <br/><br/>

                <Link to="/ride-monitor">
                    <button>Monitor Rides</button>
                </Link>

            </div>

        </div>

    )

}

export default AdminDashboard*/
import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
    const [stats, setStats] = useState({});
    const [cabs, setCabs] = useState([]);
    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios.get("http://localhost:8080/api/admin/dashboard", {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => setStats(res.data));

        axios.get("http://localhost:8080/api/admin/all-cabs", {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => setCabs(res.data));

        axios.get("http://localhost:8080/api/admin/all-drivers", {
            headers: { Authorization: `Bearer ${token}` }
        }).then(res => setDrivers(res.data));
    }, []);

    return (
        <div style={{ padding: "20px", background: "#0f172a", color: "white" }}>
            <h1>Admin Dashboard 👑</h1>

            {/* Stats Cards */}
            <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
                <div style={{ background: "#1f2937", padding: "20px", borderRadius: "8px" }}>
                    <h3>Total Users</h3>
                    <p>{stats.totalUsers}</p>
                </div>
                <div style={{ background: "#1f2937", padding: "20px", borderRadius: "8px" }}>
                    <h3>Total Drivers</h3>
                    <p>{stats.totalDrivers}</p>
                </div>
                <div style={{ background: "#1f2937", padding: "20px", borderRadius: "8px" }}>
                    <h3>Total Cabs</h3>
                    <p>{stats.totalCabs}</p>
                </div>
                <div style={{ background: "#1f2937", padding: "20px", borderRadius: "8px" }}>
                    <h3>Total Rides</h3>
                    <p>{stats.totalRides}</p>
                </div>
            </div>

            {/* Cab Table */}
            <h2>Manage Cabs</h2>
            <table style={{ width: "100%", background: "#1f2937", borderRadius: "8px" }}>
                <thead>
                <tr>
                    <th>Cab Number</th>
                    <th>Model</th>
                    <th>Available</th>
                    <th>Driver ID</th>
                </tr>
                </thead>
                <tbody>
                {cabs.map(cab => (
                    <tr key={cab.id}>
                        <td>{cab.cabNumber}</td>
                        <td>{cab.model}</td>
                        <td>{cab.available ? "Yes" : "No"}</td>
                        <td>{cab.driverId}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Driver Table */}
            <h2 style={{ marginTop: "40px" }}>Manage Drivers</h2>
            <table style={{ width: "100%", background: "#1f2937", borderRadius: "8px" }}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>License Number</th>
                </tr>
                </thead>
                <tbody>
                {drivers.map(driver => (
                    <tr key={driver.id}>
                        <td>{driver.name}</td>
                        <td>{driver.email}</td>
                        <td>{driver.licenseNumber}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminDashboard;