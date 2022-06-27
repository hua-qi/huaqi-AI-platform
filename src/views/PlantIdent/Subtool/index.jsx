import { Col, Row } from 'antd';

import SubtoolStyle from './styled'

import yezi from '../../../assets/images/shuangyezi.jpg'
import xiaoxi from '../../../assets/images/xiaoxi.png'



const Subtool = () => { 
  return (
      <SubtoolStyle>
        <div className="top">
          <h2 className='title'>功能介绍</h2>
          <Row>
            <Col span={2}>
              <img src={yezi} alt="叶子" />
            </Col>
            <Col span={8}>
              <div className='headline'>识别物体名称</div>
              <div className='info'>支持识别上百种花卉，返回植物名称</div>
            </Col>
            <Col span={2}>
              <img src={xiaoxi} alt="消息" />
            </Col>
            <Col span={4}>
              <div className='headline'>获取百科信息</div>
              <div className='info'>支持返回百科词条URL</div>
            </Col>
          </Row>
        </div>
      </SubtoolStyle>
  )
}

export default Subtool