import StyledProduct from './styled'

import { CLink } from '../../../common'

const imageList = [
    {
        key: 'expression-recognition',
        label: '表情识别',
        url: 'faceRecognition',
    },
    {
        key: 'face-recognition',
        label: '人脸识别',
        url: 'faceRecognition',
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
        key: 'semantic-space',
        label: '语义分隔',
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
    {
        key: 'target-detection',
        label: '目标检测',
        url: '',
    },
    {
        key: 'gesture -ecognition',
        label: '姿态识别',
        url: '',
    },
]

const videoList = [
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
        key: 'face-detection',
        label: '视频人脸检测',
        url: '',
    },
    {
        key: 'object-recognition',
        label: '物体识别',
        url: '',
    },
]

const languageList = [
    {
        ket: 'sentiment-analysis',
        label: '情感分析',
        url: '',
    },
    {
        ket: 'text-summarization',
        label: '文本摘要',
        url: '',
    },
    {
        ket: 'speech-recognition',
        label: '语音识别',
        url: '',
    },
    {
        ket: 'syntax-analysis',
        label: '语法分析',
        url: '',
    },
    {
        ket: 'syntactic-analysis',
        label: '句法分析',
        url: '',
    },
    {
        ket: 'text-similarity',
        label: '文本相似度',
        url: '',
    },
    {
        ket: 'text-classification',
        label: '文本分类',
        url: '',
    },
]

const itemList = [
    {
        key: 'image',
        title: '图像处理',
        list: imageList,
    },
    {
        key: 'video',
        title: '视频处理',
        list: videoList,
    },
    {
        key: 'language',
        title: '自然语言处理',
        list: languageList,
    },
]

const CProduct = () => {
    return (
        <StyledProduct>
            <div className='section-header'>AI平台 打造极致产品</div>
            <div className='framework product-list'>
                {itemList.map(item => {
                    return (
                        <div key={item.key} className='item'>
                            <div className='title'>
                                <span className='iconfont icon-tupian'></span>
                                {item.title}
                            </div>
                            <ul className='detail-list'>
                                {item.list.map(detail => {
                                    return (
                                        <li key={detail.key}>
                                            <CLink
                                                linkTxt={detail.label}
                                                url={detail.url}
                                            />
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </StyledProduct>
    )
}

export { CProduct }
