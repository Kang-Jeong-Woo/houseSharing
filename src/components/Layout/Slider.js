import classes from "./Slider.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import image1 from "../../assets/img1.png";
import image2 from "../../assets/img2.png";
import image3 from "../../assets/img3.png";
import {useRef, useState, useEffect, Fragment} from "react";
import SliderAD from "./SliderAD";




const Slider = props => {
    const slideRef = useRef();
    const [currentImgOrder, setCurrentImgOrder] = useState(0);
    let maxSlide;
    const slideCounter = sliderLength => {
        maxSlide = sliderLength;
    }
    useEffect(() => {
        const IMG_WIDTH = slideRef.current.offsetWidth;
        const slideRange = currentImgOrder * IMG_WIDTH;
        slideRef.current.style.transition = "all 0.5s ease-in-out";
        slideRef.current.style.transform = `translateX(-${slideRange}px)`;
    }, [currentImgOrder]);

    const moveToNextSlide = () => {
        if (currentImgOrder === maxSlide) return;
        setCurrentImgOrder(currentImgOrder + 1);
    };

    const moveToPrevSlide = () => {
        if (currentImgOrder === 0) return;
        setCurrentImgOrder(currentImgOrder - 1);
    };

    return (
        <div className={classes.slider}>
            <button onClick={moveToPrevSlide}>prev</button>
            <div className={classes.wrapper}>
                <SliderAD slideRef={slideRef} onCount={slideCounter}/>
            </div>
            <button onClick={moveToNextSlide}>next</button>
        </div>
    )
}

export default Slider;