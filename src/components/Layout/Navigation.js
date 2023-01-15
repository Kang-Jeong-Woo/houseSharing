import classes from "./Navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navigation = props => {
    return(
        <div className={classes.navigation}>
            <div className={classes.wrapper}>
                <div><FontAwesomeIcon icon={faBars}/></div>
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