import classes from "./Navigation.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Fragment, useContext, useState} from "react";
import Sidebar from "./Sidebar";
import UserContext from "../../store/user-context";
import Backdrop from "../UI/Backdrop";
import Modal from "../UI/Modal";
import UserInfo from "../Pages/UserInfo";
import Login from "../Pages/Login";
import UserForm from "../Pages/UserForm";

const Navigation = props => {
    const [menuOn, setMenuOn] = useState(false);
    const [userInfoOn, setUserInfoOn] = useState(false);
    const userCtx = useContext(UserContext);

    const userInfoOffTrigger = () => {
        setUserInfoOn(false);
    }
    const userInfoOnTrigger = () => {
        setUserInfoOn(true);
    }
    const menuOffTrigger = () => {
        setMenuOn(false);
    }
    const menuOnTrigger = () => {
        setMenuOn(true);
    }

    const menuOnClass = classes.menuOn;
    const menuOffClass = classes.menuOff;

    return (
        <Fragment>
            <div className={classes.navigation}>
                <div className={classes.wrapper}>
                    <div className={`${menuOn ? menuOnClass : menuOffClass}`}>
                        <Sidebar onMenuOff={menuOffTrigger}/>
                    </div>
                    <div className={classes.menuIcon}>
                        <FontAwesomeIcon icon={faBars} className={classes.menu}
                                         onClick={menuOnTrigger}/></div>
                    <div>
                        <div className={classes.menu} onClick={userInfoOnTrigger}>{userCtx.isLoggedIn ? `${userCtx.name}님 어서오세요` : "로그인"}</div>
                    </div>
                </div>
            </div>
            <div>
                {userInfoOn && <Modal>
                    {userCtx.isLoggedIn ? <UserInfo/>: <Login/>}
                <UserForm/></Modal>}
                {userInfoOn && <Backdrop onClick={userInfoOffTrigger}/>}
            </div>
        </Fragment>

    )
}
export default Navigation;