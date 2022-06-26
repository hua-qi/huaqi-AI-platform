import StyledProduct from './styled'

const CProduct = () => {
    return (
        <StyledProduct>
            <div className='section-header'>AI平台 打造极致产品</div>
            <div className='framework product-list'>
                <div className='item'>
                    <div className='title'>
                        <span className='iconfont icon-tupian'></span>
                        图像处理
                    </div>
                    <ul className='detail-list'>
                        <li>表情识别</li>
                        <li>人脸识别</li>
                        <li>植物识别</li>
                        <li>图像分类</li>
                        <li>语义分隔</li>
                        <li>风格迁移</li>
                        <li>图像生成</li>
                        <li>目标检测</li>
                        <li>姿态识别</li>
                    </ul>
                </div>
                <div className='item'>
                    <div className='title'>
                        <span className='iconfont icon-record-video-full'></span>
                        视频处理
                    </div>
                    <ul className='detail-list'>
                        <li>视频摘要</li>
                        <li>视频分类</li>
                        <li>视频人脸检测</li>
                        <li>物体识别</li>
                    </ul>
                </div>
                <div className='item'>
                    <div className='title'>
                        <span className='iconfont icon-xingzhuang'></span>
                        自然语言处理
                    </div>
                    <ul className='detail-list'>
                        <li>情感分析</li>
                        <li>文本摘要</li>
                        <li>语音识别</li>
                        <li>语法分析</li>
                        <li>句法分析</li>
                        <li>文本相似度</li>
                        <li>文本分类</li>
                    </ul>
                </div>
            </div>
        </StyledProduct>
    )
}

export { CProduct }
