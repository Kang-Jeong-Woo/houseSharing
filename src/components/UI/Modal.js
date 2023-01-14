import {Fragment} from 'react';
import ReactDOM from 'react-dom';


const portalElement = document.getElementById('overlay-root');

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<div>{props.children}</div>, portalElement)}
        </Fragment>
    );
};

export default Modal;