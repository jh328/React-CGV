export const Notice = () => {
    return (
        <div className="notice-wrap">
            <div className="notice-contents">
                <div className="notice-container">
                    <div className="notice-content">
                        <div className="notice-wrap-title">
                            <strong>공지사항</strong>
                            <a href="http://www.cgv.co.kr/support/news/detail-view.aspx?idx=8042&page=1&type=&searchtext=&searchfield=0&pb=Y"
                               className="notice-link">[시스템 점검]IOS 18 업데이트 관련 예매 서비스 이용 안내</a>
                            <a href="http://www.cgv.co.kr/support/news/default.aspx" className="btn-more">더보기</a>
                        </div>
                        <div className="client-wrap">
                            <dl className="client-list">
                                <dt>
                                    <strong>고객센터</strong>
                                </dt>
                                <dd>
                                    <strong>1544-1122</strong>
                                    <span>고객센터 운영시간 (평일 09:00~18:00)</span>
                                    <p>영업시간 외 자동응답 안내 가능합니다.</p>
                                </dd>
                            </dl>
                            <div className="client-btn-wrap">
                                <a href="http://www.cgv.co.kr/support/faq/default.aspx">FAQ</a>
                                <a href="http://www.cgv.co.kr/user/login/?returnURL=%2fsupport%2fqna%2fdefault.aspx">1:1문의</a>
                                <a href="http://www.cgv.co.kr/support/lease/default.aspx">대관/단체 문의</a>
                            </div>
                        </div>
                    </div>
                    <div className="qr-wrap">
                        <strong>앱 다운로드</strong>
                        <span>CGV앱에서 더 편리하게 이용하세요</span>
                        <div className="qr-img-wrap">
                        </div>
                        <p>
                            QR코드를 스캔하고
                            <br/>
                            앱 설치 페이지로 바로 이동하세요
                        </p>
                    </div>
                </div>
                <div className="notice-banner-wrap"></div>

            </div>
        </div>
    )
}