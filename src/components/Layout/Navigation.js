import classes from "./Navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import Sidebar from "./Sidebar";
const Navigation = props => {
    const [menuOn, setMenuOn] = useState(true);

    return(
        <div className={classes.navigation}>
            <div className={classes.wrapper}>
                {menuOn && <Sidebar/>}
                <div><FontAwesomeIcon icon={faBars} className={classes.menu}/></div>
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