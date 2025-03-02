export const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <div className="contents">
                    <h1 className="h1-contents">
                        <a href="/" className="cgv-image">
                            <img src="/images/header/logoRed.png" className="cgv-h1-image" alt="cgv"/>
                        </a>
                        <span className="span-deep">DEEP DIVE SPACE</span>
                    </h1>
                    <ul className="memberInfo-wrap">
                        <div className="ad-partner">
                            <a href="http://www.cgv.co.kr/culture-event/event/detailViewUnited.aspx?seq=31426&menu=006">
                                <img src="/images/header/16758461047540.png" alt="현대"/>
                            </a>
                        </div>
                        <li className="memberInfo_wrap-li">
                            <a href="https://www.cgv.co.kr/user/login/?returnURL=https%3a%2f%2fwww.cgv.co.kr%2fdefault.aspx"
                               className="memberInfo-wrap-li-">
                                <img src="/images/header/loginPassword.png" alt="로그인" className="memberInfo-a-img"/>
                                <span className="memberInfo-span">로그인</span>
                            </a>
                        </li>
                        <li className="memberInfo_wrap-li">
                            <a href="http://www.cgv.co.kr/user/join/"
                               className="memberInfo-wrap-li-">
                                <img src="/images/header/loginJoin.png"
                                     className="memberInfo-a-img"
                                     alt="회원가입"/>
                                <span className="memberInfo-span">회원가입</span>
                            </a>
                        </li>
                        <li className="memberInfo_wrap-li">
                            <a href="https://www.cgv.co.kr/user/login/?returnURL=%2fuser%2fmycgv%2fdefault.aspx"
                               className="memberInfo-wrap-li-">
                                <img src="/images/header/loginJoin.png" alt="MY CGV" className="memberInfo-a-img"/>
                                <span className="memberInfo-span">MY CGV</span>
                            </a>
                        </li>
                        <li className="memberInfo_wrap-li">
                            <a href="http://www.cgv.co.kr/support/default.aspx" className="memberInfo-wrap-li-">
                                <img src="/images/header/loginCustomer.png" alt="고객센터" className="memberInfo-a-img"/>
                                <span className="memberInfo-span">고객센터</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="nav" style={{left: "0"}}>
                <div className="nav-contents">
                    <h1 className="contents-h1">
                        <a href="https://www.cgv.co.kr/">
                            <img src="/images/header/logoWhite.png" alt="CGV"/>
                        </a>
                    </h1>
                    <ul className="nav-menu">
                        <li style={{width: "137", padding: "20px 0"}}>
                            <h2 className="nav-menu">
                                <a href="http://www.cgv.co.kr/movies/?lt=1&ft=0" className="nav-menu">영화</a>
                            </h2>
                            <dl className="nav-overMenu" style={{display: "nobe"}}>
                                <dt className="nav-overMenu-dt" style={{display: "none"}}>
                                    <h2>
                                        <a className="nav-overMenu-dt-a"
                                           href="http://www.cgv.co.kr/movies/?lt=1&ft=0">영화</a>
                                    </h2>
                                </dt>
                                <dd></dd>
                                <dd></dd>
                                <dd></dd>
                            </dl>
                        </li>
                        <li className="menu-li">
                            <h2 className="nav-menu">
                                <a href="http://www.cgv.co.kr/theaters/" className="nav-menu">극장</a>
                            </h2>
                            <dl className="nav-overMenu"></dl>
                        </li>
                        <li className="menu-li">
                            <h2 className="nav-menu">
                                <a href="http://www.cgv.co.kr/ticket/" className="nav-menu">
                                    <strong className="nav-menu">예매</strong>
                                </a>
                            </h2>
                        </li>
                        <li className="menu-li">
                            <h2 className="nav-menu">
                                <a href="https://www.cgv.co.kr/culture-event/popcorn-store/"
                                   className="nav-menu">스토어</a>
                            </h2>
                        </li>
                        <li className="menu-li">
                            <h2 className="nav-menu">
                                <a href="http://www.cgv.co.kr/culture-event/event/defaultNew.aspx#1"
                                   className="nav-menu">이벤트</a>
                            </h2>
                        </li>
                        <li className="menu-li-d">
                            <h2 className="nav-menu">
                                <a href="http://www.cgv.co.kr/discount/discountlist.aspx#1"
                                   className="nav-menu">혜택</a>
                            </h2>
                        </li>
                    </ul>
                    <div className="totalSearch-wrap">
                        <label className="totalSearch" htmlFor="totalSearch">
                            <input type="text" value="검색"/>
                            <input type="hidden" />
                        </label>
                        <button className="btn-totalSearch">검색</button>
                    </div>
                </div>
            </div>
        </div>
    )
}