import React,{useReducer, useEffect, useState} from "react";
import UserContext from "./user-context";

const userInitState = {
    age: 27,
    day:true,
    drink:1,
    mbti:"ESFJ",
    name:"강정우",
    pet:true,
    smoke:false,
    isLoggedIn: false,
}

const userReducer = (state, action) => {
    if(action.type==="logOut"){
        let copyState = userInitState;
        copyState.isLoggedIn = false;
        return copyState
    } else if (action.type === "logIn") {
        let copyState = userInitState;
        copyState.isLoggedIn = true;
        return copyState
    } else {
        return userInitState;
    }
}

const UserProvider = props => {
    const [userState, dispatchUserState] = useReducer(userReducer, userInitState);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

        if (storedUserLoggedInInformation === '1') {
            setIsLoggedIn(true);
        }
    }, []);

    const logoutTrigger = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    }

    const loginTrigger = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    }

    const userContext = {
        age:userState.age,
        day:userState.day,
        drink:userState.drink,
        mbti:userState.mbti,
        name:userState.name,
        pet:userState.pet,
        smoke:userState.smoke,
        isLoggedIn: isLoggedIn,
        onLogout: logoutTrigger,
        onLogin: loginTrigger,
    }

    return(<UserContext.Provider value={userContext}>
        {props.children}
    </UserContext.Provider>)
}
export default UserProvider;