import Styled from "./styled";
import V1 from '../../../assets/images/video1Detected.mp4'
import V2 from '../../../assets/images/video2Detected.mp4'
import V3 from '../../../assets/images/video3Detected.mp4'
import V4 from '../../../assets/images/video4Detected.mp4'

const Show = () => {
    return (
        <Styled>
            <div className="box-item">
                <header>功能演示</header>
                <div className="content">
                    <div>
                        <div style={{height: '300px'}}>
                            <div className="con" id='show'>
                                <video className="v1" autoplay loop muted>
                                    <source src={V1} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                    <div className="con2">
                        <li><video id="F2s3_1" style={{height: '105px',width: '200px',marginBottom: '6px',cursor: 'pointer'}} src={V1}></video></li>
                        <li><video id="F2s3_1" style={{height: '105px',width: '200px',marginBottom: '6px',cursor: 'pointer'}} src={V2}></video></li>
                        <li><video id="F2s3_1" style={{height: '105px',width: '200px',marginBottom: '6px',cursor: 'pointer'}} src={V3}></video></li>
                        <li><video id="F2s3_1" style={{height: '105px',width: '200px',marginBottom: '6px',cursor: 'pointer'}} src={V4}></video></li>
                    </div>
                </div>
                </div>
        </Styled>
    )
}
export { Show }