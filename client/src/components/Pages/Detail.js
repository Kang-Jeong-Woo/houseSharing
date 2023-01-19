import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import loading from "../../assets/img/loading.gif"
import classes from "./Detail.module.css";
import Page from "../UI/Page";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import {DatePicker} from "antd";

const Detail = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedHouse, setLoadedHouse] = useState([]);
    const [dayCnt, setDayCnt] = useState(1);
    const [pplCnt, setPplCnt] = useState(1);
    const [isDaySlt, setIsDaySlt] = useState(false);
    const location = useLocation();
    const {RangePicker} = DatePicker;

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

    const dateTrigger = (date) => {
        setIsDaySlt(true);
        setDayCnt((date[1].$d - date[0].$d) / 24 / 60 / 60 / 1000);
    }

    const inputTrigger = (event) => {
        setPplCnt(event.target.value);
    }

    return (
        <Page>
            <div className={classes.totalCntnr}>

                <div className={classes.titleCntnr}>
                    <div className={classes.title}>{loadedHouse.name}</div>
                    <div>{loadedHouse.address}</div>
                    {/*<FontAwesomeIcon icon={[far , Heart]}/>*/}
                </div>

                <div className={classes.imgCntnr}>
                    <img src={loadedHouse.img} alt={loadedHouse.name}/>
                </div>

                <div className={classes.descCntnr}>

                    <div className={classes.desc}>
                        {loadedHouse.rentalFee + "원/1박"}
                    </div>

                    <div className={classes.paymentForm}>
                        <div className={classes.payInfo}
                             value={dayCnt}>{isDaySlt ? ("₩" + (dayCnt * pplCnt * loadedHouse.rentalFee).toLocaleString() + "원") : "가격 정보를 확인하려면 날짜를 선택하세요."}</div>
                        <div className={classes.infoForm}>
                            <div className={classes.block}>
                                <RangePicker bordered={false} onChange={dateTrigger}/>
                            </div>
                            <input className={classes.pplCnt} type={"number"} name={"human"} min={1} max={5}
                                   onChange={inputTrigger} value={pplCnt}/>
                        </div>
                        <Link to={"/payment"} className={classes.payment}>
                            <div>{isDaySlt ? "예약하기" : "가능 날짜 확인하기"}</div>
                        </Link>
                    </div>

                </div>

                <div className={classes.reviewCntnr}>{"여기가 후기 section"}</div>
                <div className={classes.locationCntnr}>{"여기가 카카오 지도"}</div>
                <div className={classes.hostCntnr}>{"여기가 집주인 소통 창구"}</div>
            </div>
        </Page>
    )
}

export default Detail;