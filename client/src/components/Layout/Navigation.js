import classes from "./Navigation.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import Sidebar from "./Sidebar";

const Navigation = props => {
    const [menuOn, setMenuOn] = useState(false);

    const menuOffTrigger = () => {
        setMenuOn(false);
    }

    const menuOnTrigger = () => {
        setMenuOn(true);
    }

    const menuOnClass = classes.menuOn;
    const menuOffClass = classes.menuOff;

    return (
        <div className={classes.navigation}>
            <div className={classes.wrapper}>
                <div className={`${menuOn ? menuOnClass : menuOffClass}`}>
                    <Sidebar onMenuOff={menuOffTrigger}/>
                </div>
                <div className={classes.menuIcon}>
                    <FontAwesomeIcon icon={faBars} className={classes.menu}
                                     onClick={menuOnTrigger}/></div>
                <div>
                    <span>사용자이름</span>
                    <span>사진</span>
                    <span>로그인</span>
                </div>
            </div>
        </div>
    )
}
export default Navigation;