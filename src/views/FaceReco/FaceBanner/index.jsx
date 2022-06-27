import StyledBanner from './styled'
import { CLink } from '../../../common'

const FaceBanner = () => {
    return (
        <StyledBanner>
            <div className='FaceBanner'>
                <div className='banner'>
                    <div className='box'>
                        <div className='boxx'>
                            <div className='boxOne'>人脸识别</div>
                            <div className='boxTwo'>
                                基于人的脸部特征信息进行身份识别
                            </div>
                            <div className='boxThree'>
                                <CLink
                                    linkTxt='联系我们'
                                    url='callUs'
                                    type='bannerCallUs'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledBanner>
    )
}
export { FaceBanner }
