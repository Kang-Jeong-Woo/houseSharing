import classes from "./Sidebar.module.css";

const Sidebar = () => {
    return(
        <section className={classes.sidebar}>
            <div>
                <div>회사 사진</div>
                <div>하우스 쉐어링에 오신것을 환영합니다!<br/>파도치는 집값에 집을 사기 두렵다면<br/>잠시 저희와 하우스 쉐어링을 하는 것을 어떨까요?</div>
            </div>
            <div>메뉴바 1</div>
            <div>메뉴바 2</div>
            <div>메뉴바 3</div>
            <div>
                <div>사용자 사진</div>
                <div>
                    <div>-</div>
                    <div>|</div>
                    <div>로그인</div>
                </div>
            </div>
        </section>
    )
}
export default Sidebar;