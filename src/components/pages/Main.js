import {Fragment} from "react";
import Card from "../UI/Card";
import classes from "./Main.module.css";



const NewRegForm = props => {


    return(<Fragment>
        <Card>
            <div className={classes.container}>
                <div>
                    <img src="" alt=""/>
                </div>
                <div>
                    <div className={classes.title}></div>
                    <div className={classes.content}></div>
                    <div className={classes.note}></div>
                </div>
            </div>
        </Card>
    </Fragment>)
}

export default NewRegForm;