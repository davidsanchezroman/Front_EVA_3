
"use client"
import { Map } from "leaflet"
import { MapContainer, TileLayer } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import { Transition } from "../Transition"
import { MarkerHouse } from "./MarkerHouse"



export function Location() {
    const coordinatePoint = {
        lat: -35.707,
        lng: -72.019
    }
    
    const centerMarker = (position: {lat: number, lng: number}, fnMap: Map) =>{
        fnMap.flyTo({
            lat: position.lat,
            lng: position.lng
        })
    }
    return (
        <Transition className="px-4 py-8 md:py-44 md:px-36">
            <h4 className="text-center text-secondary" id="location">Ubicación</h4>
            <h2 className="max-w-2xl mx-auto my-4 mb-8 text-3xl font-semibold text-center">Encuentra tu proxima vivienda con nosotros, en el sur de Chile, y comienza a disfrutar del resto de tu vida</h2>
            <MapContainer center={coordinatePoint} zoom={8} scrollWheelZoom={false} className="h-[500px]">
            <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png"/>

            <MarkerHouse selectMarker={centerMarker}/>
            </MapContainer>
        </Transition>
    )
}
