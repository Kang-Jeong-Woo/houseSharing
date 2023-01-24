import React, {Fragment, useState, useEffect} from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import key from "../../store/MapApi"
import classes from "./RegForm.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBacon, faBell, faCar, faDumbbell, faFire, faFireExtinguisher, faFirstAid, faGuitar,
    faJugDetergent, faLock, faPersonSwimming, faSnowflake, faTv, faUtensils, faWifi
} from "@fortawesome/free-solid-svg-icons";
import {Button} from "antd";

const containerStyle = {
    width: '100%',
    height: '60vh'
};


const RegForm = props => {
    const [srchAddressState, setSrchAddressState] = useState("");
    const [addressState, setAddressState] = useState("");
    const [lat, setLat] = useState(37.5155);
    const [lng, setLng] = useState(126.9728);
    const center = {lat:lat, lng:lng};

    const setAddressTrigger = (event) => {
        setSrchAddressState(event.target.value);
    }

    useEffect(() => {
        const address = srchAddressState.split(" ").join("+");
        console.log(address);
        const searchAddress = setTimeout(async () => {
            await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`).then(
                res=>{
                    return res.json();
                }
            ).then(data=>{
                setLat(data.results[0].geometry.location.lat);
                setLng(data.results[0].geometry.location.lng);
                console.log(data.results[0]);
                setAddressState(data.results[0].formatted_address);
            });
        }, 1000);

        return () => {
            clearTimeout(searchAddress);
        };
    }, [srchAddressState]);

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
            setAddressState(data.results[0].formatted_address);
        })
    })

    const selectTrigger = (event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.target.name);
        console.log(event.target.value);
    }

    return isLoaded ? (
        <Fragment>
            <h1 style={{marginTop:"2.5rem"}}>주소를 먼저 등록해보죠!</h1>
            <div className={classes.mapCntnr}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={1}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                    onClick={setAddress}
                >
                    {}
                </GoogleMap>
            </div>
            <input type="text" onChange={setAddressTrigger} value={srchAddressState} className={classes.addressInput} placeholder={"입력"}/>
            <div>
                <h1>내 집 등록하기</h1>
                <div className={classes.addressCntnr}>
                    <h3>하우스 이름</h3>
                    <input type="text" className={classes.addressInput}/>
                </div>
                <div className={classes.addressCntnr}>
                    <label htmlFor={"content"}><h3>설명</h3></label>
                    <textarea id={"content"} rows="5" className={classes.contentInput}>집에 대한 설명을 입력하세요</textarea>
                </div>
                <div className={classes.addressCntnr}>
                    <h3>주소</h3>
                    <input type="text" value={addressState} className={classes.addressInput}/>
                </div>
                <div className={classes.addressCntnr}>
                    <h3>사진</h3>
                    <input type="text" className={classes.addressInput}/>
                </div>
                <div className={classes.addressCntnr}>
                    <h3>추가 정보 (없는 물품을 선택해주세요!)</h3>
                    <h4>숙소 편의 시설</h4>
                    <div className={classes.amenitiesCntnr}>
                        <Button className={classes.amenities} onClick={selectTrigger}><div className={classes.amenitiesCmt}><FontAwesomeIcon icon={faWifi}/>무선 인터넷</div></Button>
                        <div className={classes.amenities}><FontAwesomeIcon icon={faTv}/><div className={classes.amenitiesCmt}>TV</div></div>
                        <div className={classes.amenities}><FontAwesomeIcon icon={faUtensils}/><div className={classes.amenitiesCmt}>주방 용품</div></div>
                        <div className={classes.amenities}><FontAwesomeIcon icon={faJugDetergent}/><div className={classes.amenitiesCmt}>세탁 가능</div></div>
                        <div className={classes.amenities}><FontAwesomeIcon icon={faCar}/><div className={classes.amenitiesCmt}>무료 주차</div></div>
                    </div>
                    <div className={classes.amenitiesCntnr}>
                        <div className={classes.amenities}><FontAwesomeIcon icon={faSnowflake}/><div className={classes.amenitiesCmt}>에어컨</div></div>
                        <div className={classes.amenities}><FontAwesomeIcon icon={faPersonSwimming}/><div className={classes.amenitiesCmt}>수영장</div></div>
                        <div className={classes.amenities}><FontAwesomeIcon icon={faBacon}/><div className={classes.amenitiesCmt}>바비큐 그릴</div></div>
                        <div className={classes.amenities}><FontAwesomeIcon icon={faGuitar}/><div className={classes.amenitiesCmt}>악기</div></div>
                        <div className={classes.amenities}><FontAwesomeIcon icon={faDumbbell}/><div className={classes.amenitiesCmt}>운동기구</div></div>
                    </div>
                    <h4>안전 물품</h4>
                    <div className={classes.amenitiesCntnr}>
                        <div className={classes.amenities}><FontAwesomeIcon icon={faFire}/><div className={classes.amenitiesCmt}>화재경보기</div></div>
                        <div className={classes.amenities}><FontAwesomeIcon icon={faFirstAid}/><div className={classes.amenitiesCmt}>구급 상자</div></div>
                        <div className={classes.amenities}><FontAwesomeIcon icon={faFireExtinguisher}/><div className={classes.amenitiesCmt}>소화기</div></div>
                        <div className={classes.amenities}><FontAwesomeIcon icon={faLock}/><div className={classes.amenitiesCmt}>장금장치</div></div>
                    </div>
                </div>
            </div>
        </Fragment>
    ) : <></>
}

export default React.memo(RegForm);