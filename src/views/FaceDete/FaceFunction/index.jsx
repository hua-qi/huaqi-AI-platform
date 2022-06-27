import StyleFunction from './styled'
import people from '../../../assets/images/小人.png'
import shield from '../../../assets/images/护盾.png'
import facce from '../../../assets/images/扫描人脸.png'

const FaceFunction = () => {
    return (
        <StyleFunction>
            <div class='box-item'>
                <header>功能介绍</header>
                <div class='el-row'>
                    <div class='el-col'>
                        <div class='el-col1-1'>
                            <img src={people} alt='' />
                        </div>
                        <div class='el-col1-2'>
                            <dt style={{ fontSize: '22px', fontWeight: '700' }}>
                                人脸检测定位
                            </dt>
                            <dt style={{ fontSize: '14px', marginTop: '20px' }}>
                                检测图片中的人脸并标记出人脸坐标，支持同时识别多张人脸
                            </dt>
                        </div>
                    </div>
                    <div class='fl-col'>
                        <div class='el-col1-1'>
                            <img src={shield} alt='' />
                        </div>
                        <div class='fl-col1-2'>
                            <dt style={{ fontSize: '22px', fontWeight: '700' }}>
                                图片质量控制
                            </dt>
                            <dt style={{ fontSize: '14px', marginTop: '20px' }}>
                                分析图片中的多种特征，确保图片符合质量标准
                            </dt>
                        </div>
                    </div>
                    <div class='dl-col'>
                        <div class='el-col1-1'>
                            <img src={facce} alt='' />
                        </div>
                        <div class='dl-col1-2'>
                            <dt style={{ fontSize: '22px', fontWeight: '700' }}>
                                150关键点定位
                            </dt>
                            <dt style={{ fontSize: '14px', marginTop: '20px' }}>
                                精准定位包括双眼、口、鼻等人脸五官关键点
                            </dt>
                        </div>
                    </div>
                </div>
            </div>
        </StyleFunction>
    )
}
export { FaceFunction }
