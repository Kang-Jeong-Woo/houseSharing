import classes from "./UserForm.module.css";
import img from "../../assets/img/img2.png";
import UserContext from "../../store/user-context";
import {useContext} from "react";

const UserForm = props => {
    const userCtx = useContext(UserContext);

    return (
        <div className={classes.userFormCntnr}>
            <div className={classes.userPic}>
                <img src={img} alt="userImg"/>
            </div>
            <div>사진 업데이트 하기</div>

        </div>
    )
}

export default UserForm;