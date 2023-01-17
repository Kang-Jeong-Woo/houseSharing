import {Fragment} from "react";
import Card from "../UI/Card";
import classes from "./Main.module.css";
import 반포자이 from "../../assets/반포자이.png";
import 한남더힐 from "../../assets/한남더힐.png";

const houseList = [
    {
        id:1,
        img:한남더힐,
        title:"한남 더 힐",
        content:"전국 최고 비싼 집에서 살아보세요!",
        rental:10_000_000,
        hashtag:["#비흡연자", "#반려동물", "#남녀혼숙"],
        address:"서울턱별시 용산구 독서당!로 111",
    },
    {
        id:2,
        img: 반포자이,
        title:"반포자이",
        content:"비싼집의 대명사 반포동 반포자이에서 살아보세요!",
        rental:5_000_000,
        hashtag:["#흡연자", "#반려동물X", "#여자만"],
        address:"서울턱별시 서초구 신반포로 270",
    },
]

const NewRegForm = props => {


    return(<Fragment>
            <div className={classes.container}>
            {houseList.map(house=>(
                <Card>
                <div>
                    <img src={house.img} alt=""/>
                </div>
                <div>
                <div className={classes.title}>{house.title}</div>
                <div className={classes.content}>{house.content}</div>
                <div className={classes.hashtag}>{house.hashtag}</div>
                </div>
                </Card>
            ))}

            </div>

    </Fragment>)
}

export default NewRegForm;