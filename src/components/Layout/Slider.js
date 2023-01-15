import classes from "./Slider.module.css";

const Slider = props => {
    return (
        <div className={classes.section}>
            <input type="radio" id={"slide01"} checked={true}/>
            <input type="radio" id={"slide02"}/>
            <input type="radio" id={"slide03"}/>

            <div className={classes.slidewrap}>
                <div className={classes.slidelist}>
                    <div>
                        <a>
                            <label htmlFor={"slide03"} className={classes.left}></label>
                            <img src="../../assets/img1.png" alt=""/>
                            <label htmlFor={"slide02"} className={classes.right}></label>
                        </a>
                    </div>
                    <div>
                        <a>
                            <label htmlFor={"slide01"} className={classes.left}></label>
                            <img src="../../assets/img2.png" alt=""/>
                            <label htmlFor={"slide03"} className={classes.right}></label>
                        </a>
                    </div>
                    <div>
                        <a>
                            <label htmlFor={"slide02"} className={classes.left}></label>
                            <img src="../../assets/img3.png" alt=""/>
                            <label htmlFor={"slide01"} className={classes.right}></label>
                        </a>
                    </div>
                </div>
            </div>
        </div>)
}

export default Slider;