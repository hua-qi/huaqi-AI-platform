import SceneStyle from './styled'

import feature from '../../../assets/images/plant-feature.ac56883d.jpg'

const Scene = () => { 
  return (
    <SceneStyle>
      <div className="section">
        <div class="sectionThree">
              <div class="sectionThreetitle">应用场景</div>
              <div class="box">
                  <div class="boxOne">
                      <span class="content">
                          <h3 class="contentTitle">拍照识图</h3>
                          <span class="contentxt">在移动设备上，通过拍摄图片，识别图中花卉植物，广泛应用于拍照识图应用中。</span>
                      </span>
                      <img src={ feature} alt=""/>
                  </div>
              </div>
          </div>
      </div>
   </SceneStyle>
  )
}

export default Scene