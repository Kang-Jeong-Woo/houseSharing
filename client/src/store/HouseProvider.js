import React, {useEffect, useReducer, useState} from "react";
import HouseContext from "./house-context";

const houseInitState = {
    address:"",
    comment:"",
    day:true,
    food:true,
    hashtag:"",
    img:"",
    max:0,
    name: "",
    rentalFee:0,
    room:0,
    smoke:true,
    lat:0.0,
    lng:0.0
}

const houseReducer = (state, action) => {

}

const UserProvider = props => {
    const [houseState, dispatchHouseState] = useReducer(houseReducer, houseInitState);



    const houseContext = {
        address:houseState.address,
        comment:houseState.comment,
        day:houseState.day,
        food:houseState.food,
        hashtag:houseState.hashtag,
        img:houseState.img,
        max:houseState.max,
        name: houseState.name,
        rentalFee:houseState.rentalFee,
        room:houseState.room,
        smoke:houseState.smoke,
        lat:houseState.lat,
        lng:houseState.lng
    }

    return(<HouseContext.Provider value={houseContext}>
        {props.children}
    </HouseContext.Provider>)
}
export default UserProvider;