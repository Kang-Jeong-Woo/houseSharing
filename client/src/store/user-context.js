import React from "react";

const UserContext = React.createContext({
    age:0,
    day:true,
    drink:0.5,
    mbti:"",
    name:"",
    pet:true,
    smoke:true,
    isLoggedIn: false,
    onLogout: ()=>{},
    onLogin: ()=>{},
});

export default UserContext