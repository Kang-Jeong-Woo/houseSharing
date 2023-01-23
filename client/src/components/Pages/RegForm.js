import React, {Fragment, useState, useEffect} from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import key from "../../store/MapApi"

const containerStyle = {
    width: '100%',
    height: '60vh'
};


const RegForm = props => {
    const [addressState, setAddressState] = useState(" ");
    const [lat, setLat] = useState(37.5155);
    const [lng, setLng] = useState(126.9728);
    const center = {lat:lat, lng:lng};

    const setAddressTrigger = (event) => {
        setAddressState(event.target.value);
    }

    useEffect(() => {
        const address = addressState.split(" ").join("+");
        console.log(address);
        const searchAddress = setTimeout(async () => {
            await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`).then(
                res=>{
                    return res.json();
                }
            ).then(data=>{
                setLat(data.results[0].geometry.location.lat);
                setLng(data.results[0].geometry.location.lng);
                console.log(data.results[0].geometry.location);
            });
        }, 1000);

        return () => {
            clearTimeout(searchAddress);
        };
    }, [addressState]);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: key
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    const setAddress = React.useCallback(async function (e) {
        const clickedLat = e.latLng.toJSON().lat
        const clickedLng = e.latLng.toJSON().lng
        await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${clickedLat},${clickedLng}&key=${key}`).then(
            res=>{
                return res.json();
            }
        ).then(data=>{
            console.log(data.results[0].formatted_address);
        })
    })



    return isLoaded ? (

        <Fragment>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={6}
                onLoad={onLoad}
                onUnmount={onUnmount}
                onClick={setAddress}
            >
                {}
            </GoogleMap>
            <input type="text" onChange={setAddressTrigger} value={addressState}/>

        </Fragment>
    ) : <></>
}

export default React.memo(RegForm);