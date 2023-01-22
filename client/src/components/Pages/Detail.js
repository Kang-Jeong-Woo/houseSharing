import {Fragment, useEffect, useReducer, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import loading from "../../assets/img/loading.gif"
import classes from "./Detail.module.css";
import Page from "../UI/Page";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faChevronUp, faChevronDown, faBaby, faChild, faPerson} from "@fortawesome/free-solid-svg-icons";
import {DatePicker, InputNumber} from "antd";

const pplInitState = {Adult: 1, Child: 0, Baby: 0};

const pplStateReducer = (state, action) => {
    if (action.type === "adult") {
        return {Adult: action.value, Baby: action.state.baby, Child: action.state.child}
    } else if (action.type === "child") {
        return {Adult: action.state.adult, Baby: action.state.baby, Child: action.value}
    } else if (action.type === "baby") {
        return {Adult: action.state.adult, Baby: action.value, Child: action.state.child}
    }
    return pplInitState
}

const Detail = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedHouse, setLoadedHouse] = useState([]);
    const [dayCnt, setDayCnt] = useState(1);
    const [pplCnt, setPplCnt] = useState(1);
    const [isDaySlt, setIsDaySlt] = useState(false);
    const location = useLocation();
    const {RangePicker} = DatePicker;
    const [isClicked, setIsClicked] = useState(false);
    const [btnOk, setBtnOk] = useState(false);
    const [pplState, dispatchPplState] = useReducer(pplStateReducer, pplInitState);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://react-test-ebe2a-default-rtdb.asia-southeast1.firebasedatabase.app/house/${location.state.houseId}.json`
        ).then(res => {
            return res.json();
        }).then(data => {
            setIsLoading(false);
            setLoadedHouse(data);
        });
    }, []);

    if (isLoading) {
        return (<img src={loading} alt="loading..."/>)
    }
    ;

    const dateTrigger = date => {
        setIsDaySlt(true);
        setDayCnt((date[1].$d - date[0].$d) / 24 / 60 / 60 / 1000);
    };

    const pplSltTrigger = () => {
        setIsClicked(!isClicked);
    };

    const pplPickTriggerA = value => {
        dispatchPplState({type: "adult", value: value, state: {baby: pplState.Baby, child: pplState.Child}});
    }
    const pplPickTriggerC = value => {
        dispatchPplState({type: "child", value: value, state: {adult: pplState.Adult, baby: pplState.Baby}});
    }
    const pplPickTriggerB = value => {
        dispatchPplState({type: "baby", value: value, state: {adult: pplState.Adult, child: pplState.Child}});
    }

    return (
        <Page>
            <div className={classes.totalCntnr}>

                <div className={classes.titleCntnr}>
                    <div className={classes.title}>{loadedHouse.name}</div>
                    <div className={classes.addressCntnr}>
                        <div>{loadedHouse.address}</div>
                        <div>
                            <FontAwesomeIcon icon={faHeart}/> 좋아요
                        </div>
                    </div>
                </div>

                <div className={classes.imgCntnr}>
                    <img src={loadedHouse.img} alt={loadedHouse.name}/>
                </div>

                <div className={classes.descCntnr}>

                    <div className={classes.desc}>
                        {loadedHouse.rentalFee + "원/1박"}
                        <hr/>
                        {loadedHouse.max + "명"}
                    </div>
                    <div className={classes.paymentForm}>
                        <div className={classes.payInfo}
                             value={dayCnt}>{isDaySlt ? ("₩ " + ((pplState.Adult + pplState.Child + pplState.Baby) * loadedHouse.rentalFee).toLocaleString() + " / 박") : "가격 정보를 확인하려면 날짜를 선택하세요."}</div>
                        <div className={classes.infoForm}>
                            <div className={classes.block}>
                                <RangePicker bordered={false} onChange={dateTrigger}/>
                            </div>
                            <div className={classes.pplCntCntnr}>
                                <div>게스트 {pplState.Adult + pplState.Child + pplState.Baby}명</div>
                                <div>{isClicked ? <FontAwesomeIcon icon={faChevronUp} onClick={pplSltTrigger}/> :
                                    <FontAwesomeIcon icon={faChevronDown} onClick={pplSltTrigger}/>}</div>
                                {isClicked && <div className={classes.pplPick}>
                                    <div className={classes.m1rem}>{"최대" + loadedHouse.max + "명"}</div>
                                    <InputNumber addonBefore={<FontAwesomeIcon icon={faPerson}/>} value={pplState.Adult}
                                                 min={1} max={5} prefix="성인 (13세 이상)" onChange={pplPickTriggerA}
                                                 style={{width: '100%', height: "40px"}}/>
                                    <InputNumber addonBefore={<FontAwesomeIcon icon={faChild}/>} value={pplState.Child}
                                                 min={0} max={5} prefix="어린이 (2~12세)" onChange={pplPickTriggerC}
                                                 style={{width: '100%', height: "40px"}}/>
                                    <InputNumber addonBefore={<FontAwesomeIcon icon={faBaby}/>} value={pplState.Baby}
                                                 min={0} max={5} prefix="유아 (2세 미만)" onChange={pplPickTriggerB}
                                                 style={{width: '100%', height: "40px"}}/>
                                </div>}
                            </div>
                        </div>
                        {isDaySlt && <div>
                            <div style={{fontSize: "small"}}>
                                예약 확정 전에는 요금이 청구되지 않습니다.
                            </div>
                            <div className={classes.addressCntnr}>
                                <div>{"₩" + ((pplState.Adult + pplState.Child + pplState.Baby) * loadedHouse.rentalFee).toLocaleString() + "X" + dayCnt + "박"}</div>
                                <div>{"₩" + (dayCnt * (pplState.Adult + pplState.Child + pplState.Baby) * loadedHouse.rentalFee).toLocaleString()}</div>
                            </div>
                            <hr/>
                            <div className={classes.addressCntnr}>
                                <div>총합계</div>
                                <div>{"₩" + (dayCnt * (pplState.Adult + pplState.Child + pplState.Baby) * loadedHouse.rentalFee).toLocaleString()}</div>
                            </div>
                        </div>}
                        <Link to={"/payment"} className={classes.none}>
                            <button className={classes.payment}
                                    disabled={false}>{isDaySlt ? "예약하기" : "가능 날짜 확인하기"}</button>
                        </Link>
                    </div>
                </div>
                <div className={classes.reviewCntnr}>{"여기가 후기 section"}</div>
                <div className={classes.locationCntnr}>{"여기가 카카오 지도"}</div>
                <div className={classes.hostCntnr}>{"여기가 집주인 소통 창구"}</div>
            </div>
        </Page>
    )
};

export default Detail;