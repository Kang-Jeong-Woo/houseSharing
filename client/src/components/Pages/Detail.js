import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import loading from "../../assets/img/loading.gif"
import classes from "./Detail.module.css";
import Page from "../UI/Page";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";


const Detail = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedHouse, setLoadedHouse] = useState([]);
    const location = useLocation();

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
                    <div>{loadedHouse.name}</div>
                    <div>{loadedHouse.address}</div>
                    {/*<FontAwesomeIcon icon={[far , Heart]}/>*/}
                </div>
                <div className={classes.imgCntnr}>
                    <img src={loadedHouse.img} alt={loadedHouse.name}/>
                </div>
                <div className={classes.descCntnr}>
                    <div className={classes.desc}></div>
                    <div className={classes.payment}></div>
                </div>ㅏ
                <div className={classes.reviewCntnr}>{"여기가 후기 section"}</div>
                <div className={classes.locationCntnr}>{"여기가 카카오 지도"}</div>
                <div className={classes.hostCntnr}>{"여기가 집주인 소통 창구"}</div>
            </div>





            <div className={classes.container}>
                <img key={loadedHouse.id} src={loadedHouse.img} alt={loadedHouse.name}/>
                <div className={classes.content}>
                    <div className={classes.title}>{loadedHouse.name}</div>
                    <div className={classes.comment}>{loadedHouse.comment}</div>
                    <div className={classes.hashtag}>{loadedHouse.hashtag}</div>
                </div>
            </div>
        </Page>
    )
}

export default Detail;