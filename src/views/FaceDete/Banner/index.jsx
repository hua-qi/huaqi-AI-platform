import StyledBanner from './styled'
import { CLink } from '../../../common'

const Banner = () => {
    return (
        <StyledBanner>
            <div className='banner'>
                <div className='Facetext'>视频人脸检测</div>
                <div className='Facetextin'>
                    基于人的脸部特征信息进行身份识别
                </div>
                <div className='btn'>
                    <CLink
                        linkTxt='联系我们'
                        url='callUs'
                        type='bannerCallUs'
                    />
                </div>
            </div>
        </StyledBanner>
    )
}
export { Banner }
