import Navigation from "./Navigation";
import classes from "./Layout.module.css";
const Layout = (props) => {
    return (
        <div>
            <Navigation/>
            <main className={classes.container}>{props.children}</main>
        </div>
    );
}

export default Layout;