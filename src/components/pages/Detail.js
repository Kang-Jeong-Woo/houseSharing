import {Fragment, useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import loading from "../../assets/img/loading.gif"
import classes from "./Main.module.css";
import Card from "../UI/Card";

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
        <Card>
            <div className={classes.container}>
                <img key={loadedHouse.id} src={loadedHouse.img} alt={loadedHouse.name}/>
                <div className={classes.content}>
                    <div className={classes.title}>{loadedHouse.name}</div>
                    <div className={classes.comment}>{loadedHouse.comment}</div>
                    <div className={classes.hashtag}>{loadedHouse.hashtag}</div>
                </div>
            </div>
        </Card>
    )
}

export default Detail;