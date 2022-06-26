import StyldScheme from './styled'

import monitor from '../../../assets/images/monitor.jpg'
import enlarge from '../../../assets/images/enlarge.jpg'
import face from '../../../assets/images/face.jpg'
import address from '../../../assets/images/address.jpg'

const CScheme = () => {
    return (
        <StyldScheme>
            <div className='section-header'>解决方案</div>
            <div className='framework scheme'>
                <div className='scheme-item'>
                    <img src={monitor} alt='疲劳驾驶监测图片' />
                    <br />
                    <span>疲劳驾驶监测</span>
                </div>
                <div className='scheme-item'>
                    <img src={enlarge} alt='图片无损放大图片' />
                    <br />
                    <span>图片无损放大</span>
                </div>
                <div className='scheme-item'>
                    <img src={face} alt='人脸识别图片' />
                    <br />
                    <span>人脸识别</span>
                </div>
                <div className='scheme-item'>
                    <img src={address} alt='地址识别图片' />
                    <br />
                    <span>地址识别</span>
                </div>
            </div>
        </StyldScheme>
    )
}

export { CScheme }
