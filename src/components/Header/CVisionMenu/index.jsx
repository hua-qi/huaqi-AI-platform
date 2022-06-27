import StyldMenu from './styled'

import { CLink } from '../../../common'

const pictureProcessing = [
    {
        key: 'expression-recognition',
        label: '表情识别',
        url: '/faceRecognition',
    },
    {
        key: 'face-recognition',
        label: '人脸识别',
        url: '/faceRecognition',
    },
    {
        key: 'plant-identification',
        label: '植物识别',
        url: 'plantIdentifaction',
    },
    {
        key: 'image-classification',
        label: '图像分类',
        url: '',
    },
    {
        key: 'semantic-segmentation',
        label: '语义分割',
        url: '',
    },
    {
        key: 'style-migration',
        label: '风格迁移',
        url: '',
    },
    {
        key: 'image-generation',
        label: '图像生成',
        url: '',
    },
]

const videoProcessing = [
    {
        key: 'video-abstract',
        label: '视频摘要',
        url: '',
    },
    {
        key: 'video-classification',
        label: '视频分类',
        url: '',
    },
    {
        key: ' face-detection',
        label: '视频人脸检测',
        url: '/faceDetection',
    },
    {
        key: 'object-recognition',
        label: '物体识别',
        url: '',
    },
]

const CVisionMenu = () => {
    return (
        <StyldMenu>
            <div className='sub-menu'>
                <div className='sub-title'>图像处理</div>
                {pictureProcessing.map(item => (
                    <div className='sub-item' key={item.key}>
                        <CLink linkTxt={item.label} url={item.url} />
                    </div>
                ))}
            </div>
            <div className='sub-menu'>
                <div className='sub-title'>视频处理</div>
                {videoProcessing.map(item => (
                    <div className='sub-item' key={item.key}>
                        <CLink linkTxt={item.label} url={item.url} />
                    </div>
                ))}
            </div>
        </StyldMenu>
    )
}

export { CVisionMenu }
