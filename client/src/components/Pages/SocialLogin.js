import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGoogle, faFacebookMessenger, faEm} from "@fortawesome/free-brands-svg-icons";
import classes from "./Login.module.css";

const SocialLogin = props => {
    return (
        <div className={classes.SocialLgnCntnr}>
            <div>

            <div className={classes.SocialLgn}><FontAwesomeIcon className={classes.socialLgnIcon} icon={faFacebook}/>
                <div className={classes.logContent}>페이스북으로 로그인 하기</div>
            </div>
            <div className={classes.SocialLgn}><FontAwesomeIcon className={classes.socialLgnIcon} icon={faGoogle}/>
                <div className={classes.logContent}>구글 계정으로 로그인 하기</div>
            </div>
            <div className={classes.SocialLgn}><FontAwesomeIcon className={classes.socialLgnIcon} icon={faFacebookMessenger}/>
                <div className={classes.logContent}>카카오톡으로 로그인 하기</div>
            </div>
            </div>
        </div>
    )
}
export default SocialLogin;