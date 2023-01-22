import {Fragment} from 'react';
import ReactDOM from 'react-dom';
import classes from "./Modal.module.css";

const portalElement = document.getElementById('overlay-root');

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<div className={classes.modal}>{props.children}</div>, portalElement)}
        </Fragment>
    );
};

export default Modal;