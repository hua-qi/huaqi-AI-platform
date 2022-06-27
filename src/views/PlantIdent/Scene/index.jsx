import SceneStyle from './styled'

import feature from '../../../assets/images/plant-feature.ac56883d.jpg'

const Scene = () => {
    return (
        <SceneStyle>
            <div className='section'>
                <div className='sectionThree'>
                    <div className='sectionThreetitle'>应用场景</div>
                    <div className='box'>
                        <div className='boxOne'>
                            <span className='content'>
                                <h3 className='contentTitle'>拍照识图</h3>
                                <span className='contentxt'>
                                    在移动设备上，通过拍摄图片，识别图中花卉植物，广泛应用于拍照识图应用中。
                                </span>
                            </span>
                            <img src={feature} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </SceneStyle>
    )
}

export default Scene
