export function saveRide(ride){

    const rides = JSON.parse(localStorage.getItem("rides")) || [];

    rides.push(ride);

    localStorage.setItem("rides", JSON.stringify(rides));

}

export function getRides(){

    return JSON.parse(localStorage.getItem("rides")) || [];

}

export function clearRides(){

    localStorage.removeItem("rides");

}