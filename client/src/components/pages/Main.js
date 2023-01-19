import {Fragment, useEffect, useState} from "react";
import Card from "../UI/Card";
import classes from "./Main.module.css";
import {Link} from "react-router-dom";
import loading from "../../assets/img/loading.gif";
import Slider from "../Layout/Slider";

const NewRegForm = props => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedHouseList, setLoadedHouseList] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://react-test-ebe2a-default-rtdb.asia-southeast1.firebasedatabase.app/house.json`
        ).then(res => {
            return res.json();
        }).then(data => {
            const houses = [];
            for (const key in data) {
                const newHouse = {
                    id: key,
                    ...data[key]
                }
                houses.push(newHouse);
            }
            setIsLoading(false);
            setLoadedHouseList(houses);
        });

    }, []);

    if (isLoading) {
        return (<img src={loading} alt="loading..."/>)
    }

    return (<Fragment>
        <Slider/>
        {loadedHouseList.map(house => (
            <div className={classes.container}>
                <Link to={"/detail"} state={{houseId: house.id}}>
                    <Card onPadding={"1rem"}>
                        <img key={house.id} src={house.img} alt={house.name}/>
                        <div className={classes.content}>
                            <div className={classes.title}>{house.name}</div>
                            <div className={classes.comment}>{house.comment}</div>
                            <div className={classes.hashtag}>{house.hashtag}</div>
                        </div>
                    </Card>
                </Link>
            </div>
        ))}
    </Fragment>)
}

export default NewRegForm;