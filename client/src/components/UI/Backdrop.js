import classes from "./Backdrop.module.css"
import {Fragment} from "react";
import ReactDOM from "react-dom";

const portalElement = document.getElementById('backdrop-root');
const Backdrop = props => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<div className={classes.backdrop} onClick={props.onClick}></div>, portalElement)}
        </Fragment>

    )
}
export default Backdrop