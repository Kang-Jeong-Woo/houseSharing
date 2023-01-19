import classes from "./Page.module.css";
const Page = props => {
    return(<div className={classes.page}>{props.children}</div>)
}

export default Page