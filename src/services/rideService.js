import api from "./api";

/* ================================
   BOOK RIDE
================================ */

export const bookRide = async (rideData, token) => {

    if (!token) {
        throw new Error("User not authenticated");
    }

    return await api.post(
        "/api/user/book-ride",
        null,
        {
            params: {
                pickupLat: rideData.pickupLat,
                pickupLng: rideData.pickupLng,
                dropLat: rideData.dropLat,
                dropLng: rideData.dropLng
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

};

/* ================================
   GET RIDE HISTORY
================================ */

export const getRideHistory = async (token) => {

    if (!token) {
        throw new Error("User not authenticated");
    }

    return await api.get(
        "/api/user/my-rides",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

};