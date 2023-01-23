import classes from "./Sidebar.module.css";
import comLogo from "../../assets/img/comLogo.png"
import userImg from "../../assets/img/img3.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX} from "@fortawesome/free-solid-svg-icons";
import {Fragment, useContext} from "react";
import userContext from "../../store/user-context";
import Login from "../Pages/Login";
import Modal from "../UI/Modal";
import {Link} from "react-router-dom";

const Sidebar = props => {
    const userCtx = useContext(userContext);

    const logOutTrigger = () => {
        userCtx.onLogout();
    }

    const logginInfo = (<Fragment>
        <div className={classes.userImg}>
            <img src={userImg} alt="사용자 지정 이미지"/>
        </div>
        <div className={classes.userInfo}>강정우 님</div>
        <div>|</div>
        <div className={classes.userInfo} onClick={logOutTrigger}>로그아웃</div>
    </Fragment>)

    return (
        <section className={classes.sidebar}>
            <div className={classes.left}><FontAwesomeIcon onClick={props.onMenuOff} icon={faX}/></div>
            <div className={classes.comLogo}>
                <img className={classes.circle} src={comLogo} alt="하우스 쉐어링"/>
            </div>
            <div className={classes.comDesc}>하우스 쉐어링에 오신것을 환영합니다!<br/>파도치는 집값에 집을 사기 두렵다면,<br/>저희와 하우스 쉐어링을 하는 것은 어떨까요?
            </div>
            <div className={classes.menuBar}>매물 보러 가기!</div>
            <Link to={"/registerHouse"}><div className={classes.menuBar}>매물 등록</div></Link>
            <div className={classes.menuBar}>결제 하러 가기!</div>
            <div className={classes.logContainer}>

                <div className={classes.userContainer}>
                    {userCtx.isLoggedIn ? logginInfo : "로그인"}

                </div>
                <div className={classes.footer}>copyrightⓒ 2023 All rights reserved by Kang, Sang, Hyeong</div>
            </div>
        </section>
    )
}
export default Sidebar;