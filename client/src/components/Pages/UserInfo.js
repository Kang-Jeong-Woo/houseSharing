import classes from "./UserInfo.module.css";
import userContext from "../../store/user-context";
import {useContext} from "react";
const UserInfo = props => {
    const userCtx = useContext(userContext);

    return(
        <div className={classes.userInfoCntnr}>
            <h2>{"안녕하세요 " + userCtx.name + " 입니다"}</h2>

        </div>
    )
}

export default UserInfo;