import classes from "./Login.module.css"
import SocialLogin from "./SocialLogin";
import {useState, useReducer, useContext, useRef, useEffect} from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import UserContext from "../../store/user-context";
const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.val, isvalid: action.val.includes('@') };
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isvalid: state.value.includes('@') };
    }
    return { value: '', isvalid: false };
};
const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.val, isvalid: action.val.trim().length > 6 };
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isvalid: state.value.trim().length > 6 };
    }
    return { value: '', isvalid: false };
};
const Login = props => {
    const [formisvalid, setFormisvalid] = useState(false);
    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isvalid: null,
    });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isvalid: null,
    });

    const userCtx = useContext(UserContext);

    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const { isvalid: emailisvalid } = emailState;
    const { isvalid: passwordisvalid } = passwordState;

    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormisvalid(emailisvalid && passwordisvalid);
        }, 500);
        return () => {
            clearTimeout(identifier);
        };
    }, [emailisvalid, passwordisvalid]);

    const emailChangeTrigger = (event) => {
        dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
    };

    const passwordChangeTrigger = (event) => {
        dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
    };

    const validateEmailHandler = () => {
        dispatchEmail({ type: 'INPUT_BLUR' });
    };

    const validatePasswordHandler = () => {
        dispatchPassword({ type: 'INPUT_BLUR' });
    };

    const submitTrigger = (event) => {
        event.preventDefault();
        if(formisvalid){
            userCtx.onLogin();
        } else if (!emailisvalid) {
            emailInputRef.current.focus();
        } else {
            passwordInputRef.current.focus();
        }

    };

    return(
        <div className={classes.loginCntnr}>
            <div className={classes.login}>
                <form onSubmit={submitTrigger}>
                    <Input
                        ref={emailInputRef}
                        id="email"
                        label="E-mail"
                        type="email"
                        isvalid={emailisvalid}
                        value={emailState.value}
                        onChange={emailChangeTrigger}
                        onBlur={validateEmailHandler}/>
                    <Input
                        ref={passwordInputRef}
                        id="password"
                        label="Password"
                        type="Password"
                        isvalid={passwordisvalid}
                        value={passwordState.value}
                        onChange={passwordChangeTrigger}
                        onBlur={validatePasswordHandler}/>
                    <div>
                        <Button type="submit">
                            Login
                        </Button>
                    </div>
                </form>
            </div>
            <hr/>
            <SocialLogin/>
        </div>
    )
}

export default Login;