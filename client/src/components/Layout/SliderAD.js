import image1 from "../../assets/img/spring.png";
import image2 from "../../assets/img/summer.png";
import image3 from "../../assets/img/fall.png";
import image4 from "../../assets/img/winter.png";
import classes from "./SliderAD.module.css";

const mockupList = [
    {
        "id": 1,
        "src": image1,
        "alt": "첫번째 슬라이드",
        "text": "첫번째 슬라이드"
    },
    {
        "id": 2,
        "src": image2,
        "alt": "두번째 슬라이드",
        "text": "두번째 슬라이드",
    },
    {
        "id": 3,
        "src": image3,
        "alt": "세번째 슬라이드",
        "text": "세번째 슬라이드"
    },
    {
        "id": 4,
        "src": image4,
        "alt": "네번째 슬라이드",
        "text": "네번째 슬라이드"
    }
]

const SliderAD = props => {
    props.onCount(mockupList.length-1);
    return(
        <div className={classes.slideWrapper} ref={props.slideRef}>
            {mockupList.map(slide=>(
                <img key={slide.id} src={slide.src} alt={slide.alt} />
            ))
            }
        </div>
    )
}
export default SliderAD