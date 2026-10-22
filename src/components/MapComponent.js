import { MapContainer, TileLayer, Marker, Polyline, useMapEvents } from "react-leaflet"
import { useEffect } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

const pickupIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [30, 30]
})

const dropIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/149/149059.png",
    iconSize: [30, 30]
})

function MapClickHandler({ setPickup, setDrop, pickup, drop }) {

    useMapEvents({

        click(e) {

            if (!pickup) {

                setPickup(e.latlng)

            } else if (!drop) {

                setDrop(e.latlng)

            }

        }

    })

    return null

}

function MapComponent({ pickup, drop, setPickup, setDrop }) {

    return (

        <MapContainer
            center={[13.0827, 80.2707]}
            zoom={13}
            style={{ height: "550px", width: "100%" }}
        >

            <TileLayer
                attribution="© OpenStreetMap"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MapClickHandler
                pickup={pickup}
                drop={drop}
                setPickup={setPickup}
                setDrop={setDrop}
            />

            {pickup && (
                <Marker
                    position={pickup}
                    icon={pickupIcon}
                />
            )}

            {drop && (
                <Marker
                    position={drop}
                    icon={dropIcon}
                />
            )}

            {pickup && drop && (
                <Polyline
                    positions={[pickup, drop]}
                    color="blue"
                />
            )}

        </MapContainer>

    )

}

export default MapComponent