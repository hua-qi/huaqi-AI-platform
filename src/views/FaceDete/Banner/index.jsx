import StyledBanner from './styled'

const Banner = () => {
    return (
        <StyledBanner>
            <div className="banner">
                <div className="Facetext">视频人脸检测</div>
                <div className="Facetextin">基于人的脸部特征信息进行身份识别</div>
                <div className="btn"><button><span>联系我们</span></button></div>
            </div>
        </StyledBanner>
    )

}
export { Banner }