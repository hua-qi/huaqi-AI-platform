import StyledBottom from './styled'
import algorithm  from '../../../assets/images/主流算法.png'
import fuwu from '../../../assets/images/服务稳定高效.png'
import linghuo from '../../../assets/images/灵活简单易用.png'

const FaceBottom =()=>{
    return(
        <StyledBottom>
            <div className='section'>
            <div className="sectionThree">
            <div className="sectionThreetitle">特色优势</div>
            <div className="box" style={{display: 'flex',justifyContent:'space-between'}}>
                <div className="boxOne">
                    <img src={algorithm} alt="" style={{width: '50px', height: '50px'}} />
                    <span className="content">
                        <h2 className="contentTitle">主流算法</h2>
                        <span className="contentxt">基于caffe框架和海量数据训练，算法识别准确率高</span>
                    </span>
                </div>
                <div className="boxOne boxTwo">
                    <img src={fuwu} alt="" style={{width: '50px', height: '50px'}} />
                    <span className="content">
                        <h2 className="contentTitle">服务稳定高效</h2>
                        <span className="contentxt">提供企业级稳定、精确的大流量服务。支持毫秒级的识别响应能力、弹性灵活的高并发</span>
                    </span>
                </div>
                <div className="boxOne boxTwo boxThree">
                    <img src={linghuo} alt="" style={{width: '50px', height: '50px'}} />
                    <span className="content">
                        <h2 className="contentTitle">灵活简单易用</h2>
                        <span className="contentxt">可对SDK进行二次开发，灵活调整业务代码，实现不同的业务功能</span>
                    </span>
                </div>
            </div>
        </div>
        <div className="sectionForth">
            <div className="sectionForthtitle">使用方式</div>
            <div className="box">
                <div className="boxOne">
                    <span className="content">
                        <h2 className="contentTitle">离线采集SDK</h2>
                        <span className="contentxt">集成到单台硬件设备中，实现人脸检测、人脸关键点采集、在设备端离线完成从静态图片、视频流中检测并捕获人脸功能</span>
                    </span>
                </div>
                <div className="boxTwo">
                    <span className="content">
                        <h2 className="contentTitle">私有化部署</h2>
                        <span className="contentxt" style={{fontSize: '14px'}}>提供一体机和软件部署包两种私有化方案 ，在本地服务器部署后，实现图片中的人脸检测、关键点定位和属性识别功能，支持分布式高并发业务处理，适用于安防、监控等场景</span>
                    </span>
                </div>
            </div>
        </div>
            </div>
            <div class="sectionFour">
        <div class="box">
            <div class="input">
                <input type="button" src="" value="联系我们" />
            </div>
        </div>
    </div>
        </StyledBottom>
    )
}
export {FaceBottom}
