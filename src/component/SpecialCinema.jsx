export const SpecialCinema = () => {
    return (
        <div className="specialHall-wrap">
            <div className="cienma-contains">
                <div className="cenima-title-wrap">
                    <h3>특별관</h3>
                    <a href="http://www.cgv.co.kr/theaters/special/defaultNew.aspx"
                       className="btn-allView">전체보기</a>
                </div>
                <div className="cenima-content">
                    <a href="http://www.cgv.co.kr/theaters/special/defaultDetailNew.aspx?idx=7">
                        <div className="special-img-wrap">
                            <img src="/images/special/17331884315310.png" alt="" className="special-img"/>
                        </div>
                    </a>
                    <ul className="specialHall-list">
                        <li className="specialCinema-list-active">
                            <a href="">
                                <strong>SUITE CINEMA</strong>
                                <div className="specialCinema-hashTag-wrap">
                                    <span>#호텔 컨셉의 프리미엄관</span>
                                </div>
                            </a>
                        </li>
                        <li className="specialCinema-list-active">
                            <a href="">
                                <strong>CINE & LIVINGROOM</strong>
                                <div className="specialCinema-hashTag-wrap">
                                    <span>#신개념 소셜 상영관</span>
                                </div>
                            </a>
                        </li>
                        <li className="specialCinema-list-active">
                            <a href="">
                                <strong>4DX</strong>
                                <div className="specialCinema-hashTag-wrap">
                                    <span>#모션시트 #오감체험</span>
                                </div>
                            </a>
                        </li>
                        <li className="specialCinema-list-active">
                            <a href="">
                                <strong>CINE DE CHEF</strong>
                                <div className="specialCinema-hashTag-wrap">
                                    <span>#쉐프가 있는 여화관</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}