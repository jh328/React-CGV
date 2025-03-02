export const MovieCart = () => {
    return (
        <div className="movieChartBeScreen-wrap">
            <div className="movieChart-contents">
                <div className="movieBeScreen-btn-wrap">
                    <div className="tabBtn-wrap">
                        <h3 className="tabBtn-wrap-h3">
                            <a href="https://www.cgv.co.kr/#none" className="active">무비차트</a>
                        </h3>
                        <h3 className="movieChart-btn">
                            <a href="https://www.cgv.co.kr/#none" className="tabBtn-wrap-h3-a">상영예정작</a>
                        </h3>
                    </div>
                    <a href="http://www.cgv.co.kr/movies/?lt=1&ft=0"
                       className="btn-allView">전체보기</a>
                </div>
                <div className="movieChart-list-swiper swiper movieChart_list .swiper-wrapper" id="무비차트 영화나열">
                    <div id="이전 슬라이드"></div>
                    <div className="swiper-wrapper" style={{transform: "translate3d(0px, 0px, 0px)"}}>
                        <div className="swiper-slide movie-chart-style-obj">
                            <div className="img-wrap">
                                <img src="/images/chart/89058_320.jpg" alt="미키" className="img-zIndex"/>
                                <div className="movieAgeLimit-wrap">
                                    <i className="cgvIcon etc age15">15</i>
                                </div>
                                <div className="screenType-wrap">
                                    <i className="screenType">
                                        <img src="/images/chart/imax_white.png" alt="imax"
                                             className="screenType-img img-zIndex"/>
                                    </i>
                                    <i className="screenType screenType-top">
                                        <img src="/images/chart/forDX_white.png" alt="뽀디엑스"
                                             className="screenType-img img-zIndex"/>
                                    </i>
                                    <i className="screenType screenType-top">
                                        <img src="/images/chart/screenx_white.png" alt="스크린"
                                             className="screenType-img img-zIndex"/>
                                    </i>
                                </div>
                                <div className="movieChart-btn-wrap"></div>
                            </div>
                            <div className="movie-info-wrap">
                                <strong className="movieName">미키 17</strong>
                                <span className="movie-chart-text">
                                    <img src="/images/chart/eggGoldeneggPreegg.png" alt="계랸" className="span-img"/>
                                    90%
                                </span>
                                <span className="movie-chart-text-two movie-chart-text">
                        예매율 63.5%
                                </span>
                            </div>
                        </div>
                        <div className="swiper-slide movie-chart-style-obj">
                            <div className="img-wrap">
                                <img src="/images/chart/89386_320.jpg" alt="퇴마" className="img-zIndex"/>
                                <div className="movieAgeLimit-wrap">
                                    <i className="cgvIcon etc age12">12</i>
                                </div>
                                <div className="screenType-wrap">
                                    <i className="screenType screenType-top">
                                        <img src="/images/chart/forDX_white.png" alt="뽀디엑스"
                                             className="screenType-img img-zIndex"/>
                                    </i>
                                    <i className="screenType screenType-top">
                                        <img src="/images/chart/screenx_white.png" alt="스크린"
                                             className="screenType-img img-zIndex"/>
                                    </i>
                                </div>
                                <div className="movieChart-btn-wrap"></div>
                            </div>
                            <div className="movie-info-wrap">
                                <strong className="movieName">퇴마록</strong>
                                <span className="movie-chart-text">
                                    <img src="/images/chart/eggGoldeneggPreegg.png" alt="계랸" className="span-img"/>
                                    96%
                                </span>
                                <span className="movie-chart-text-two movie-chart-text">
                                    예매율 5.6%
                                </span>
                            </div>
                        </div>

                        <div className="swiper-slide movie-chart-style-obj">
                            <div className="img-wrap">
                                <img src="/images/chart/89434_320.jpg" alt="캡틴" className="img-zIndex"/>
                                <div className="movieAgeLimit-wrap">
                                    <i className="cgvIcon etc age12">12</i>
                                </div>
                            </div>
                            <div className="movie-info-wrap">
                                <strong className="movieName">캡틴 아메리카: 브레...</strong>
                                <span className="movie-chart-text">
                                    <img src="/images/chart/eggGoldeneggPreegg.png" alt="계랸" className="span-img"/>
                                    89%
                                </span>
                                <span className="movie-chart-text-two movie-chart-text">
                                    예매율 5.0%
                                </span>
                            </div>
                        </div>
                        <div className="swiper-slide movie-chart-style-obj">
                            <div className="img-wrap">
                                <img src="/images/chart/89423_320.jpg" alt="트로트" className="img-zIndex"/>
                                <div className="movieAgeLimit-wrap">
                                    <i className="cgvIcon etc ageAll">ALL</i>
                                </div>
                            </div>
                            <div className="movie-info-wrap">
                                <strong className="movieName">이찬원 콘서트 찬가:...</strong>
                                <span className="movie-chart-text">
                                    <img src="/images/chart/eggGoldeneggPreegg.png" alt="계랸" className="span-img"/>
                                    99%
                                </span>
                                <span className="movie-chart-text-two movie-chart-text">
                                    예매율 3.9%
                                </span>
                            </div>
                        </div>
                        <div className="swiper-slide movie-chart-style-obj">
                            <div className="img-wrap">
                                <img src="/images/chart/89438_320.jpg" alt="트와이스" className="img-zIndex"/>
                                <div className="movieAgeLimit-wrap">
                                    <i className="cgvIcon etc age12"></i>
                                </div>
                            </div>
                            <div className="movie-info-wrap">
                                <strong className="movieName">그 시절,우리가 좋...</strong>
                                <span className="movie-chart-text">
                                    <img src="/images/chart/eggGoldeneggPreegg.png" alt="계랸" className="span-img"/>
                                    81%
                                </span>
                                <span className="movie-chart-text-two movie-chart-text">
                                    예매율 3.1%
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}