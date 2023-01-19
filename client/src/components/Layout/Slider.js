import classes from "./Slider.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {useRef, useState, useEffect} from "react";
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
            <FontAwesomeIcon icon={faChevronLeft} onClick={moveToPrevSlide} className={classes.arrowButton}/>
            <div className={classes.wrapper}>
                <SliderAD slideRef={slideRef} onCount={slideCounter}/>
            </div>
            <FontAwesomeIcon icon={faChevronRight} onClick={moveToNextSlide} className={classes.arrowButton}/>
        </div>
    )
}

export default Slider;