import PlantHeader from './styled'
import React from 'react'
import plantImg from '../../../assets/images/background.jpg'

const Header = () => { 
  return (
      <PlantHeader>
        <div className="content">
            <div className='img'>
                <img className='plant-img' src={plantImg} alt="" /> 
            </div>
            <div className='detail'>
                <p className='title'>植物识别</p>
                <p className='info'>支持百种花卉识别，返回中英文名称</p>
                <button>
                  联系我们
                </button>
            </div>
        </div>
      </PlantHeader>    
  )
}

export default Header
