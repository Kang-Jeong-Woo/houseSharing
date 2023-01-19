import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
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
    const location = useLocation();
    const {RangePicker} = DatePicker;

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://react-test-ebe2a-default-rtdb.asia-southeast1.firebasedatabase.app/house/${location.state.houseId}.json`
        ).then(res=>{
            return res.json();
        }).then(data => {
            setIsLoading(false);
            setLoadedHouse(data);
        });
    }, []);

    if(isLoading){
        return (<img src={loading} alt="loading..."/>)
    }

    return(
        <Page>
            <div className={classes.totalCntnr}>
                <div className={classes.titleCntnr}>
                    <div className={classes.title}>{loadedHouse.name}</div>
                    <div >{loadedHouse.address}</div>
                    {/*<FontAwesomeIcon icon={[far , Heart]}/>*/}
                </div>
                <div className={classes.imgCntnr}>
                    <img src={loadedHouse.img} alt={loadedHouse.name}/>
                </div>
                <div className={classes.descCntnr}>
                    <div className={classes.desc}>

                    </div>
                    <div className={classes.payment}>
                        요금을 확인하려면 날짜를 입력하세요
                        <div className={classes.block}>
                            <RangePicker bordered={false}/>
                        </div>
                        <input type={"number"} name={"human"} min={1} max={5}/>
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