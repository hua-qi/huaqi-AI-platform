import FunDisplayStyle from './styled'

import xiaoxi1 from '../../../assets/images/xiao1.jpg'
import xiaoxi2 from '../../../assets/images/xiao2.jpg'
import xiaoxi3 from '../../../assets/images/xiao3.jpg'
import xiaoxi4 from '../../../assets/images/xiao4.jpg'

const herf = '#'

const FunDisplay = () => { 
  return (
    <FunDisplayStyle>
      <div class="section">
        <div className='sectionTwo'>
          <div className='sectionTwotitle'>功能演示</div>
          <div className='box'>
              <div className='boxOne' id='imgCenter'>
                  <a href={ herf}>
                    <span title="查看详情">识别结果：</span>玫瑰(rose)
                   </a>
                  <div className='bottom'>
                      <div className="bottomOne">
                        <input type="text" placeholder="&nbsp;&nbsp;&nbsp;请输入网络图片URL" class="txt" />&nbsp;&nbsp;
                        <input type="button" value="检测" class="jiance"/>&nbsp;&nbsp;&nbsp;或&nbsp;&nbsp;&nbsp;
                        <input type="button" value="本地上传" class="shangchuan"/>
                      </div>
                      <div class="bottomTwo">
                        图片文件类型支持PNG、JPG、JPEG，图片大小不超过2M。
                      </div>
                  </div>
              </div>
              <div className="boxTwo">
                  <div class="img">
                    <div class="item one">
                      <img src={ xiaoxi1} alt='消息1' id="img1"/>
                    </div>
                    <div className="item two">
                      <img src={ xiaoxi2} alt="消息2" id="img2"/>
                    </div>
                    <div className="item three">
                      <img src={ xiaoxi3} alt="消息3" id="img3"/>
                    </div>
                    <div className="item four">
                      <img src={ xiaoxi4} alt='消息4' id="img4"/>
                    </div> 
                  </div>
              </div>
          </div>
        </div>
      </div>
    </FunDisplayStyle>
  )
}

export default FunDisplay