import StyldScheme from './styled'

import { CLink } from '../../../common'

import monitor from '../../../assets/images/monitor.jpg'
import enlarge from '../../../assets/images/enlarge.jpg'
import face from '../../../assets/images/face.jpg'
import address from '../../../assets/images/address.jpg'

const schemeList = [
    {
        key: 'fatigue-monitoring',
        src: monitor,
        alt: '疲劳驾驶监测图片',
        label: '疲劳驾驶监测',
        url: '',
    },
    {
        key: 'image-magnification',
        src: enlarge,
        alt: '图片无损放大图片',
        label: '图片无损放大',
        url: '',
    },
    {
        key: 'face-recognition',
        src: face,
        alt: '人脸识别图片',
        label: '人脸识别',
        url: 'faceRecognition',
    },
    {
        key: 'address-recognition',
        src: address,
        alt: '地址识别图片',
        label: '地址识别',
        url: '',
    },
]

const CScheme = () => {
    return (
        <StyldScheme>
            <div className='section-header'>解决方案</div>
            <div className='framework scheme'>
                {schemeList.map(item => {
                    const { key, src, alt, label, url } = item
                    return (
                        <div className='scheme-item' key={key}>
                            <img src={src} alt={alt} />
                            <br />
                            <CLink linkTxt={label} url={url} type='homeItem' />
                        </div>
                    )
                })}
            </div>
        </StyldScheme>
    )
}

export { CScheme }
