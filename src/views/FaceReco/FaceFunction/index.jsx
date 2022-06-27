import StyleFunction from './styled'

import people from '../../../assets/images/小人.png'
import shield from '../../../assets/images/护盾.png'
import facce from '../../../assets/images/扫描人脸.png'

const FaceFunction = () => {
    return (
        <StyleFunction>
            <div className='section'>
                <div className='sectionOne'>
                    <div className='sectionOnetitle'>功能介绍</div>
                    <div
                        className='box'
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div className='boxOne'>
                            <img
                                src={people}
                                alt=''
                                style={{
                                    width: '45px',
                                    height: '45px',
                                    position: 'relative',
                                    top: '50px',
                                    left: '-110px',
                                }}
                            />
                            <span className='content'>
                                <h2 className='contentTitle'>人脸检测定位</h2>
                                <span className='contentxt'>
                                    检测图片中的人脸并标记出人脸坐标，支持同时识别多张人脸
                                </span>
                            </span>
                        </div>
                        <div className='boxOne boxTwo'>
                            <img
                                src={shield}
                                alt=''
                                style={{
                                    width: '45px',
                                    height: '45px',
                                    position: 'relative',
                                    top: '50px',
                                    left: '-110px',
                                }}
                            />
                            <span className='content'>
                                <h2 className='contentTitle'>图片质量控制</h2>
                                <span className='contentxt'>
                                    分析图片中的多种特征，确保图片符合质量标准
                                </span>
                            </span>
                        </div>
                        <div className='boxOne boxTwo boxThree'>
                            <img
                                src={facce}
                                alt=''
                                style={{
                                    width: '45px',
                                    height: '45px',
                                    position: 'relative',
                                    top: '50px',
                                    left: '-170px',
                                }}
                            />
                            <span className='content'>
                                <h2 className='contentTitle'>150关键点定位</h2>
                                <span className='contentxt'>
                                    精准定位包括双眼、口、鼻等人脸五官关键点
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </StyleFunction>
    )
}
export { FaceFunction }
