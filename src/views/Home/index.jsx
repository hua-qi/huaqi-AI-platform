/* eslint-disable jsx-a11y/anchor-is-valid */
import './index.css'
const Home = () =>{
    return(
        <div className="content">
            <div className='banner'></div>
            <div className='section'>
                <div className='border'>
                    <div className='sectionOne'>
                        <div className='sectionOnetitle'>
                            AI平台 打造极致产品
                        </div>
                        <div className='box'>
                            <div className='boxOne'>
                                <ul className='boxOnelist'>
                                    <div className='boxOneTitle'>
                                        <img
                                            className='img'
                                            src={require('../../assets/images/xiangce.png')}
                                            style={{width:'55px',height:'50px'}}
                                            alt=''
                                        />
                                        图像处理
                                    </div>
                                    <li>
                                        <a href='#' className='blue'>
                                            表情识别
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' className='blue'>
                                            人脸识别
                                        </a>
                                    </li>
                                    <li>
                                        <a href='zwsb.html' className='blue'>
                                            植物识别
                                        </a>
                                    </li>

                                    <li>
                                        <a href='#'>图像分类</a>
                                    </li>
                                    <li>
                                        <a href='#'>语义分割</a>
                                    </li>
                                    <li>
                                        <a href='#'>风格迁移</a>
                                    </li>
                                    <li>
                                        <a href='#'>图像生成</a>
                                    </li>
                                    <li>
                                        <a href='#'>目标检测</a>
                                    </li>
                                    <li>
                                        <a href='#'>姿态识别</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='boxOne' id='boxTwo'>
                                <ul className='boxOnelist'>
                                    <div className='boxOneTitle'>
                                        <img
                                            className='img'
                                            src={require('../../assets/images/xiangji.png')}
                                            style={{width:'55px',height:'50px'}}
                                            alt=''
                                        />
                                        视频处理
                                    </div>

                                    <li>
                                        <a href='#'>视频摘要</a>
                                    </li>
                                    <li>
                                        <a href='#'>视频分类</a>
                                    </li>
                                    <li>
                                        <a href='#' className='blue'>
                                            视频人脸检测
                                        </a>
                                    </li>

                                    <li>
                                        <a href='#'>物体识别</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='boxOne' id='boxThree'>
                                <ul className='boxOnelist'>
                                    <div className='boxOneTitle'>
                                        <img
                                            className='img'
                                            src={require('../../assets/images/dengpao.png')}
                                            style={{width:'55px',height:'50px'}}
                                            alt=''
                                        />
                                        自然语言处理
                                    </div>

                                    <li>
                                        <a href='#'>情感分析</a>
                                    </li>
                                    <li>
                                        <a href='#'>文本摘要</a>
                                    </li>
                                    <li>
                                        <a href='#'>语音识别</a>
                                    </li>
                                    <li>
                                        <a href='#'>语法分析</a>
                                    </li>
                                    <li>
                                        <a href='#'>句法分析</a>
                                    </li>
                                    <li>
                                        <a href='#'>文本相似度</a>
                                    </li>
                                    <li>
                                        <a href='#'>文本分类</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border'>
                    <div className='sectionTwo'>
                        <div className='sectionTwotitle'>数据服务</div>
                        <div className='box'>
                            <div className='boxOne'>
                                <img
                                    className='img'
                                    src={require('../../assets/images/img1.jpg')}
                                    alt=''
                                />
                                <li className='imgTitle'>
                                    <a href='#'>数据采集能力</a>
                                </li>
                            </div>
                            <div className='boxTwo'>
                                <img
                                    className='img'
                                    src={require('../../assets/images/img2.jpg')}
                                    alt=''
                                />
                                <li className='imgTitle'>
                                    <a href='#'>大数据服务</a>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border'>
                    <div className='sectionThree'>
                        <div className='sectionThreetitle'>解决方案</div>
                        <div className='box'>
                            <div className='boxOne'>
                                <img
                                    className='img'
                                    src={require('../../assets/images/img3.jpg')}
                                    alt=''
                                />
                                <li className='imgTitle'>
                                    <a href='#'>疲劳驾驶监测</a>
                                </li>
                            </div>
                            <div className='boxTwo'>
                                <img
                                    className='img'
                                    src={require('../../assets/images/img4.jpg')}
                                    alt=''
                                />
                                <li className='imgTitle'>
                                    <a href='#'>图片无损放大</a>
                                </li>
                            </div>
                            <div className='boxThree'>
                                <img
                                    className='img'
                                    src={require('../../assets/images/img5.jpg')}
                                    alt=''
                                />
                                <li className='imgTitle'>
                                    <a href='#' className='a1'>
                                        人脸识别
                                    </a>
                                </li>
                            </div>
                            <div className='boxFour'>
                                <img
                                    className='img'
                                    src={require('../../assets/images/img6.jpg')}
                                    alt=''
                                />
                                <li className='imgTitle'>
                                    <a href='#'>地址识别</a>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}
export {Home}
