import React from "react";

const HouseContext = React.createContext({
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
});

export default HouseContext;