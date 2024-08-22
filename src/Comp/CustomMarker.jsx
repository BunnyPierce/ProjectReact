import React from 'react'
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';

const CustomMarker = (props) => {
    const position = props.position
    return (
        <div>
            <MapContainer center={position} zoom={13} style={{
                height: '200px', width:
                    '100%'
            }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy;'
                />
                <Marker position={position}>
                    <Popup>
                        {props.name}
                    </Popup>
                    <Tooltip> {props.name} </Tooltip>
                </Marker>
            </MapContainer>

        </div>
    )
}

export default CustomMarker