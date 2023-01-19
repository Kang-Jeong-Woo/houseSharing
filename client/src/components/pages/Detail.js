import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import loading from "../../assets/img/loading.gif"
import classes from "./Detail.module.css";
import Page from "../UI/Page";

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
                <div></div>
                <div></div>
            </div>
            <div className={classes.imgCntnr}></div>

            </div>
            <div className={classes.descCntnr}></div>
            <div className={classes.reviewCntnr}></div>
            <div className={classes.locationCntnr}></div>
            <div className={classes.hostCntnr}></div>






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