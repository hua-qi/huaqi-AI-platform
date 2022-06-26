import StyledCom from './styled'

import phoneImg from '../../../assets/images/phone.png'
import QQImg from '../../../assets/images/QQ.png'
import locationImg from '../../../assets/images/location.png'

const CCommunication = () => {
    return (
        <StyledCom>
            <div className='section-title'>
                <div className='contact'>联系方式</div>
                <div className='contact-us'>CONTACT US</div>
            </div>
            <div className='contact-list'>
                <div>
                    <img src={phoneImg} alt='电话形状的图片' /> 手机:
                    18633900235
                </div>
                <div>
                    <img src={QQImg} alt='类似短信图片' /> QQ: 1751404481
                </div>
                <div>
                    <img src={locationImg} alt='一个箭头图片' />{' '}
                    地址：河北省石家庄市方大科技园
                </div>
            </div>
        </StyledCom>
    )
}

export default CCommunication
