export const Video = () => {
    return (
        <div className="movieSelection-wrap">
            <div className="movieContents">
                <div className="video-wrap">
                    <video className="video-wrap-video" src="">
                        <source src="https://adimg.cgv.co.kr/images/202501/Conan/0214_Conan_pc_1080x608.mp4"
                                type="video/mp4"/>
                    </video>
                    <img src="/images/header/89431_1000.jpg" alt=""/>
                    <strong className="movieSelection-title">명탐정 코난: 14번째 표적</strong>
                    <span className="movieSection-text">
                        실관람평지수 98%
                        <br/>
                        지금 예매
                    </span>
                    <div className="movieSelection-video-controller-wrap">
                        <a href="http://www.cgv.co.kr/movies/detail-view/?midx=89431"
                           className="btn-movieSelection-detailView">상세보기</a>
                        <a href="https://www.cgv.co.kr/#none" className="btn-movieSelection-playStop"></a>
                        <a href="https://www.cgv.co.kr/#none" className="btn-movieSelection-soundOnOff"></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

/*이에지소프트, 내일 면접 가능하ㅏㄷ. 오전 10시 면접 사무실 위치는 문자로 준다. 이거 확인해서, 영등포구청역이다. 오전 10시까지
* 따로 개발 관련해서, 교육만 받았다. */